//#if UNITY_EDITOR
using System;
using System.IO;
using System.Net;
using System.Text;
using Convai.Scripts.Utils;
using Newtonsoft.Json;
#if READY_PLAYER_ME
using ReadyPlayerMe.Core;
using ReadyPlayerMe.Core.Editor;
#endif
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using Random = UnityEngine.Random;

namespace Convai.Scripts.Editor.Character
{
    public class ConvaiCharacterImporter : EditorWindow
    {
        private const string READY_PLAYER_ME_GIT_PACKAGE_URL = "https://github.com/readyplayerme/rpm-unity-sdk-core.git";

        /// <summary>
        ///     The color palette used for the character text.
        /// </summary>
        private static readonly Color[] ColorPalette =
        {
            new(1f, 0f, 0f), new(0f, 1f, 0f), new(0f, 0f, 1f),
            new(1f, 1f, 0f), new(0f, 1f, 1f), new(1f, 0f, 1f),
            new(1f, 0.5f, 0f), new(0.5f, 0f, 0.5f), new(0f, 0.5f, 0f),
            new(0.5f, 0.5f, 0.5f), new(1f, 0.8f, 0.6f), new(0.6f, 0.8f, 1f),
            new(0.8f, 0.6f, 1f), new(1f, 0.6f, 0.8f), new(0.7f, 0.4f, 0f),
            new(0f, 0.7f, 0.7f), new(0.7f, 0.7f, 0f), new(0f, 0.7f, 0.4f),
            new(0.7f, 0f, 0.2f), new(0.9f, 0.9f, 0.9f)
        };

        /// <summary>
        ///     Creates the GUI for the Character Importer window.
        /// </summary>
        public void CreateGUI()
        {
            VisualElement root = rootVisualElement;

            ScrollView page2 = new();

            root.Add(new Label(""));

            Image convaiLogoImage = new()
            {
                image = AssetDatabase.LoadAssetAtPath<Texture>(ConvaiImagesDirectory.CONVAI_LOGO_PATH),
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
                style = { fontSize = 16 }
            };

            TextField characterIDTextField = new();

            Button downloadButton = new(() => DownloadCharacter(characterIDTextField.text))
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

            Button docsLink = new(() => Application.OpenURL(
                "https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/importing-a-character-from-convai-playground"))
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

        /// <summary>
        ///     Opens the Character Importer window.
        /// </summary>
        [MenuItem("Convai/Character Importer", false, 5)]
        public static void CharacterImporter()
        {
            ConvaiCharacterImporter wnd = GetWindow<ConvaiCharacterImporter>();
            wnd.titleContent = new GUIContent("Character Importer");
        }

        /// <summary>
        ///     Downloads the character from the Convai API and sets up the character in the scene.
        /// </summary>
        /// <param name="characterID"> The characterID of the character to download.</param>
        private async void DownloadCharacter(string characterID)
        {
#if READY_PLAYER_ME

            if (!ConvaiAPIKeySetup.GetAPIKey(out string apiKey)) return;


            GetRequest getRequest = new(characterID);
            string stringGetRequest = JsonConvert.SerializeObject(getRequest);

            WebRequest request = WebRequest.Create("https://api.convai.com/character/get");
            EditorUtility.DisplayProgressBar("Connecting", "Collecting resources...", 0f);
            request.Method = "post";
            request.ContentType = "application/json";
            request.Headers.Add("CONVAI-API-KEY", apiKey);

            byte[] jsonBytes = Encoding.UTF8.GetBytes(stringGetRequest);
            await using Stream requestStream = await request.GetRequestStreamAsync();
            await requestStream.WriteAsync(jsonBytes, 0, jsonBytes.Length);

            try
            {
                using HttpWebResponse response = (HttpWebResponse)await request.GetResponseAsync();
                await using Stream streamResponse = response.GetResponseStream();
                if (streamResponse == null) return;
                using StreamReader reader = new(streamResponse);
                string responseContent = await reader.ReadToEndAsync();
                GetResponse getResponseContent = JsonConvert.DeserializeObject<GetResponse>(responseContent);
                string modelLink = getResponseContent.ModelDetail.ModelLink;
                string characterName = getResponseContent.CharacterName.Trim();

                AvatarObjectLoader avatarLoader = new()
                {
                    AvatarConfig = Resources.Load<AvatarConfig>("ConvaiRPMAvatarConfig")
                };

                DirectoryUtility.DefaultAvatarFolder = $"Convai/Characters/Mesh Data/{characterName}";
                EditorUtility.DisplayProgressBar("Downloading Character", "Initializing download...", 0f);

                avatarLoader.OnProgressChanged += (_, progressArgs) =>
                    EditorUtility.DisplayProgressBar("Downloading Character", $"Downloading character model {characterName}: {progressArgs.Progress * 100f}%",
                        progressArgs.Progress);

                avatarLoader.OnCompleted += (_, args) =>
                {
                    EditorUtility.ClearProgressBar();

                    AvatarLoaderSettings avatarLoaderSettings = Resources.Load<AvatarLoaderSettings>("ConvaiAvatarLoaderSettings");
                    string path =
                        $"{DirectoryUtility.GetRelativeProjectPath(args.Avatar.name, AvatarCache.GetAvatarConfigurationHash(avatarLoaderSettings.AvatarConfig))}/{args.Avatar.name}";
                    GameObject avatar = PrefabHelper.CreateAvatarPrefab(args.Metadata, path, avatarConfig: avatarLoaderSettings.AvatarConfig);

                    SetupCharacter(characterID, characterName, avatar, args);

                    Debug.Log($"Character '{characterName}' downloaded and set up successfully.");
                };

                avatarLoader.OnFailed += (_, error) =>
                {
                    EditorUtility.ClearProgressBar();
                    Debug.LogError($"Failed to download character: {error}");
                };

                avatarLoader.LoadAvatar(modelLink);


            }
            catch (WebException e)
            {
                EditorUtility.ClearProgressBar();
                Debug.LogError(e.Message + "\nPlease check if Character ID is correct.");
            }
            catch (Exception e)
            {
                EditorUtility.ClearProgressBar();
                Debug.LogError(e);
            }
#endif
        }

#if READY_PLAYER_ME
        /// <summary>
        ///     Sets up the character in the scene with the downloaded character model.
        /// </summary>
        /// <param name="characterID"> The character ID.</param>
        /// <param name="characterName"> The name of the character.</param>
        /// <param name="avatar"> The avatar GameObject to set up.</param>
        /// <param name="args"> The completion event arguments.</param>
        private void SetupCharacter(string characterID, string characterName, GameObject avatar, CompletionEventArgs args)
        {
            if (avatar == null)
            {
                Debug.LogError("Avatar GameObject is null.");
                return;
            }

            SetupCharacterMetadata(characterName, avatar);
            SetupCollision(avatar);

            if (avatar.GetComponent<AudioSource>() == null)
            {
                avatar.AddComponent<AudioSource>();
            }

            SetupAnimator(args, avatar);
            ConvaiNPC convaiNPCComponent = SetupConvaiComponents(characterID, characterName, avatar);
            SetupChatUI(convaiNPCComponent);

            string prefabPath = "Assets/Convai/Characters/Prefabs";
            if (!AssetDatabase.IsValidFolder(prefabPath))
            {
                AssetDatabase.CreateFolder("Assets/Convai/Characters", "Prefabs");
            }

            PrefabUtility.SaveAsPrefabAsset(avatar, $"{prefabPath}/{avatar.name}.prefab");
            DestroyImmediate(args.Avatar, true);

            Selection.activeObject = avatar;
        }

#endif

        /// <summary>
        ///     Sets up the metadata for the character.
        /// </summary>
        /// <param name="characterName">The name of the character.</param>
        /// <param name="avatar">The avatar GameObject.</param>
        private static void SetupCharacterMetadata(string characterName, GameObject avatar)
        {
            avatar.tag = "Character";
            avatar.name = $"Convai NPC {characterName}";

            // // Use this to further optimise character detection 
            // // Check if the "Convai Character" layer exists
            // int convaiCharacterLayer = LayerMask.NameToLayer("Convai Character");
            // if (convaiCharacterLayer == -1)
            // {
            //     // Layer doesn't exist, so create it
            //     convaiCharacterLayer = CreateLayer("Convai Character");
            // }

            // // Assign the layer to the avatar
            // avatar.layer = convaiCharacterLayer;
        }

        /// <summary>
        ///     Creates a new layer with the specified name.
        /// </summary>
        /// <param name="layerName">The name of the layer to create.</param>
        /// <returns>The index of the newly created layer.</returns>
        private static int CreateLayer(string layerName)
        {
            SerializedObject tagManager = new(AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset")[0]);
            SerializedProperty layers = tagManager.FindProperty("layers");

            // Find the first available layer index
            int newLayerIndex = -1;
            for (int i = 8; i < layers.arraySize; i++) // Start from layer 8 (to avoid built-in layers)
            {
                SerializedProperty layerElement = layers.GetArrayElementAtIndex(i);
                if (string.IsNullOrEmpty(layerElement.stringValue))
                {
                    layerElement.stringValue = layerName;
                    newLayerIndex = i;
                    break;
                }
            }

            if (newLayerIndex != -1)
            {
                tagManager.ApplyModifiedProperties();
            }
            else
            {
                Debug.LogWarning("Failed to create new layer. All layers are occupied.");
            }

            return newLayerIndex;
        }
        /// <summary>
        ///     Sets up the chat UI for the character.
        /// </summary>
        /// <param name="convaiNPCComponent">The ConvaiNPC component.</param>
        private void SetupChatUI(ConvaiNPC convaiNPCComponent)
        {
            ConvaiChatUIHandler chatUIHandler = FindObjectOfType<ConvaiChatUIHandler>();

            if (chatUIHandler != null && convaiNPCComponent.characterName != null &&
                !chatUIHandler.HasCharacter(convaiNPCComponent.characterName))
            {
                Utils.Character newCharacter = new()
                {
                    characterGameObject = convaiNPCComponent,
                    characterName = convaiNPCComponent.characterName,
                    CharacterTextColor = GetRandomColor()
                };
                chatUIHandler.AddCharacter(newCharacter);
                EditorUtility.SetDirty(chatUIHandler);
            }
        }

        /// <summary>
        ///     Sets up the Convai components for the character.
        /// </summary>
        /// <param name="characterID">The character ID.</param>
        /// <param name="characterName">The name of the character.</param>
        /// <param name="avatar">The avatar GameObject.</param>
        /// <returns>The ConvaiNPC component.</returns>
        private static ConvaiNPC SetupConvaiComponents(string characterID, string characterName, GameObject avatar)
        {
            ConvaiNPC convaiNPCComponent = avatar.AddComponent<ConvaiNPC>();
            convaiNPCComponent.sessionID = "-1";
            convaiNPCComponent.characterID = characterID;
            convaiNPCComponent.characterName = characterName;

            avatar.AddComponent<ConvaiHeadTracking>();
            return convaiNPCComponent;
        }

#if READY_PLAYER_ME
        /// <summary>
        ///     Sets up the animator for the character.
        /// </summary>
        /// <param name="args">The completion event arguments.</param>
        /// <param name="avatar">The avatar GameObject.</param>
        private static void SetupAnimator(CompletionEventArgs args, GameObject avatar)
        {
            AvatarAnimationHelper.SetupAnimator(args.Metadata, avatar);
            Animator animator = avatar.GetComponent<Animator>();
            // Determine avatar type based on Avatar field in Animator component
            bool isMasculine = animator.avatar.name.Contains("Masculine");

            // Set the appropriate animator controller
            string animatorPath = isMasculine ? "Masculine NPC Animator" : "Feminine NPC Animator";
            animator.runtimeAnimatorController = Resources.Load<RuntimeAnimatorController>(animatorPath);
        }
#endif

        /// <summary>
        ///     Sets up the collision for the character.
        /// </summary>
        /// <param name="avatar">The avatar GameObject.</param>
        private static void SetupCollision(GameObject avatar)
        {
            CapsuleCollider capsuleColliderComponent = avatar.AddComponent<CapsuleCollider>();
            capsuleColliderComponent.center = new Vector3(0, 0.9f, 0);
            capsuleColliderComponent.radius = 0.3f;
            capsuleColliderComponent.height = 1.8f;
            capsuleColliderComponent.isTrigger = true;
        }

        /// <summary>
        ///     Returns a random color from the predefined palette.
        /// </summary>
        /// <returns>A random color from the predefined palette.</returns>
        private Color GetRandomColor()
        {
            return ColorPalette[Random.Range(0, ColorPalette.Length)];
        }

        private class GetRequest
        {
            [JsonProperty("charID")] public string CharID;

            public GetRequest(string charID)
            {
                CharID = charID;
            }
        }

        private class GetResponse
        {
            [JsonProperty("backstory")] public string Backstory;
            [JsonProperty("character_actions")] public string[] CharacterActions;
            [JsonProperty("character_emotions")] public string[] CharacterEmotions;
            [JsonProperty("character_id")] public string CharacterID;
            [JsonProperty("character_name")] public string CharacterName;
            [JsonProperty("model_details")] public ModelDetails ModelDetail;
            [JsonProperty("timestamp")] public string Timestamp;
            [JsonProperty("user_id")] public string UserID;
            [JsonProperty("voice_type")] public string VoiceType;

            #region Nested type: ModelDetails

            internal class ModelDetails
            {
                [JsonProperty("modelLink")] public string ModelLink;
                [JsonProperty("modelPlaceholder")] public string ModelPlaceholder;
                [JsonProperty("modelType")] public string ModelType;
            }

            #endregion
        }
    }

    public struct ConvaiImagesDirectory
    {
        public const string CONVAI_LOGO_PATH = "Assets/Convai/Images/Assets/Convai Logo.png";
    }


}
//#endif