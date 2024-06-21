using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Convai.Scripts.Utils;
using TMPro;
using UnityEngine;
using Logger = Convai.Scripts.Utils.Logger;

#if UNITY_ANDROID
using UnityEngine.Android;
#endif

namespace Convai.Scripts
{
    [RequireComponent(typeof(Animator), typeof(AudioSource))]
    [AddComponentMenu("Convai/ConvaiNPC")]
    [HelpURL(
        "https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/overview-of-the-convainpc.cs-script")]
    public class ConvaiNPC : MonoBehaviour
    {
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
        private bool _canPlayAudio;
        private Animator _characterAnimator;
        private ConvaiChatUIHandler _convaiChatUIHandler;
        private TMP_InputField _currentInputField;
        private ConvaiGRPCWebAPI _grpcWebAPI;
        private bool _isActionActive;

        [Tooltip("Is this character active?")] [ReadOnly]
        private bool _isCharacterActive;

        private bool _isLipSyncActive;
        private string _lastReceivedText;
        private bool _playingStopLoop;
        public ConvaiLipSync ConvaiLipSync { get; private set; }

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

        /// <summary>
        ///     Unity method called when the script instance is being loaded.
        /// </summary>
        private void Awake()
        {
            // Find and assign necessary components
            _convaiChatUIHandler = FindObjectOfType<ConvaiChatUIHandler>();
            _audioSource = GetComponent<AudioSource>();
            _characterAnimator = GetComponent<Animator>();

            if (TryGetComponent(out ConvaiLipSync convaiLipSync))
            {
                _isLipSyncActive = true;
                ConvaiLipSync = convaiLipSync;
            }

            OnCharacterSpeaking += HandleCharacterTalkingAnimation;
        }

        /// <summary>
        ///     Unity method called on the frame when a script is enabled.
        /// </summary>
        private void Start()
        {
            // Assign the ConvaiGRPCAPI component in the scene
            _grpcWebAPI = ConvaiGRPCWebAPI.Instance;

            StartCoroutine(WatchForInputSubmission());

            _currentInputField.onSubmit.AddListener(HandleInputSubmission);
        }

        private void Update()
        {
            // Handle text input focus and submission
            if (IsCharacterActive) HandleTextInput();
            HandlePlayerInputs();
        }

        /// <summary>
        ///     Unity method called when the object becomes enabled and active.
        /// </summary>
        private void OnEnable()
        {
            _convaiChatUIHandler = ConvaiChatUIHandler.Instance;
            if (_convaiChatUIHandler != null) _convaiChatUIHandler.UpdateCharacterList();
        }

        /// <summary>
        ///     Unity method called when the MonoBehaviour will be destroyed.
        /// </summary>
        private void OnDestroy()
        {
            OnCharacterSpeaking -= HandleCharacterTalkingAnimation;
            if (_convaiChatUIHandler != null) _convaiChatUIHandler.UpdateCharacterList();
        }


        // Events

        public event Action<bool> OnCharacterSpeaking;
        public event Action OnCharacterActivated;

        /// <summary>
        ///     Initializes the session in an asynchronous manner and handles the receiving of results from the server.
        ///     Initiates the audio recording process using the gRPC API.
        /// </summary>
        public void StartListening()
        {
            InterruptSpeech();
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
        ///     Interrupts the speech playback, clears audio and response lists, and resets character animation.
        /// </summary>
        private void InterruptSpeech()
        {
            if (!isCharacterTalking) return;
            isCharacterTalking = false;
            _canPlayAudio = false;
            StopAllCoroutines();
            _grpcWebAPI.InterruptCharacterSpeech();
            AudioDataList.Clear();
            _responseAudios.Clear();
            if (_isLipSyncActive) ConvaiLipSync.StopLipSync();

            HandleCharacterTalkingAnimation(false);
            StopAllAudioPlayback();
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

                SetCharacterTalking(true);

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
                        AudioClip = clip,
                        ResponseText = audioData.resText
                    });

                AudioDataList.RemoveAt(0);
            }

            if (_responseAudios.Count > 0 && !_canPlayAudio)
            {
                _canPlayAudio = true;
                StartCoroutine(PlayAudioInOrder());
            }
            else if (_responseAudios.Count <= 0 && _canPlayAudio)
            {
                _canPlayAudio = false;
                StopCoroutine(PlayAudioInOrder());
            }
        }

        /// <summary>
        ///     Plays audio clips attached to characters in the order of responses.
        /// </summary>
        /// <returns>
        ///     A IEnumerator that can facilitate coroutine functionality
        /// </returns>
        /// <remarks>
        ///     Starts a loop that plays audio from response, and performs corresponding actions and animations.
        /// </remarks>
        private IEnumerator PlayAudioInOrder()
        {
            while (_canPlayAudio)
                // Check if there are audio clips in the playlist
                if (_responseAudios.Count > 0)
                {
                    PlayResponseAudio(_responseAudios[0]);

                    string responseText = _responseAudios[0].ResponseText;
                    if (_convaiChatUIHandler != null && responseText != _lastReceivedText)
                        if (!string.IsNullOrEmpty(responseText))
                        {
                            _convaiChatUIHandler.SendCharacterText(characterName, responseText.Trim());
                            _lastReceivedText = responseText;
                        }

                    yield return new WaitForSeconds(_responseAudios[0].AudioClip.length);
                    StopAllAudioPlayback();
                    _responseAudios.RemoveAt(0);
                }
                else
                {
                    yield return new WaitForSeconds(0.1f);
                    SetCharacterTalking(false);
                }
        }

        public void StopAllAudioPlayback()
        {
            if (_audioSource != null && _audioSource.isPlaying)
            {
                _audioSource.Stop(); // Stops the audio if it's playing
                _audioSource.clip = null;
            }
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
            }
            // Stop recording audio when the T key is released
            else if (ConvaiInputManager.Instance.WasTalkKeyReleased())
            {
                // Handle character-specific actions if the character is active and the input field is not focused
                if (IsCharacterActive && (_currentInputField == null || !_currentInputField.isFocused)) StopListening();
            }
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

        /// <summary>
        ///     Handles the submission of user input.
        /// </summary>
        /// <param name="input">The input text submitted by the user.</param>
        private void HandleInputSubmission(string input)
        {
            InterruptSpeech();
            Logger.DebugLog("Sending user text to the server...", Logger.LogCategory.Character);
            _convaiChatUIHandler.SendPlayerText(input);

            // Run SendTextData without awaiting it to avoid blocking the UI thread.
            // Capture the context to return to the main thread after the call.
            SendTextData(input);

            // Clear the input field text
            // ReSharper disable once Unity.PerformanceCriticalCodeNullComparison
            if (FindActiveInputField() != null) FindActiveInputField().text = "";
        }

        /// <summary>
        ///     Sends text data to the server.
        /// </summary>
        /// <param name="text">The text to send.</param>
        private void SendTextData(string text)
        {
            try
            {
                _grpcWebAPI.SendTextData(text);
            }
            catch (Exception ex)
            {
                // Handle the exception, e.g., show a message to the user.
                Logger.Error(ex, Logger.LogCategory.Character);
            }
        }

        /// <summary>
        ///     Sets the character talking state.
        /// </summary>
        /// <param name="isTalking">Specifies whether the character is talking.</param>
        private void SetCharacterTalking(bool isTalking)
        {
            if (isCharacterTalking != isTalking)
            {
                isCharacterTalking = isTalking;
                OnCharacterSpeaking?.Invoke(isCharacterTalking);
            }
        }

        /// <summary>
        ///     Adds the given audio data to the list and processes the response.
        /// </summary>
        /// <param name="audioData">The audio data to be added.</param>
        public void AddAudioData(AudioData audioData)
        {
            AudioDataList.Add(audioData);
            ProcessResponse();
        }

        /// <summary>
        ///     Plays the audio from the given response.
        /// </summary>
        /// <param name="responseAudio">The response containing audio to be played.</param>
        private void PlayResponseAudio(ResponseAudio responseAudio)
        {
            _audioSource.clip = responseAudio.AudioClip;
            _audioSource.Play();
            SetCharacterTalking(true);
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
        ///     Represents audio data,text and its finality status in a response.
        /// </summary>
        private class ResponseAudio
        {
            /// <summary>
            ///     The audio clip associated with the response.
            /// </summary>
            public AudioClip AudioClip;

            /// <summary>
            ///     Specifies whether the audio is final or not.
            /// </summary>
            public bool IsFinal;

            /// <summary>
            ///     The text associated with the audio.
            /// </summary>
            public string ResponseText;
        }
    }
}