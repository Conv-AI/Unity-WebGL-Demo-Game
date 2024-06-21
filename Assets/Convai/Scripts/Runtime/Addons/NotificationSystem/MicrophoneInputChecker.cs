using System.Collections;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    public class MicrophoneInputChecker : MonoBehaviour
    {
        // Duration for microphone input check.
        private const float INPUT_CHECK_DURATION = 3f;

        // Microphone sensitivity, adjust as needed.
        private const float SENSITIVITY = 10f;

        // Threshold level to detect microphone issues.
        private const float THRESHOLD = 0.1f;

        // Reference to the TalkButtonDurationChecker script to check the talk button status.
        private TalkButtonDurationChecker _talkButtonDurationChecker;

        private void Awake()
        {
            // Find and assign the TalkButtonDurationChecker instance in the scene.
            _talkButtonDurationChecker = FindObjectOfType<TalkButtonDurationChecker>();
        }

        /// <summary>
        ///     Check if the microphone is working by analyzing the provided AudioClip.
        /// </summary>
        /// <param name="audioClip">The audio clip to analyze.</param>
        public void IsMicrophoneWorking(AudioClip audioClip)
        {
            // Stop any existing coroutines to ensure a clean start.
            StopAllCoroutines();

            // Start the coroutine to check the microphone device.
            StartCoroutine(CheckMicrophoneDevice(audioClip));
        }

        // Coroutine to check the microphone device after a specified duration.
        private IEnumerator CheckMicrophoneDevice(AudioClip audioClip)
        {
            // Check if the provided AudioClip is null.
            if (audioClip == null)
            {
                // Log an error and abort the microphone check.
                Logger.Error("AudioClip is null!", Logger.LogCategory.Character);
                yield break;
            }

            // Wait for the specified duration before analyzing microphone input.
            yield return new WaitForSeconds(INPUT_CHECK_DURATION);

            // If the talk button was released prematurely, abort the microphone check.
            if (_talkButtonDurationChecker.isTalkKeyReleasedEarly) yield break;

            // Calculate the range of audio samples to analyze based on the duration.
            int sampleStart = 0;
            int sampleEnd = (int)(INPUT_CHECK_DURATION * audioClip.frequency * audioClip.channels);

            // Initialize an array to store audio samples.
            float[] samples = new float[sampleEnd - sampleStart];
            int samplesLength = samples.Length;

            // Attempt to retrieve audio data from the AudioClip.
            if (audioClip.GetData(samples, sampleStart) == false)
            {
                Logger.Error("Failed to get audio data!", Logger.LogCategory.Character);
                yield break;
            }

            // Initialize a variable to store the total absolute level of audio samples.
            float level = 0;

            // Calculate the total absolute level of audio samples.
            for (int i = 0; i < samplesLength; i++) level += Mathf.Abs(samples[i] * SENSITIVITY);

            // Normalize the calculated level by dividing it by the number of samples and then multiply by sensitivity.
            level = level / samplesLength * SENSITIVITY;

            // Check if the microphone level is below the threshold, indicating a potential issue.
            if (level < THRESHOLD)
            {
                Logger.Warn("Microphone Issue Detected!", Logger.LogCategory.Character);
                NotificationSystemHandler.Instance.NotificationRequest(NotificationType.MicrophoneIssue);
            }
            else
            {
                // Log that the microphone is working fine.
                Logger.Info("Microphone is working fine.", Logger.LogCategory.Character);
            }
        }
    }
}