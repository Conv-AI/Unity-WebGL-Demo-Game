using System;
using System.Linq;
using UnityEngine;

namespace ReadyPlayerMe
{
    public enum AudioProviderType
    {
        Microphone = 0,
        AudioClip = 1
    }

    [DisallowMultipleComponent]
    [AddComponentMenu("Ready Player Me/Voice Handler", 0)]
    public class VoiceHandler : MonoBehaviour
    {
        private const string MOUTH_OPEN_BLEND_SHAPE_NAME = "V_Lip_Open";
        private const int AMPLITUDE_MULTIPLIER = 10;
        private const int AUDIO_SAMPLE_LENGTH = 4096;
        private const float MOUTH_OPEN_MULTIPLIER = 100f;
        private float[] _audioSample = new float[AUDIO_SAMPLE_LENGTH];
        private SkinnedMeshRenderer beardMesh;
        private SkinnedMeshRenderer headMesh;
        private SkinnedMeshRenderer teethMesh; // ReSharper disable InconsistentNaming
        private int mouthOpenBlendShapeIndexOnBeardMesh = -1;
        private int mouthOpenBlendShapeIndexOnHeadMesh = -1;
        private int mouthOpenBlendShapeIndexOnTeethMesh = -1;
        private bool isLipSyncActive;
        public AudioClip AudioClip;
        public AudioSource AudioSource;
        public AudioProviderType AudioProvider = AudioProviderType.Microphone;

        private void Start()
        {
            headMesh = GetMeshAndSetIndex(MeshType.HeadMesh, ref mouthOpenBlendShapeIndexOnHeadMesh);
            beardMesh = GetMeshAndSetIndex(MeshType.BeardMesh, ref mouthOpenBlendShapeIndexOnBeardMesh);
            teethMesh = GetMeshAndSetIndex(MeshType.TeethMesh, ref mouthOpenBlendShapeIndexOnTeethMesh);
            InitializeAudio();
        }

        private void Update()
        {
            // Check if the AudioSource has an audio clip and is playing
            if (AudioSource != null && AudioSource.clip != null && AudioSource.isPlaying)
            {
                // If not already lip-syncing, start the lip-sync process
                if (!isLipSyncActive)
                {
                    StartLipSync();
                    isLipSyncActive = true;
                }
            }
            else
            {
                // If the audio has stopped, stop the lip-sync process
                if (isLipSyncActive)
                    // StopLipSync();
                    isLipSyncActive = false;
            }
        }

        private void StartLipSync()
        {
            // Retrieve the amplitude and set the blend shape weights
            float value = GetAmplitude();
            SetBlendShapeWeights(value);
        }

        public void InitializeAudio()
        {
            try
            {
                if (AudioSource == null) AudioSource = gameObject.AddComponent<AudioSource>();

                switch (AudioProvider)
                {
                    case AudioProviderType.AudioClip:
                        SetAudioClipSource();
                        break;
                }
            }
            catch (Exception e)
            {
                Debug.LogError("VoiceHandler.Initialize:/n" + e);
            }
        }

        private void SetAudioClipSource()
        {
            AudioSource.clip = AudioClip;
            AudioSource.loop = false;
            AudioSource.mute = false;
            // AudioSource.Stop();
        }

        public void PlayCurrentAudioClip()
        {
            AudioSource.Play();
        }

        public void PlayAudioClip(AudioClip audioClip)
        {
            AudioClip = AudioSource.clip = audioClip;
            // PlayCurrentAudioClip();
        }

        private float GetAmplitude()
        {
            if (AudioSource != null && AudioSource.clip != null && AudioSource.isPlaying)
            {
                AudioSource.clip.GetData(_audioSample, AudioSource.timeSamples);

                float amplitude = _audioSample.Sum(Mathf.Abs);

                return Mathf.Clamp01(amplitude / _audioSample.Length * AMPLITUDE_MULTIPLIER);
            }

            return 0;
        }

        #region Blend Shape Movement

        private SkinnedMeshRenderer GetMeshAndSetIndex(MeshType meshType, ref int index)
        {
            SkinnedMeshRenderer mesh = gameObject.GetMeshRenderer(meshType);
            if (mesh != null) index = mesh.sharedMesh.GetBlendShapeIndex(MOUTH_OPEN_BLEND_SHAPE_NAME);
            Debug.Log("GetMeshAndSetIndex: " + meshType + " - " + index);
            return mesh;
        }

        private void SetBlendShapeWeights(float weight)
        {
            SetBlendShapeWeight(headMesh, mouthOpenBlendShapeIndexOnHeadMesh);
            SetBlendShapeWeight(beardMesh, mouthOpenBlendShapeIndexOnBeardMesh);
            SetBlendShapeWeight(teethMesh, mouthOpenBlendShapeIndexOnTeethMesh);

            void SetBlendShapeWeight(SkinnedMeshRenderer mesh, int index)
            {
                if (index >= 0) mesh.SetBlendShapeWeight(index, weight * MOUTH_OPEN_MULTIPLIER);
            }
        }

        #endregion

        private void OnDestroy()
        {
            _audioSample = null;
        }
    }
}