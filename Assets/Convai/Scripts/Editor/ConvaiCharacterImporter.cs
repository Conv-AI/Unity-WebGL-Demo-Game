#if UNITY_EDITOR

using System;
using System.IO;
using System.Net;
using System.Text;
using Convai.Scripts.Utils;
using Newtonsoft.Json;
using ReadyPlayerMe;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.UIElements;
using Random = UnityEngine.Random;

namespace Convai.Scripts.Editor
{
    public class ConvaiCharacterImporter : EditorWindow
    {
        //  A static color palette array
        private static readonly Color[] ColorPalette =
        {
            new(1f, 0f, 0f), // Red
            new(0f, 1f, 0f), // Green
            new(0f, 0f, 1f), // Blue
            new(1f, 1f, 0f), // Yellow
            new(0f, 1f, 1f), // Cyan
            new(1f, 0f, 1f), // Magenta
            new(1f, 0.5f, 0f), // Orange
            new(0.5f, 0f, 0.5f), // Purple
            new(0f, 0.5f, 0f), // Dark Green
            new(0.5f, 0.5f, 0.5f), // Grey
            new(1f, 0.8f, 0.6f), // Peach
            new(0.6f, 0.8f, 1f), // Light Blue
            new(0.8f, 0.6f, 1f), // Lavender
            new(1f, 0.6f, 0.8f), // Pink
            new(0.7f, 0.4f, 0f), // Brown
            new(0f, 0.7f, 0.7f), // Teal
            new(0.7f, 0.7f, 0f), // Olive
            new(0f, 0.7f, 0.4f), // Mint
            new(0.7f, 0f, 0.2f), // Maroon
            new(0.9f, 0.9f, 0.9f) // Light Grey
        };

        public void CreateGUI()
        {
            VisualElement root = rootVisualElement;

            VisualElement page2 = new ScrollView();

            root.Add(new Label(""));

            Image convaiLogoImage = new()
            {
                image = AssetDatabase.LoadAssetAtPath<Texture>("Assets/Convai/Images/color.png"),
                style =
                {
                    height = 100,
                    paddingBottom = 10,
                    paddingTop = 10,
                    paddingRight = 10,
                    paddingLeft = 10
                }
            };

            root.Add(convaiLogoImage);

            Label convaiCharacterIDLabel = new("Enter your Character ID: ")
            {
                style =
                {
                    fontSize = 16
                }
            };

            TextField characterIDTextField = new();

            Button downloadButton = new(() => { DownloadCharacter(characterIDTextField.text); })
            {
                text = "Import!",
                style =
                {
                    fontSize = 16,
                    unityFontStyleAndWeight = FontStyle.Bold,
                    alignSelf = Align.Center,
                    paddingBottom = 10,
                    paddingLeft = 30,
                    paddingRight = 30,
                    paddingTop = 10
                }
            };

            Button docsLink = new(() =>
            {
                Application.OpenURL(
                    "https://docs.convai.com/api-docs-restructure/plugins-and-integrations/unity-plugin/creating-characters");
            })
            {
                text = "How do I create a character?",
                style =
                {
                    alignSelf = Align.Center,
                    paddingBottom = 5,
                    paddingLeft = 50,
                    paddingRight = 50,
                    paddingTop = 5
                }
            };

            page2.Add(convaiCharacterIDLabel);
            page2.Add(new Label(""));
            page2.Add(characterIDTextField);
            page2.Add(new Label(""));
            page2.Add(downloadButton);
            page2.Add(new Label(""));
            page2.Add(docsLink);

            page2.style.marginBottom = 20;
            page2.style.marginLeft = 20;
            page2.style.marginRight = 20;
            page2.style.marginTop = 20;

            root.Add(page2);
        }

        [MenuItem("Convai/Character Importer", false, 2)]
        public static void CharacterImporter()
        {
            ConvaiCharacterImporter wnd = GetWindow<ConvaiCharacterImporter>();
            wnd.titleContent = new GUIContent("Character Importer");
        }


        private async void DownloadCharacter(string characterID)
        {
            GetRequest getRequest = new(characterID);

            string stringGetRequest = JsonConvert.SerializeObject(getRequest);

            ConvaiAPIKeySetup apiKeyScriptableObject = null;
            if (File.Exists("Assets/Resources/ConvaiAPIKey.asset"))
                apiKeyScriptableObject = Resources.Load<ConvaiAPIKeySetup>("ConvaiAPIKey");
            else
                Debug.LogError("No API Key file found. Please add the API Key.");

            WebRequest request = WebRequest.Create("https://api.convai.com/character/get");
            request.Method = "post";

            request.ContentType = "application/json";

            byte[] jsonBytes = Encoding.UTF8.GetBytes(stringGetRequest);

            if (apiKeyScriptableObject != null) request.Headers.Add("CONVAI-API-KEY", apiKeyScriptableObject.APIKey);

            string characterName;

            GameObject gameObject = null;

            using (Stream requestStream = await request.GetRequestStreamAsync())
            {
                await requestStream.WriteAsync(jsonBytes, 0, jsonBytes.Length);
            }

            try
            {
                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    using (Stream streamResponse = response.GetResponseStream())
                    {
                        using (StreamReader reader = new(streamResponse))
                        {
                            string responseContent = reader.ReadToEnd();

                            GetResponse getResponseContent =
                                JsonConvert.DeserializeObject<GetResponse>(responseContent);
                            string modelLink = getResponseContent.model_details.modelLink;
                            characterName = getResponseContent.character_name;

                            AvatarLoader avatarLoader = new();

                            if (File.Exists("Assets/Convai/RPMSetupAssets/Avatar Config.asset"))
                                avatarLoader.AvatarConfig =
                                    AssetDatabase.LoadAssetAtPath<AvatarConfig>(
                                        "Assets/Convai/RPMSetupAssets/Avatar Config.asset");

                            avatarLoader.SaveInProjectFolder = true;

                            avatarLoader.OnCompleted += (_, args) =>
                            {
                                gameObject = args.Avatar;
                                AvatarAnimatorHelper.SetupAnimator(args.Metadata.BodyType, gameObject);

                                gameObject.tag = "Character";

                                CapsuleCollider capsuleColliderComponent = gameObject.AddComponent<CapsuleCollider>();

                                capsuleColliderComponent.center = new Vector3(0, 0.9f, 0);
                                capsuleColliderComponent.radius = 0.3f;
                                capsuleColliderComponent.height = 1.8f;
                                capsuleColliderComponent.isTrigger = true;

                                gameObject.AddComponent<AudioSource>();

                                gameObject.AddComponent<Animator>();

                                if (File.Exists("Assets/Convai/Animators/NPC Animator.controller"))
                                    gameObject.GetComponent<Animator>().runtimeAnimatorController =
                                        AssetDatabase.LoadAssetAtPath<AnimatorController>(
                                            "Assets/Convai/Animators/NPC Animator.controller");

                                if (File.Exists("Assets/Convai/AnimationAvatars/MasculineAnimationAvatar.asset"))
                                    gameObject.GetComponent<Animator>().avatar =
                                        AssetDatabase.LoadAssetAtPath<Avatar>(
                                            "Assets/Convai/AnimationAvatars/MasculineAnimationAvatar.asset");

                                ConvaiNPC convaiNPCComponent = gameObject.AddComponent<ConvaiNPC>();
                                convaiNPCComponent.sessionID = "-1";
                                convaiNPCComponent.characterID = characterID;
                                convaiNPCComponent.characterName = characterName;

                                gameObject.name = $"Convai NPC {characterName}";

                                ConvaiChatUIHandler chatUIHandler = FindObjectOfType<ConvaiChatUIHandler>();

                                if (chatUIHandler != null && convaiNPCComponent.characterName != null)
                                    if (!chatUIHandler.HasCharacter(convaiNPCComponent.characterName))
                                    {
                                        Character newCharacter = new()
                                        {
                                            characterName = convaiNPCComponent.characterName,
                                            CharacterTextColor = GetRandomColor() // Assign a random color
                                        };
                                        chatUIHandler.AddCharacter(newCharacter);
                                        EditorUtility.SetDirty(chatUIHandler);
                                    }


                                EditorUtilities.CreatePrefab(gameObject,
                                    $"Assets/Convai/Prefabs/{gameObject.name}.prefab");
                            };

                            avatarLoader.LoadAvatar(modelLink);
                        }
                    }
                }
            }
            catch (WebException e)
            {
                Debug.LogError(e.Message + "\nPlease check if Character ID is correct.");
            }
            catch (Exception e)
            {
                Debug.LogError(e);
            }
        }


        /// <summary>
        ///     Returns a random color from the predefined palette.
        /// </summary>
        /// <returns> A random color from the predefined palette. </returns>
        private Color GetRandomColor()
        {
            // Return a random color from the predefined palette
            return ColorPalette[Random.Range(0, ColorPalette.Length)];
        }

        private class GetRequest
        {
            [JsonProperty("charID")] public string charID;

            public GetRequest(string charID)
            {
                this.charID = charID;
            }
        }

        private class ModelDetails
        {
            public string modelLink;
            public string modelPlaceholder;
            public string modelType;
        }

        private class GetResponse
        {
            public string backstory;
            public string[] character_actions;
            public string[] character_emotions;
            public string character_id;
            public string character_name;
            public ModelDetails model_details;
            public string timestamp;
            public string user_id;
            public string voice_type;
        }
    }
}

#endif