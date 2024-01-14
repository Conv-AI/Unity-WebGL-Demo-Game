using System;
using System.Collections;
using System.Text;
using Convai.Scripts;
using Newtonsoft.Json;
using TMPro;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    private const string API_KEY_PREF = "ConvaiAPIKey";
    private const string API_URL = "https://api.convai.com/user/referral-source-status";
    [SerializeField] private TMP_InputField _apiKeyInputField;
    [SerializeField] private Button _apiKeyButton;
    [SerializeField] private GameObject startPanel;
    [SerializeField] private TextMeshProUGUI errorMessage; // Add a reference to an error message text field
    private ConvaiNPC _convaiNPC;
    private ConvaiGRPCWebAPI _grpcWebAPI;


    private void Start()
    {
        _apiKeyButton.onClick.AddListener(() => StartCoroutine(SetConvaiAPIKeyCoroutine(_apiKeyInputField.text)));
        _convaiNPC = FindObjectOfType<ConvaiNPC>();
        _grpcWebAPI = ConvaiGRPCWebAPI.Instance;
        _convaiNPC.OnCharacterActivated += HandleCharacterActivated;
    }

    private void OnDestroy()
    {
        if (_convaiNPC != null) _convaiNPC.OnCharacterActivated -= HandleCharacterActivated;
    }

    private IEnumerator SetConvaiAPIKeyCoroutine(string apiKey)
    {
        bool isValid = false;

        // Start the validation coroutine and wait for it to complete
        yield return StartCoroutine(IsAPIKeyValid(apiKey, isValidResult => { isValid = isValidResult; }));

        // After validation is complete, process the result
        if (isValid)
        {
            PlayerPrefs.SetString(API_KEY_PREF, apiKey);
            PlayerPrefs.Save();
            Debug.Log("API Key set successfully!");
            _grpcWebAPI.APIKey = apiKey;
            startPanel.SetActive(false);
        }
        else
        {
            Debug.LogError("Invalid API Key!");
            if (errorMessage != null)
            {
                errorMessage.text = "Invalid API Key!"; // Set the error message text
                errorMessage.gameObject.SetActive(true); // Show the error message
            }
        }
    }

    private IEnumerator IsAPIKeyValid(string apiKey, Action<bool> onValidationComplete)
    {
        string jsonPayload = "{}";
        UnityWebRequest request = new(API_URL, "POST");
        byte[] jsonToSend = new UTF8Encoding().GetBytes(jsonPayload);
        request.uploadHandler = new UploadHandlerRaw(jsonToSend);
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", "application/json");
        request.SetRequestHeader("CONVAI-API-KEY", apiKey);

        yield return request.SendWebRequest();

        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError("Error: " + request.error);
            onValidationComplete(false);
        }
        else
        {
            string responseBody = request.downloadHandler.text;
            ReferralSourceStatus referralStatus = JsonConvert.DeserializeObject<ReferralSourceStatus>(responseBody);

            // Assuming that a non-empty 'referral_source_status' indicates a valid API key
            bool isValid = referralStatus != null && !string.IsNullOrEmpty(referralStatus.referral_source_status);
            onValidationComplete(isValid);
        }
    }

    private void HandleCharacterActivated()
    {
        _grpcWebAPI.SendTextData("Welcome the player");
        Debug.Log("Character activated!");
    }

    public class UpdateSource
    {
        public UpdateSource(string referralSource)
        {
            referral_source = referralSource;
        }

        [JsonProperty("referral_source")] public string referral_source { get; set; }
    }

    public class ReferralSourceStatus
    {
        [JsonProperty("referral_source_status")]
        public string referral_source_status { get; set; }

        [JsonProperty("status")] public string status { get; set; }
    }
}