using UnityEditor;
using UnityEngine;

namespace ReadyPlayerMe
{
    [CustomEditor(typeof(VoiceHandler))]
    public class VoiceHandlerEditor : Editor
    {
        private readonly GUIContent audioClipLabel = new("AudioClip", "AudioClip to play.");

        private readonly GUIContent audioProviderLabel = new("AudioProvider", "Selection for source of the audio.");

        private readonly GUIContent audioSourceLabel = new("AudioSource",
            "AudioSource that will play the audio. If not assigned spawns on the avatar root object.");

        private SerializedProperty audioClip;
        private SerializedProperty audioProvider;
        private SerializedProperty audioSource;

        private void OnEnable()
        {
            audioClip = serializedObject.FindProperty("AudioClip");
            audioSource = serializedObject.FindProperty("AudioSource");
            audioProvider = serializedObject.FindProperty("AudioProvider");
        }

        public override void OnInspectorGUI()
        {
            DrawPropertyField(audioProvider, audioProviderLabel);
            DrawPropertyField(audioSource, audioSourceLabel);

            if (audioProvider.intValue == (int)AudioProviderType.AudioClip)
            {
                DrawPropertyField(audioClip, audioClipLabel);

                GUI.enabled = Application.isPlaying;
                if (GUILayout.Button("Test Audio Clip [Play Mode]")) ((VoiceHandler)target).PlayCurrentAudioClip();

                GUI.enabled = true;
            }
        }

        private void DrawPropertyField(SerializedProperty property, GUIContent content)
        {
            serializedObject.Update();

            EditorGUI.BeginChangeCheck();
            EditorGUILayout.PropertyField(property, content);
            if (EditorGUI.EndChangeCheck())
            {
                serializedObject.ApplyModifiedProperties();
                ((VoiceHandler)target).InitializeAudio();
            }
        }
    }
}