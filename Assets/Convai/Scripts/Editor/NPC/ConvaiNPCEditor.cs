#if UNITY_EDITOR

using System;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using Object = UnityEngine.Object;

namespace Convai.Scripts.Editor
{
    /// <summary>
    ///     Custom editor for the ConvaiNPC component.
    ///     Provides functionalities to cache and restore states of all convai scripts whenever a scene is saved.
    /// </summary>
    [CustomEditor(typeof(ConvaiNPC))]
    [HelpURL("https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/scripts-overview")]
    public class ConvaiNPCEditor : UnityEditor.Editor
    {
        private ConvaiNPC _convaiNPC;

        private void OnEnable()
        {
            _convaiNPC = (ConvaiNPC)target;
        }

        /// <summary>
        ///     Overrides the default inspector GUI to add custom buttons and functionality.
        /// </summary>
        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();

            // Add Components button to add necessary components and assign a random color to the character.
            if (GUILayout.Button("Add Components", GUILayout.Width(120))) AddComponentsToNPC();
        }

        /// <summary>
        ///     Adds components to the NPC and assigns a random color to the character's text.
        /// </summary>
        private void AddComponentsToNPC()
        {
            try
            {
                ConvaiNPCComponentSettingsWindow.Open(_convaiNPC);
                AssetDatabase.SaveAssets();
                AssetDatabase.Refresh();
            }
            catch (Exception ex)
            {
                Debug.LogError($"Unexpected error occurred when applying changes. Error: {ex}");
            }
        }
    }

    /// <summary>
    ///     Utility class to save the state of Convai scripts.
    /// </summary>
    public abstract class StateSaver
    {
        public const string ROOT_DIRECTORY = "Assets/Convai/Settings/Script State/";

        /// <summary>
        ///     Save the state of all Convai scripts in the current scene.
        /// </summary>
        [MenuItem("Convai/Save Script State", false, 4)]
        public static void SaveScriptState()
        {
            Scene scene = SceneManager.GetActiveScene();
            ConvaiNPC[] convaiObjects = Object.FindObjectsOfType<ConvaiNPC>();

            foreach (ConvaiNPC convaiNPC in convaiObjects)
            {
                Debug.Log($"Saving state for character: {convaiNPC.characterName}");
                MonoBehaviour[] scripts = convaiNPC.GetComponentsInChildren<MonoBehaviour>();

                string characterFolder = Path.Combine(ROOT_DIRECTORY, convaiNPC.characterID);
                if (!Directory.Exists(characterFolder)) Directory.CreateDirectory(characterFolder);

                foreach (MonoBehaviour script in scripts)
                {
                    string fullName = script.GetType().FullName;
                    if (fullName != null && !fullName.StartsWith("Convai.Scripts")) continue;

                    string assetPath = script.GetSavePath(characterFolder, scene.name, convaiNPC.characterID);
                    File.WriteAllText(assetPath, JsonUtility.ToJson(script));
                }
            }

            AssetDatabase.Refresh();
        }

        /// <summary>
        ///     Restore the state of all Convai scripts in the current scene.
        /// </summary>
        [InitializeOnLoad]
        public class SaveSceneHook
        {
            static SaveSceneHook()
            {
                EditorSceneManager.sceneSaved += SceneSaved;
                AssemblyReloadEvents.beforeAssemblyReload += OnBeforeAssemblyReload;
            }

            private static void OnBeforeAssemblyReload()
            {
                // Unsubscribe from the sceneSaved event to prevent memory leaks.
                EditorSceneManager.sceneSaved -= SceneSaved;
                // Unsubscribe from the beforeAssemblyReload event.
                AssemblyReloadEvents.beforeAssemblyReload -= OnBeforeAssemblyReload;
            }

            private static void SceneSaved(Scene scene)
            {
                SaveScriptState();
            }
        }
    }

    /// <summary>
    ///     Provides extension methods for Unity editor components to facilitate saving and restoring state, as well as safely
    ///     adding components.
    /// </summary>
    public static class EditorExtensions
    {
        /// <summary>
        ///     Saves the state of a component to a file in JSON format.
        /// </summary>
        /// <param name="component">The component whose state is to be saved.</param>
        /// <param name="path">The file path where the state will be saved.</param>
        /// <typeparam name="T">The type of the component derived from UnityEngine.Component.</typeparam>
        public static void SaveStateToFile<T>(this T component, string path) where T : Component
        {
            try
            {
                string serializedComponentData = JsonUtility.ToJson(component);
                File.WriteAllText(path, serializedComponentData);
            }
            catch (UnauthorizedAccessException ex)
            {
                Debug.LogError($"Access to the path '{path}' is denied. Error: {ex.Message}");
            }
            catch (IOException ex)
            {
                Debug.LogError($"An I/O error occurred while writing to the file at '{path}'. Error: {ex.Message}");
            }
            catch (Exception ex)
            {
                Debug.LogError($"Failed to save component state for {typeof(T).Name}. Error: {ex.Message}");
            }
        }

        /// <summary>
        ///     Restores the state of a component from a file containing JSON data.
        /// </summary>
        /// <param name="component">The component whose state is to be restored.</param>
        /// <param name="path">The file path from which the state will be restored.</param>
        /// <typeparam name="T">The type of the component derived from UnityEngine.Component.</typeparam>
        public static void RestoreStateFromFile<T>(this T component, string path) where T : Component
        {
            try
            {
                if (!File.Exists(path))
                {
                    Debug.LogWarning($"No saved state file found at '{path}' for component {typeof(T).Name}.");
                    return;
                }

                string savedData = File.ReadAllText(path);
                JsonUtility.FromJsonOverwrite(savedData, component);
            }
            catch (UnauthorizedAccessException ex)
            {
                Debug.LogError($"Access to the path '{path}' is denied. Error: {ex.Message}");
            }
            catch (IOException ex)
            {
                Debug.LogError($"An I/O error occurred while reading from the file at '{path}'. Error: {ex.Message}");
            }
            catch (Exception ex)
            {
                Debug.LogError($"Failed to restore component data for {typeof(T).Name}. Error: {ex.Message}");
            }
        }

        /// <summary>
        ///     Adds a component to the GameObject safely, catching any exceptions that occur during the process.
        /// </summary>
        /// <param name="go">The GameObject to which the component will be added.</param>
        /// <typeparam name="T">The type of the component to be added, derived from UnityEngine.Component.</typeparam>
        /// <returns>The newly added component, or null if the operation failed.</returns>
        public static T AddComponentSafe<T>(this GameObject go) where T : Component
        {
            try
            {
                return go.AddComponent<T>();
            }
            catch (Exception ex)
            {
                Debug.LogError($"Failed to add component of type {typeof(T).Name}, Error: {ex}");
                return null;
            }
        }

        /// <summary>
        ///     Constructs a file path for saving the state of a MonoBehaviour script, based on the character folder, scene name,
        ///     and character ID.
        /// </summary>
        /// <param name="script">The MonoBehaviour script for which the save path is being constructed.</param>
        /// <param name="characterFolder">The folder path associated with the character.</param>
        /// <param name="sceneName">The name of the current scene.</param>
        /// <param name="characterID">The unique identifier of the character from Convai Playground.</param>
        /// <returns>A string representing the constructed file path for saving the script's state.</returns>
        public static string GetSavePath(this MonoBehaviour script, string characterFolder, string sceneName,
            string characterID)
        {
            return Path.Combine(characterFolder, $"{sceneName}_{characterID}_{script.GetType().FullName}_State.data");
        }
    }
}

#endif