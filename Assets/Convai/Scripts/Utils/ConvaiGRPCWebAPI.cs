using System;
using System.Runtime.InteropServices;
using Convai.Scripts;
using Convai.Scripts.Utils;
using Newtonsoft.Json;
using UnityEngine;

/// <summary>
///     Class to hold audio data.
/// </summary>
public class AudioData
{
    public byte[] audData; // Audio data in byte array
    public bool isFirst; // Flag to check if it's the first audio data
    public string resText; // Response text
    public int sampleRate; // Sample rate of the audio data
}

/// <summary>
///     Main class for handling Convai GRPC Web API.
/// </summary>
public class ConvaiGRPCWebAPI : MonoBehaviour
{
    public static ConvaiGRPCWebAPI Instance; // Singleton instance
    [HideInInspector] public ConvaiNPC activeConvaiNPC; // Active Convai NPC
    [HideInInspector] public string APIKey; // API Key for Convai
    private ConvaiChatUIHandler _convaiChatUIHandler; // UI handler for Convai chat
    private string _lastReceivedText;

    /// <summary>
    ///     Awake is called when the script instance is being loaded.
    /// </summary>
    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);

        _convaiChatUIHandler = FindObjectOfType<ConvaiChatUIHandler>();
        try
        {
            initMicrophone();
        }
        catch (Exception e)
        {
            Debug.LogWarning("WebGL SDK does not run in Unity Editor. Please build and run in WebGL.");
        }

        ConvaiAPIKeySetup apiKeyScriptableObject = Resources.Load<ConvaiAPIKeySetup>("ConvaiAPIKey");

        if (apiKeyScriptableObject != null)
        {
            APIKey = apiKeyScriptableObject.APIKey;
            Debug.Log(APIKey);
        }
        else
        {
            Debug.LogError(
                "No API Key data found. Please complete the Convai Setup. In the Menu Bar, click Convai > Setup.");
        }
    }

    /// <summary>
    ///     Start is called before the first frame update.
    /// </summary>
    private void Start()
    {
        ConvaiNPCManager.Instance.OnActiveNPCChanged += HandleActiveNPCChanged;
    }

    /// <summary>
    ///     Handles active NPC changed event. Will be called when the active NPC is changed.
    /// </summary>
    /// <param name="newActiveNPC"> Gets the new active NPC </param>
    private void HandleActiveNPCChanged(ConvaiNPC newActiveNPC)
    {
        activeConvaiNPC = newActiveNPC;
        InitializeConvaiClient(activeConvaiNPC.characterID, true, false);
    }

    /// <summary>
    ///     Converts 16 bit byte array to float audio clip data.
    /// </summary>
    private float[] Convert16BitByteArrayToFloatAudioClipData(byte[] source)
    {
        int convertedSize = source.Length / sizeof(short);
        float[] data = new float[convertedSize];

        int byteIdx = 0;
        int dataIdx = 0;

        while (byteIdx < source.Length)
        {
            short sample = BitConverter.ToInt16(source, byteIdx);
            float normalizedSample = sample / 32768.0f;

            data[dataIdx] = normalizedSample;

            byteIdx += sizeof(short);
            dataIdx++;
        }

        return data;
    }

    /// <summary>
    ///     Processes byte audio data to audio clip.
    /// </summary>
    public AudioClip ProcessByteAudioDataToAudioClip(byte[] byteAudio, string stringSampleRate)
    {
        float[] samples = Convert16BitByteArrayToFloatAudioClipData(byteAudio);

        int channels = 1;
        int sampleRate = int.Parse(stringSampleRate);
        Debug.unityLogger.Log("Sample Rate: " + sampleRate);

        if (samples.Length > 0)
        {
            AudioClip clip = AudioClip.Create("ClipName", samples.Length, channels, sampleRate, false);
            clip.SetData(samples, 0);
            return clip;
        }

        return null;
    }

    /// <summary>
    ///     Processes byte audio data to trimmed audio clip.
    /// </summary>
    public AudioClip ProcessByteAudioDataToTrimmedAudioClip(byte[] byteAudio, string stringSampleRate)
    {
        // trim 44 bytes of header

        byte[] trimmedByteAudio = new byte[byteAudio.Length - 44];

        for (int i = 0, j = 44; i < byteAudio.Length - 44; i++, j++) trimmedByteAudio[i] = byteAudio[j];

        float[] samples = Convert16BitByteArrayToFloatAudioClipData(trimmedByteAudio);

        int channels = 1;
        int sampleRate = int.Parse(stringSampleRate);

        if (samples.Length > 0)
        {
            AudioClip clip = AudioClip.Create("ClipName", samples.Length, channels, sampleRate, false);
            clip.SetData(samples, 0);
            return clip;
        }

        return null;
    }

    /// <summary>
    ///     Initializes Convai with given parameters.
    /// </summary>
    public void InitializeConvaiClient(string characterID, bool enableAudioRecorder, bool enableAudioPlayer)
    {
        Debug.Log("Char ID " + activeConvaiNPC.characterID);
        initializeConvaiClient(APIKey, characterID, enableAudioRecorder, enableAudioPlayer);
    }

    /// <summary>
    ///     Starts recording audio.
    /// </summary>
    public void StartRecordAudio()
    {
        OnPlayerSpeakingChanged?.Invoke(true);
        startAudioChunk();
    }

    /// <summary>
    ///     Stops recording audio.
    /// </summary>
    public void StopRecordAudio()
    {
        endAudioChunk();
        OnPlayerSpeakingChanged?.Invoke(false);
    }

    /// <summary>
    ///     Sends text data to Convai.
    /// </summary>
    public void SendTextData(string text)
    {
        sendTextRequest(text);
    }

    /// <summary>
    ///     Receives the text and sends it to the UI handler for displaying
    /// </summary>
    /// <param name="text"> The text response sent from jslib </param>
    public void OnUserResponseReceived(string text)
    {
        if (_convaiChatUIHandler != null) _convaiChatUIHandler.SendPlayerText(text);
    }

    /// <summary>
    ///     Handles audio response received event.
    /// </summary>
    public void OnAudioResponseReceived(string audData)
    {
        // OPT TODO: move this into a list and do the deserialization in a separate async function
        AudioData audioData = JsonConvert.DeserializeObject<AudioData>(audData);

        activeConvaiNPC.AudioDataList.Add(audioData);
        if (_convaiChatUIHandler != null && audioData.resText != _lastReceivedText)
        {
            _convaiChatUIHandler.SendCharacterText(activeConvaiNPC.characterName, audioData.resText);
            _lastReceivedText = audioData.resText;
        }
    }

    #region Events

    // Events to notify when the player starts or stops speaking
    public event Action<bool> OnPlayerSpeakingChanged;

    #endregion

    #region External Functions

    [DllImport("__Internal")]
    private static extern void startAudioChunk(); // Starts audio chunk

    [DllImport("__Internal")]
    private static extern void endAudioChunk(); // Ends audio chunk

    [DllImport("__Internal")]
    private static extern void initializeConvaiClient(string apiKey, string characterId, bool enableAudioRecorder,
        bool enableAudioPlayer); // Initializes Convai client

    [DllImport("__Internal")]
    private static extern void initMicrophone(); // Initializes microphone

    [DllImport("__Internal")]
    private static extern void sendTextRequest(string request); // Sends text request

    #endregion
}