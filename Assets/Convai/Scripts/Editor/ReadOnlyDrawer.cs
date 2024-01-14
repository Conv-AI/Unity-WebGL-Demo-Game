using UnityEditor;
using UnityEngine;

namespace Convai.Scripts.Editor
{
    [CustomPropertyDrawer(typeof(ReadOnlyAttribute))]
    public class ReadOnlyDrawer : PropertyDrawer
    {
        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            GUI.enabled = false; // Disable the property field
            EditorGUI.PropertyField(position, property, label, true);
            GUI.enabled = true; // Re-enable the property field
        }
    }
}