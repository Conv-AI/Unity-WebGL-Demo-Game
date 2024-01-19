using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Convai.Scripts.Utils;
using TMPro;
using UnityEngine;
using Logger = Convai.Scripts.Utils.Logger;

// using Grpc.Core;
#if UNITY_ANDROID
using UnityEngine.Android;
#endif

// This script uses gRPC for streaming and is a work in progress
// Edit this script directly to customize your intelligent NPC character

namespace Convai.Scripts
{
    [RequireComponent(typeof(Animator), typeof(AudioSource))]
    [AddComponentMenu("Convai/ConvaiNPC")]
    [HelpURL(
        "https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/overview-of-the-convainpc.cs-script")]
    public class ConvaiNPC : MonoBehaviour
    {
        private const int AUDIO_SAMPLE_RATE = 44100;
        private const int RECORDING_FREQUENCY = AUDIO_SAMPLE_RATE;
        private const int RECORDING_LENGTH = 30;
        private static readonly int Talk = Animator.StringToHash("Talk");

        [Header("Character Information")] [Tooltip("Enter the character name for this NPC.")]
        public string characterName;

        [Tooltip("Enter the character ID for this NPC.")]
        public string characterID;

        [Tooltip("The current session ID for the chat with this NPC.")] [ReadOnly]
        public string sessionID = "-1";

        [Tooltip("Is this character talking?")] [ReadOnly]
        public bool isCharacterTalking;

        private readonly List<ResponseAudio> _responseAudios = new();
        public readonly List<AudioData> AudioDataList = new();
        private bool _animationPlaying;
        private AudioSource _audioSource;
        private Animator _characterAnimator;
        private ConvaiChatUIHandler _convaiChatUIHandler;
        private TMP_InputField _currentInputField;
        private ConvaiGRPCWebAPI _grpcWebAPI;
        private bool _isActionActive;

        [Tooltip("Is this character active?")] [ReadOnly]
        private bool _isCharacterActive;

        private bool _isLipSyncActive;
        private bool _playingStopLoop;
        private bool _stopAudioPlayingLoop;

        public bool IsCharacterActive
        {
            get => _isCharacterActive;
            set
            {
                _isCharacterActive = value;
                if (_isCharacterActive) OnCharacterActivated?.Invoke();
            }
        }

        // Properties with getters and setters
        [field: NonSerialized] public bool LipSync { get; set; }
        [field: NonSerialized] public bool HeadEyeTracking { get; set; }
        [field: NonSerialized] public bool EyeBlinking { get; set; }


        private void Awake()
        {
            // Find and assign the ConvaiChatUIHandler component in the scene
            _convaiChatUIHandler = FindObjectOfType<ConvaiChatUIHandler>();

            // Find and assign the ConvaiCrosshairHandler component in the scene
            FindObjectOfType<ConvaiCrosshairHandler>();

            // Get the AudioSource component attached to the same GameObject
            _audioSource = GetComponent<AudioSource>();

            // Get the Animator component attached to the same GameObject
            _characterAnimator = GetComponent<Animator>();
            OnCharacterSpeaking += HandleCharacterTalkingAnimation;
        }

        private void Start()
        {
            // Assign the ConvaiGRPCAPI component in the scene
            _grpcWebAPI = ConvaiGRPCWebAPI.Instance;

            // Start the coroutine that plays audio clips in order
            StartCoroutine(PlayAudioInOrder());
            InvokeRepeating(nameof(ProcessResponse), 0f, 1 / 100f);
            StartCoroutine(WatchForInputSubmission());

#if UNITY_WEBGL && !UNITY_EDITOR
            _grpcWebAPI.InitializeConvaiClient(characterID, true, false);
            Debug.Log("ConvaiNPC component initialized");
#else
            Debug.LogWarning("WebGL SDK does not run in Unity Editor. Please build and run in WebGL.");
#endif
        }


        private void Update()
        {
            // Handle text input focus and submission
            if (IsCharacterActive) HandleTextInput();
            HandlePlayerInputs();
        }

        private void OnEnable()
        {
            _convaiChatUIHandler = ConvaiChatUIHandler.Instance;
            if (_convaiChatUIHandler != null) _convaiChatUIHandler.UpdateCharacterList();
        }

        private void OnDestroy()
        {
            OnCharacterSpeaking -= HandleCharacterTalkingAnimation;
            if (_convaiChatUIHandler != null) _convaiChatUIHandler.UpdateCharacterList();
        }

        /// <summary>
        ///     Unity callback that is invoked when the application is quitting.
        ///     Stops the loop that plays audio in order.
        /// </summary>
        private void OnApplicationQuit()
        {
            // Set the flag to stop the loop that plays audio
            _stopAudioPlayingLoop = true;
        }

        /// <summary>
        ///     Handles the character's talking animation based on whether the character is currently talking.
        /// </summary>
        private void HandleCharacterTalkingAnimation(bool isTalking)
        {
            if (isTalking)
            {
                if (!_animationPlaying)
                {
                    _animationPlaying = true;
                    _characterAnimator.SetBool(Talk, true);
                }
            }
            else if (_animationPlaying)
            {
                _animationPlaying = false;
                _characterAnimator.SetBool(Talk, false);
            }
        }

        /// <summary>
        ///     Handles user text input and submission.
        /// </summary>
        private void HandleTextInput()
        {
            if (_currentInputField != null && _currentInputField.isFocused)
            {
                if (ConvaiInputManager.Instance.WasTextSendKeyPressed())
                {
                    HandleInputSubmission(_currentInputField.text);
                    _currentInputField.text = "";
                    _currentInputField.DeactivateInputField();
                }
                else if (ConvaiInputManager.Instance.WasCursorLockKeyPressed())
                {
                    _currentInputField.text = "";
                    _currentInputField.DeactivateInputField();
                }
                // Prevent further input handling when the input field is focused
            }
        }

        /// <summary>
        ///     Handles basic character-specific actions such as starting and stopping audio recording.
        /// </summary>
        private void HandlePlayerInputs()
        {
            // Start recording audio when the T key is pressed
            if (ConvaiInputManager.Instance.WasTalkKeyPressed())
            {
                // Handle character-specific actions if the character is active and the input field is not focused
                if (IsCharacterActive && (_currentInputField == null || !_currentInputField.isFocused))
                {
                    UpdateActionConfig();
                    StartListening();
                }
                else
                {
                    NotificationSystemHandler.Instance.NotificationRequest(NotificationType
                        .NotCloseEnoughForConversation);
                }
            }
            // Stop recording audio when the T key is released
            else if (ConvaiInputManager.Instance.WasTalkKeyReleased())
            {
                StopListening();
            }
        }

        /// <summary>
        ///     Updates the action configuration with the current attention object, ie the object currently being pointed by the
        ///     crosshair
        /// </summary>
        private void UpdateActionConfig()
        {
            // if (_actionConfig != null && _convaiCrosshairHandler != null)
            //     _actionConfig.CurrentAttentionObject = _convaiCrosshairHandler.FindPlayerReferenceObject();
        }

        /// <summary>
        ///     Watches for input submission in the scene and updates the current input field.
        ///     This coroutine runs indefinitely and should be started only once.
        /// </summary>
        private IEnumerator WatchForInputSubmission()
        {
            while (true)
            {
                TMP_InputField inputFieldInScene = FindActiveInputField();

                if (inputFieldInScene != null && _currentInputField != inputFieldInScene)
                {
                    if (_currentInputField != null) _currentInputField.onSubmit.RemoveAllListeners();

                    _currentInputField = inputFieldInScene;
                    _currentInputField.onSubmit.AddListener(HandleInputSubmission);
                }

                // Wait until the next frame before checking again
                yield return null;
            }
            // ReSharper disable once IteratorNeverReturns
        }

        /// <summary>
        ///     Finds the active input field in the scene.
        /// </summary>
        /// <returns>The active TMP_InputField if found, otherwise null.</returns>
        public TMP_InputField FindActiveInputField()
        {
            // Find all TMP_InputField components in the scene
            TMP_InputField[] inputFields = FindObjectsOfType<TMP_InputField>();

            // Return the first active and interactable input field (if any)
            return inputFields.FirstOrDefault(inputField =>
                inputField.gameObject.activeInHierarchy && inputField.interactable);

            // If no active and interactable input field is found, return null
        }

        public event Action OnCharacterActivated;


        private void HandleInputSubmission(string input)
        {
            Logger.DebugLog("Sending user text to the server...", Logger.LogCategory.Character);
            _convaiChatUIHandler.SendPlayerText(input);

            // Run SendTextData without awaiting it to avoid blocking the UI thread.
            // Capture the context to return to the main thread after the call.
            SendTextDataAsync(input);

            // Clear the input field text
            // ReSharper disable once Unity.PerformanceCriticalCodeNullComparison
            if (FindActiveInputField() != null) FindActiveInputField().text = "";
        }

        /// <summary>
        ///     Sends text data to the server asynchronously.
        /// </summary>
        /// <param name="text">The text to send.</param>
        private void SendTextDataAsync(string text)
        {
            try
            {
                // await ConvaiGRPCWebAPI.Instance.SendTextData(_client, text, characterID,
                //     _isActionActive, _isLipSyncActive, _actionConfig, _faceModel);

                _grpcWebAPI.SendTextData(text);
            }
            catch (Exception ex)
            {
                Logger.Error(ex, Logger.LogCategory.Character);
                // Handle the exception, e.g., show a message to the user.
            }
        }

        /// <summary>
        ///     Initializes the session in an asynchronous manner and handles the receiving of results from the server.
        ///     Initiates the audio recording process using the gRPC API.
        /// </summary>
        public void StartListening()
        {
            _grpcWebAPI.StartRecordAudio();
        }

        /// <summary>
        ///     Stops the ongoing audio recording process.
        /// </summary>
        public void StopListening()
        {
            // Stop the audio recording process using the ConvaiGRPCAPI StopRecordAudio method
            _grpcWebAPI.StopRecordAudio();
        }

        /// <summary>
        ///     Processes a response fetched from a character.
        /// </summary>
        /// <remarks>
        ///     1. Processes audio/text/face data from the response and adds it to _responseAudios.
        ///     2. Identifies actions from the response and parses them for execution.
        /// </remarks>
        private void ProcessResponse()
        {
            if (IsCharacterActive && AudioDataList.Count > 0)
            {
                AudioData audioData = AudioDataList[0];
                string tempString = "";

                SetCharacterTalking(true);

                if (audioData.resText != null)
                    tempString = audioData.resText;

                AudioClip clip;

                if (audioData.isFirst)
                    clip = _grpcWebAPI.ProcessByteAudioDataToTrimmedAudioClip(audioData.audData,
                        audioData.sampleRate.ToString());
                else
                    clip = _grpcWebAPI.ProcessByteAudioDataToAudioClip(audioData.audData,
                        audioData.sampleRate.ToString());

                if (clip != null)
                    _responseAudios.Add(new ResponseAudio
                    {
                        AudioClip = clip
                    });

                AudioDataList.RemoveAt(0);
            }
        }

        public void StopAllAudioPlayback()
        {
            if (_audioSource != null && _audioSource.isPlaying) _audioSource.Stop(); // Stops the audio if it's playing
        }

        public void ResetCharacterAnimation()
        {
            if (_characterAnimator != null)
                _characterAnimator.SetBool(Talk,
                    false); // Assuming 'Talk' is the parameter controlling the talking animation
        }

        private void SetCharacterTalking(bool isTalking)
        {
            if (isCharacterTalking != isTalking)
            {
                isCharacterTalking = isTalking;
                OnCharacterSpeaking?.Invoke(isCharacterTalking);
            }
        }

        public event Action<bool> OnCharacterSpeaking;

        /// <summary>
        ///     Plays audio clips attached to characters in the order of responses.
        /// </summary>
        /// <returns>
        ///     A IEnumerator that can facilitate coroutine functionality
        /// </returns>
        /// <remarks>
        ///     1. Starts a loop that plays audio from response, and performs corresponding actions and animations.
        ///     2. Loop continues until the application quits.
        /// </remarks>
        private IEnumerator PlayAudioInOrder()
        {
            while (!_stopAudioPlayingLoop)
                // Check if there are audio clips in the playlist
                if (_responseAudios.Count > 0)
                {
                    PlayResponseAudio(_responseAudios[0]);
                    yield return new WaitForSeconds(_responseAudios[0].AudioClip.length);
                    _audioSource.Stop();
                    _audioSource.clip = null;
                    _responseAudios.RemoveAt(0);
                }
                else
                {
                    yield return new WaitForSeconds(0.1f);
                    SetCharacterTalking(false);
                }
        }

        private void PlayResponseAudio(ResponseAudio responseAudio)
        {
            _audioSource.clip = responseAudio.AudioClip;
            _audioSource.Play();
            SetCharacterTalking(true);
        }

        private class ResponseAudio
        {
            public AudioClip AudioClip;
            public bool IsFinal;
        }
    }
}