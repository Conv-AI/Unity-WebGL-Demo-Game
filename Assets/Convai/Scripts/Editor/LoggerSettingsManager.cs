using System.Collections.Generic;
using System.Reflection;
using Convai.Scripts.Utils;
using UnityEditor;
using UnityEngine;
using Logger = Convai.Scripts.Utils.Logger;

namespace Convai.Scripts.Editor
{
    /// <summary>
    ///     Manages the settings for the Logger, including loading, creating, and modifying LoggerSettings.
    /// </summary>
    public class LoggerSettingsManager
    {
        // Path to the LoggerSettings asset
        private const string SETTINGS_PATH = "Assets/Convai/Resources/Settings/LoggerSettings.asset";

        /// <summary>
        ///     Mapping between the row names and the field names in the LoggerSettings class.
        /// </summary>
        private static readonly Dictionary<string, string> CategoryMapping = new()
        {
            { "Character", "characterResponse" },
            { "LipSync", "lipSync" },
            { "Actions", "actions" }
        };

        /// <summary>
        ///     The LoggerSettings instance.
        /// </summary>
        private LoggerSettings _loggerSettings;

        /// <summary>
        ///     Property accessor for _loggerSettings. If _loggerSettings is null, it attempts to load it from the asset path.
        ///     If the asset does not exist, it creates a new LoggerSettings instance.
        /// </summary>
        public LoggerSettings loggerSettings
        {
            get
            {
                if (_loggerSettings == null)
                {
                    _loggerSettings = AssetDatabase.LoadAssetAtPath<LoggerSettings>(SETTINGS_PATH);
                    if (_loggerSettings == null)
                    {
                        CreateLoggerSettings();
                        Logger.Warn("LoggerSettings ScriptableObject not found. Creating one...",
                            Logger.LogCategory.Character);
                    }
                }

                return _loggerSettings;
            }
        }

        /// <summary>
        ///     Creates a new LoggerSettings instance with default values and saves it as an asset
        /// </summary>
        private void CreateLoggerSettings()
        {
            _loggerSettings = ScriptableObject.CreateInstance<LoggerSettings>();

            // Set default values for Character
            _loggerSettings.characterResponseDebug = true;
            _loggerSettings.characterResponseInfo = true;
            _loggerSettings.characterResponseWarning = true;
            _loggerSettings.characterResponseError = true;
            _loggerSettings.characterResponseException = true;

            // Set default values for LipSync
            _loggerSettings.lipSyncDebug = true;
            _loggerSettings.lipSyncInfo = true;
            _loggerSettings.lipSyncWarning = true;
            _loggerSettings.lipSyncError = true;
            _loggerSettings.lipSyncException = true;

            // Set default values for Actions
            _loggerSettings.actionsDebug = true;
            _loggerSettings.actionsInfo = true;
            _loggerSettings.actionsWarning = true;
            _loggerSettings.actionsError = true;
            _loggerSettings.actionsException = true;

            // Check if the Convai folder exists and create if not
            if (!AssetDatabase.IsValidFolder("Assets/Convai/Resources"))
                AssetDatabase.CreateFolder("Assets/Convai", "Resources");

            // Check if the Settings folder exists and create if not
            if (!AssetDatabase.IsValidFolder("Assets/Convai/Resources/Settings"))
                AssetDatabase.CreateFolder("Assets/Convai/Resources", "Settings");

            AssetDatabase.CreateAsset(_loggerSettings, SETTINGS_PATH);
            AssetDatabase.SaveAssets();
        }

        /// <summary>
        ///     Checks if all flags for a given row are set.
        /// </summary>
        /// <param name="rowName">The name of the row to check.</param>
        /// <returns>True if all flags for the given row are set, false otherwise.</returns>
        public bool GetAllFlagsForRow(string rowName)
        {
            bool allSelected = true;

            foreach (string logType in new[] { "Debug", "Error", "Exception", "Info", "Warning" })
            {
                string baseFieldName = CategoryMapping.TryGetValue(rowName, out string value) ? value : string.Empty;
                if (string.IsNullOrEmpty(baseFieldName))
                {
                    Debug.LogError($"No mapping found for row {rowName}");
                    return false;
                }

                string fieldName = $"{baseFieldName}{logType}";
                FieldInfo field = _loggerSettings.GetType().GetField(fieldName);
                if (field != null)
                {
                    bool currentValue = (bool)field.GetValue(_loggerSettings);
                    allSelected &= currentValue;
                }
                else
                {
                    Debug.LogError($"Field {fieldName} does not exist in LoggerSettings");
                    return false;
                }
            }

            return allSelected;
        }


        /// <summary>
        ///     Renders a checkbox for a given log type and handles changes to its value.
        /// </summary>
        /// <param name="rowName">The name of the row to render the checkbox for.</param>
        /// <param name="logType">The type of log to handle.</param>
        public void RenderAndHandleCheckbox(string rowName, string logType)
        {
            // Using the mapping to get the base name for the fields
            string baseFieldName = CategoryMapping.TryGetValue(rowName, out string value) ? value : string.Empty;

            if (string.IsNullOrEmpty(baseFieldName))
            {
                Debug.LogError($"No mapping found for row {rowName}");
                return;
            }

            string fieldName = $"{baseFieldName}{logType}";

            FieldInfo field = _loggerSettings.GetType().GetField(fieldName);
            if (field != null)
            {
                bool currentValue = (bool)field.GetValue(_loggerSettings);
                bool newValue = EditorGUILayout.Toggle(currentValue, GUILayout.Width(100));
                if (currentValue != newValue) field.SetValue(_loggerSettings, newValue);
            }
            else
            {
                Debug.LogError($"Field {fieldName} does not exist in LoggerSettings");
            }
        }


        /// <summary>
        ///     Sets all flags for a given row to the provided value.
        /// </summary>
        /// <param name="rowName">The name of the row to set the flags for.</param>
        /// <param name="value">The value to set all flags to.</param>
        public void SetAllFlagsForRow(string rowName, bool value)
        {
            foreach (string logType in new[] { "Debug", "Error", "Exception", "Info", "Warning" })
            {
                string baseFieldName = CategoryMapping.TryGetValue(rowName, out string value1) ? value1 : string.Empty;
                if (string.IsNullOrEmpty(baseFieldName))
                {
                    Debug.LogError($"No mapping found for row {rowName}");
                    return;
                }

                string fieldName = $"{baseFieldName}{logType}";
                FieldInfo field = _loggerSettings.GetType().GetField(fieldName);
                if (field != null)
                    field.SetValue(_loggerSettings, value);
                else
                    Debug.LogError($"Field {fieldName} does not exist in LoggerSettings");
            }
        }


        /// <summary>
        ///     Sets all flags to the provided value.
        /// </summary>
        /// <param name="value"> The value to set all flags to.</param>
        public void SetAllFlags(bool value)
        {
            string[] categories = { "characterResponse", "lipSync", "actions" };
            string[] logTypes = { "Debug", "Info", "Error", "Exception", "Warning" };

            foreach (string category in categories)
            foreach (string logType in logTypes)
            {
                string fieldName = $"{category}{logType}";
                FieldInfo field = _loggerSettings.GetType().GetField(fieldName);
                if (field != null && field.FieldType == typeof(bool))
                    field.SetValue(_loggerSettings, value);
                else
                    Debug.LogWarning($"Field {fieldName} not found or not boolean.");
            }
        }
    }
}