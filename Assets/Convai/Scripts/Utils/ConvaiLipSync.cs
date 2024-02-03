using System.Collections;
using UnityEngine;

public class ConvaiLipSync : MonoBehaviour
{
    public enum CharacterType
    {
        OVR,
        Reallusion
    }

    private const float SMOOTH_SPEED = 15; // Speed at which the blend shape weight is smoothed
    [SerializeField] public CharacterType characterType = CharacterType.OVR;
    [SerializeField] public SkinnedMeshRenderer faceMeshRenderer;
    [SerializeField] public SkinnedMeshRenderer teethMeshRenderer;
    [SerializeField] public int lipBlendShapeIndex;
    [SerializeField] public int teethBlendShapeIndex;
    [SerializeField] public GameObject lowerJawGameObject;
    [HideInInspector] public float[] audioSamples; // Not used in the optimized version

    private AudioSource _audioSource; // The audio source component
    private Vector3 _baseJawPosition; // The initial position of the lower jaw
    private float _blendShapeWeight; // Current blend shape weight
    private bool _playingStopLoop; // Flag to control the coroutine loop
    private float _targetBlendshapeWeight; // Target blend shape weight

    private void Start()
    {
        _audioSource = GetComponent<AudioSource>();
        if (lowerJawGameObject != null)
            _baseJawPosition = lowerJawGameObject.transform.localPosition;
        StartCoroutine(DoLipSync());
    }

    private void Update()
    {
        SetBlendShapeWeights();
    }

    private void OnApplicationQuit()
    {
        _playingStopLoop = true; // Stop the coroutine loop when the application quits
    }

    private IEnumerator DoLipSync()
    {
        int updateFrequency = 60; // Lip sync updates per second
        float updateInterval = 1f / updateFrequency; // Interval between updates

        while (!_playingStopLoop)
        {
            _targetBlendshapeWeight = _audioSource.isPlaying
                ?
                // Update the target weight if audio is playing
                GetAmplitude()
                :
                // Smoothly reduce the target blend shape weight to zero when audio stops
                Mathf.Lerp(_targetBlendshapeWeight, 0f, Time.deltaTime * SMOOTH_SPEED);

            yield return new WaitForSeconds(updateInterval); // Wait for the next update
        }
    }

    private float GetAmplitude()
    {
        if (_audioSource.clip != null)
        {
            // Determine the number of samples to look ahead based on the audio clip's frequency and desired offset time
            int lookAheadTimeMs = 50; // Look ahead time in milliseconds (adjust as needed)
            int lookAheadSamples = (int)(_audioSource.clip.frequency * (lookAheadTimeMs / 1000f));

            // Calculate the current position in the audio clip, adding the look-ahead offset
            int currentSamplePosition = _audioSource.timeSamples + lookAheadSamples;

            // Ensure we don't go beyond the end of the audio clip
            if (currentSamplePosition >= _audioSource.clip.samples)
                currentSamplePosition -= _audioSource.clip.samples; // Wrap around if necessary

            int windowSize = 128; // Size of the window to average over
            int startSample = Mathf.Max(currentSamplePosition - windowSize / 2, 0);
            int endSample = Mathf.Min(startSample + windowSize, _audioSource.clip.samples);

            // Ensure we don't request more samples than are available in the clip
            int sampleCount = endSample - startSample;

            // Retrieve the audio data for the window
            float[] windowSamples = new float[sampleCount];
            _audioSource.clip.GetData(windowSamples, startSample);

            float sum = 0f;
            for (int i = 0; i < windowSamples.Length; i++)
                sum += Mathf.Abs(windowSamples[i]); // Use absolute value to get the magnitude of the amplitude

            float averageAmplitude = sum / windowSamples.Length;
            return Mathf.Clamp(averageAmplitude * 1000f, 10, 150);
        }

        return 0;
    }


    private void SetBlendShapeWeights()
    {
        // Smoothly interpolate the current blend shape weight towards the target weight
        _blendShapeWeight = Mathf.Lerp(_blendShapeWeight, _targetBlendshapeWeight, Time.deltaTime * SMOOTH_SPEED);

        switch (characterType)
        {
            case CharacterType.Reallusion:
                faceMeshRenderer.SetBlendShapeWeight(lipBlendShapeIndex, _blendShapeWeight * 1.5f);
                // Calculate new jaw position based on amplitude
                float jawMovement = _blendShapeWeight / 10000f;
                Vector3 targetJawPosition = _baseJawPosition;
                targetJawPosition.x += jawMovement;

                // Smoothly interpolate to the new jaw position
                lowerJawGameObject.transform.localPosition = Vector3.Lerp(lowerJawGameObject.transform.localPosition,
                    targetJawPosition, Time.deltaTime * SMOOTH_SPEED * 2f);

                if (!_audioSource.isPlaying)
                    lowerJawGameObject.transform.localPosition = Vector3.Lerp(
                        lowerJawGameObject.transform.localPosition, _baseJawPosition, Time.deltaTime * SMOOTH_SPEED);
                break;
            case CharacterType.OVR:
                faceMeshRenderer.SetBlendShapeWeight(lipBlendShapeIndex, _blendShapeWeight);
                teethMeshRenderer.SetBlendShapeWeight(teethBlendShapeIndex, _blendShapeWeight * .5f);
                break;
        }
    }
}