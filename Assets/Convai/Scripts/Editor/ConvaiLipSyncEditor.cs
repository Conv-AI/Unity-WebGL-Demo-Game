#if UNITY_EDITOR
using UnityEditor;

namespace Convai.Scripts.Editor
{
    [CustomEditor(typeof(ConvaiLipSync))]
    public class ConvaiLipSyncEditor : UnityEditor.Editor
    {
        private SerializedProperty characterType;
        private SerializedProperty faceMeshRenderer;
        private SerializedProperty lipBlendShapeIndex;
        private SerializedProperty lowerJawGameObject;
        private SerializedProperty teethBlendShapeIndex;
        private SerializedProperty teethMeshRenderer;

        private void OnEnable()
        {
            characterType = serializedObject.FindProperty("characterType");
            faceMeshRenderer = serializedObject.FindProperty("faceMeshRenderer");
            teethMeshRenderer = serializedObject.FindProperty("teethMeshRenderer");
            lipBlendShapeIndex = serializedObject.FindProperty("lipBlendShapeIndex");
            teethBlendShapeIndex = serializedObject.FindProperty("teethBlendShapeIndex");
            lowerJawGameObject = serializedObject.FindProperty("lowerJawGameObject");
        }

        public override void OnInspectorGUI()
        {
            serializedObject.Update();

            EditorGUILayout.PropertyField(characterType);

            ConvaiLipSync.CharacterType type = (ConvaiLipSync.CharacterType)characterType.enumValueIndex;

            switch (type)
            {
                case ConvaiLipSync.CharacterType.OVR:
                    EditorGUILayout.PropertyField(faceMeshRenderer);
                    EditorGUILayout.PropertyField(teethMeshRenderer);
                    EditorGUILayout.PropertyField(lipBlendShapeIndex);
                    EditorGUILayout.PropertyField(teethBlendShapeIndex);
                    break;
                case ConvaiLipSync.CharacterType.Reallusion:
                    EditorGUILayout.PropertyField(faceMeshRenderer);
                    EditorGUILayout.PropertyField(lipBlendShapeIndex);
                    EditorGUILayout.PropertyField(lowerJawGameObject);
                    break;
            }

            serializedObject.ApplyModifiedProperties();
        }
    }
}
#endif