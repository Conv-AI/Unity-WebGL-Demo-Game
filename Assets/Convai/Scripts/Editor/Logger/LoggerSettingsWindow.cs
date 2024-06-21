using UnityEditor;
using UnityEngine;

namespace Convai.Scripts.Editor
{
    public class LoggerSettingsWindow : EditorWindow
    {
        private readonly LoggerSettingsManager _loggerSettingsManager = new();

        private void OnEnable()
        {
            _ = _loggerSettingsManager.loggerSettings;
        }

        private void OnGUI()
        {
            // Setting window size
            minSize = new Vector2(850, 250);
            maxSize = minSize;
            if (_loggerSettingsManager.loggerSettings == null) return;
            EditorGUILayout.Space(20);
            // Create a custom GUIStyle based on EditorStyles.wordWrappedLabel
            GUIStyle customLabelStyle = new(EditorStyles.wordWrappedLabel)
            {
                fontSize = 15,
                normal = { textColor = Color.grey }
            };
            // Display a label with a custom style
            GUILayout.Label(
                "These loggerSettings only affect log loggerSettings related to the Convai plugin. Changes made here will not affect other parts of your project.",
                customLabelStyle);
            EditorGUILayout.Space(20);
            // Headers for the table
            string[] headers =
                { "Select All", "Category", "Debug", "Info", "Error", "Exception", "Warning" };
            // Names of the rows in the table
            string[] rowNames = { "Character", "LipSync", "Actions" };
            // Style for the headers
            GUIStyle headerStyle = new(GUI.skin.label)
            {
                fontStyle = FontStyle.Bold,
                alignment = TextAnchor.MiddleLeft
            };
            // Draw the headers
            EditorGUILayout.BeginHorizontal();
            foreach (string header in headers) GUILayout.Label(header, headerStyle, GUILayout.Width(95));
            EditorGUILayout.EndHorizontal();
            // Slightly increased spacing between rows
            EditorGUILayout.Space(5);
            // Draw the rows
            foreach (string row in rowNames)
            {
                EditorGUILayout.BeginHorizontal();
                // 'Select All' checkbox for each row
                bool allSelectedForRow = _loggerSettingsManager.GetAllFlagsForRow(row);
                bool newAllSelectedForRow = EditorGUILayout.Toggle(allSelectedForRow, GUILayout.Width(100));
                if (newAllSelectedForRow != allSelectedForRow)
                    _loggerSettingsManager.SetAllFlagsForRow(row, newAllSelectedForRow);
                GUILayout.Label(row, GUILayout.Width(100));
                // Individual checkboxes for each log type
                foreach (string logType in new[] { "Debug", "Info", "Error", "Exception", "Warning" })
                    _loggerSettingsManager.RenderAndHandleCheckbox(row, logType);
                EditorGUILayout.EndHorizontal();
            }

            // Increased spacing before global actions
            EditorGUILayout.Space(20);
            // Global actions
            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Select All", GUILayout.Width(150), GUILayout.Height(30))) // Slightly bigger button
                _loggerSettingsManager.SetAllFlags(true);
            if (GUILayout.Button("Clear All", GUILayout.Width(150), GUILayout.Height(30))) // Slightly bigger button
                _loggerSettingsManager.SetAllFlags(false);
            EditorGUILayout.EndHorizontal();
            // Additional space at the end for cleaner look
            EditorGUILayout.Space(20);
            // If the GUI has changed, mark _settings as dirty so it gets saved
            if (GUI.changed) EditorUtility.SetDirty(_loggerSettingsManager.loggerSettings);
        }

        [MenuItem("Convai/Logger Settings")]
        public static void ShowWindow()
        {
            GetWindow<LoggerSettingsWindow>("Logger Settings");
        }
    }
}