#if UNITY_EDITOR

using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Convai.Scripts.Utils;
using Newtonsoft.Json;
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using Object = UnityEngine.Object;

namespace Convai.Scripts.Editor
{
    /// <summary>
    ///     This class is responsible for setting up the Convai API key in the Unity editor.
    /// </summary>
    public class ConvaiSetup : EditorWindow
    {
        private const string API_KEY_PATH = "Assets/Resources/ConvaiAPIKey.asset";
        private const string API_URL = "https://api.convai.com/user/referral-source-status";

        /// <summary>
        ///     This method is called when the window is enabled.
        ///     It checks if the API key file exists and if not, it sets up the Convai API key.
        /// </summary>
        private void OnEnable()
        {
            if (!File.Exists(API_KEY_PATH)) SetupConvaiAPIKey();
        }

        /// <summary>
        ///     This method creates the GUI for the Convai setup window.
        ///     It includes a text field for entering the API key and buttons for starting the setup and opening the documentation.
        /// </summary>
        public void CreateGUI()
        {
            VisualElement root = rootVisualElement;

            ScrollView page2 = new();

            // Add Logo
            root.Add(CreateImage("Assets/Convai/Images/color.png", 100));

            // Add Elements to Page
            page2.Add(CreateLabel("Enter your API Key:", 16));
            TextField apiKeyTextField = new("", -1, false, true, '*');
            page2.Add(apiKeyTextField);

            page2.Add(CreateButton("Begin!", 16, FontStyle.Bold, () =>
            {
                HandleBeginButtonAction(apiKeyTextField.text).ContinueWith(t =>
                {
                    if (t.Exception != null)
                        // Optionally handle exceptions
                        Debug.LogError($"Error while processing API Key: {t.Exception.InnerException?.Message}");
                });
            }));


            page2.Add(CreateButton("How do I find my API key?", 12, FontStyle.Normal,
                () => { Application.OpenURL("https://docs.convai.com/api-docs/plugins/unity-plugin"); }));

            // Set Margins for Page
            SetMargins(page2, 20);

            root.Add(page2);
        }

        /// <summary>
        ///     This method handles the action of the Begin button.
        ///     It checks if the entered API key is valid and if so, it closes the window.
        /// </summary>
        private async Task HandleBeginButtonAction(string apiKey)
        {
            bool validKey = await BeginButtonTask(apiKey);
            if (validKey)
                Close();
            // if the key is not valid, the window remains open
        }


        /// <summary>
        ///     This method creates an image with the given path and height.
        /// </summary>
        /// <param name="path"> Path to the image </param>
        /// <param name="height"> Height of the image </param>
        /// <returns> The created image </returns>
        private Image CreateImage(string path, float height)
        {
            Image image = new()
            {
                image = AssetDatabase.LoadAssetAtPath<Texture>(path),
                style =
                {
                    height = height
                }
            };
            SetPadding(image, 10);
            return image;
        }

        /// <summary>
        /// </summary>
        /// <param name="text"></param>
        /// <param name="fontSize"></param>
        /// <returns></returns>
        private Label CreateLabel(string text, int fontSize)
        {
            return new Label(text) { style = { fontSize = fontSize } };
        }

        /// <summary>
        /// </summary>
        /// <param name="text"></param>
        /// <param name="fontSize"></param>
        /// <param name="fontStyle"></param>
        /// <param name="onClickAction"></param>
        /// <returns></returns>
        private Button CreateButton(string text, int fontSize, FontStyle fontStyle, Action onClickAction)
        {
            Button button = new(onClickAction)
            {
                text = text,
                style =
                {
                    fontSize = fontSize,
                    unityFontStyleAndWeight = fontStyle,
                    alignSelf = Align.Center
                }
            };
            SetPadding(button, 10);
            return button;
        }

        /// <summary>
        /// </summary>
        /// <param name="element"></param>
        /// <param name="margin"></param>
        private void SetMargins(VisualElement element, float margin)
        {
            element.style.marginBottom = margin;
            element.style.marginLeft = margin;
            element.style.marginRight = margin;
            element.style.marginTop = margin;
        }

        /// <summary>
        /// </summary>
        /// <param name="element"></param>
        /// <param name="padding"></param>
        private void SetPadding(VisualElement element, float padding)
        {
            element.style.paddingBottom = padding;
            element.style.paddingLeft = padding;
            element.style.paddingRight = padding;
            element.style.paddingTop = padding;
        }


        /// <summary>
        ///     This method opens the Convai setup window.
        /// </summary>
        [MenuItem("Convai/Convai Setup", false, 1)]
        public static void SetupConvaiAPIKey()
        {
            GetWindow<ConvaiSetup>().titleContent = new GUIContent("Convai Setup");
        }

        /// <summary>
        ///     This method opens the Convai documentation in the default web browser.
        /// </summary>
        [MenuItem("Convai/Documentation", false, 5)]
        public static void OpenDocumentation()
        {
            Application.OpenURL("https://docs.convai.com/plugins-and-integrations/unity-plugin");
        }

        /// <summary>
        ///     This method checks the referral status of the entered API key.
        ///     It sends a POST request to the Convai API and returns the referral status.
        /// </summary>
        /// <param name="url"> URL of the Convai API </param>
        /// <param name="apiKey"> API key to be checked </param>
        /// <returns> Referral status of the API key </returns>
        private async Task<string> CheckReferralStatus(string url, string apiKey)
        {
            WebRequest request = WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/json";
            request.Headers.Add("CONVAI-API-KEY", apiKey);

            try
            {
                // Send the request
                await using (Stream requestStream = await request.GetRequestStreamAsync())
                {
                    byte[] jsonBytes = Encoding.UTF8.GetBytes("{}");
                    await requestStream.WriteAsync(jsonBytes, 0,
                        jsonBytes.Length); // Write the JSON bytes to the request stream
                }

                // Get the response
                using HttpWebResponse response = (HttpWebResponse)await request.GetResponseAsync();
                await using Stream
                    streamResponse =
                        response.GetResponseStream(); // Get the stream containing content returned by the server.
                if (streamResponse != null)
                {
                    using StreamReader
                        reader = new(streamResponse); // Open the stream using a StreamReader for easy access.

                    string responseContent = await reader.ReadToEndAsync();
                    ReferralSourceStatus referralStatus =
                        JsonConvert.DeserializeObject<ReferralSourceStatus>(responseContent); // Read the content.

                    return referralStatus.referralSourceStatusProperty;
                }
            }
            catch (WebException e)
            {
                Debug.LogError($"{e.Message}\nPlease check if API Key is correct.");
                return string.Empty;
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return string.Empty;
            }

            return string.Empty; // Added this return for the case where streamResponse is null
        }


        /// <summary>
        ///     This method checks if the entered API key is valid.
        ///     It returns true if the API key is valid and false if not.
        /// </summary>
        /// <param name="apiKey"> API key to be checked </param>
        /// <returns> True if the API key is valid, false if not </returns>
        private async Task<bool> BeginButtonTask(string apiKey)
        {
            ConvaiAPIKeySetup aPIKeySetup = CreateInstance<ConvaiAPIKeySetup>();

            aPIKeySetup.APIKey = apiKey;

            if (!string.IsNullOrEmpty(apiKey))
            {
                string referralStatus =
                    await CheckReferralStatus(API_URL, apiKey);

                if (!string.IsNullOrEmpty(referralStatus))
                {
                    CreateOrUpdateAPIKeyAsset(aPIKeySetup);

                    if (referralStatus == "undefined")
                    {
                        EditorUtility.DisplayDialog("Warning", "API Key loaded successfully with undefined status!",
                            "OK");
                        return true;
                    }

                    EditorUtility.DisplayDialog("Success", "API Key loaded successfully!", "OK");
                    return true;
                }

                EditorUtility.DisplayDialog("Error", "Please enter a valid API Key.", "OK");
                return false;
            }

            EditorUtility.DisplayDialog("Error", "Please enter a valid API Key.", "OK");
            return false;
        }


        /// <summary>
        ///     This method creates or updates the API key asset.
        ///     If the asset does not exist, it creates a new one.
        ///     If the asset already exists, it deletes the old one and creates a new one.
        /// </summary>
        /// <param name="aPIKeySetup"> API key setup </param>
        private void CreateOrUpdateAPIKeyAsset(Object aPIKeySetup)
        {
            const string assetPath = "Assets/Resources/ConvaiAPIKey.asset";

            if (!File.Exists(assetPath))
            {
                if (!AssetDatabase.IsValidFolder("Assets/Resources"))
                    AssetDatabase.CreateFolder("Assets", "Resources");

                AssetDatabase.CreateAsset(aPIKeySetup, assetPath);
            }
            else
            {
                AssetDatabase.DeleteAsset(assetPath);
                AssetDatabase.CreateAsset(aPIKeySetup, assetPath);
            }

            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
        }


        /// <summary>
        ///     This class is used to deserialize the JSON response from the Convai API.
        ///     It represents the update source for the referral status.
        /// </summary>
        public class UpdateSource
        {
            public UpdateSource(string referralSource)
            {
                ReferralSource = referralSource;
            }

            [JsonProperty("referral_source")] public string ReferralSource { get; set; }
        }

        /// <summary>
        ///     This class is used to deserialize the JSON response from the Convai API.
        /// </summary>
        public class ReferralSourceStatus
        {
            [JsonProperty("referral_source_status")]
            public string referralSourceStatusProperty { get; set; }

            [JsonProperty("status")] public string Status { get; set; }
        }
    }
}
#endif