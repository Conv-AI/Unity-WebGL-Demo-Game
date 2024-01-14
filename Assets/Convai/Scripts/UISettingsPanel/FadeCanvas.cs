using System;
using System.Collections;
using UnityEngine;

/// <summary>
///     This class is used to control the fade in and fade out animations of a CanvasGroup.
/// </summary>
public class FadeCanvas : MonoBehaviour
{
    // Current alpha value of the CanvasGroup
    private float _currentAlpha;

    // Event called when the Active Fade is completed.
    public Action OnCurrentFadeCompleted;
    
    /// <summary>
    ///     Starts the fade in animation for the given CanvasGroup.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to fade in.</param>
    /// <param name="duration">The duration of the fade in animation.</param>
    public void StartFadeIn(CanvasGroup canvasGroup, float duration)
    {
        StopAllCoroutines();
        StartCoroutine(FadeIn(canvasGroup, duration));
    }

    /// <summary>
    ///     Starts the fade out animation for the given CanvasGroup.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to fade out.</param>
    /// <param name="duration">The duration of the fade out animation.</param>
    public void StartFadeOut(CanvasGroup canvasGroup, float duration)
    {
        StopAllCoroutines();
        StartCoroutine(FadeOut(canvasGroup, duration));
    }

    /// <summary>
    ///     Starts a sequence of fade in and fade out animations with a gap in between for the given CanvasGroup.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to animate.</param>
    /// <param name="fadeInDuration">The duration of the fade in animation.</param>
    /// <param name="fadeOutDuration">The duration of the fade out animation.</param>
    /// <param name="gapDuration">The duration of the gap between the fade in and fade out animations.</param>
    public void StartFadeInFadeOutWithGap(CanvasGroup canvasGroup, float fadeInDuration, float fadeOutDuration,
        float gapDuration)
    {
        StopAllCoroutines();
        StartCoroutine(FadeInFadeOutWithGap(canvasGroup, fadeInDuration, fadeOutDuration, gapDuration));
    }

    /// <summary>
    ///     Starts a sequence of fade out and fade in animations with a gap in between for the given CanvasGroup.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to animate.</param>
    /// <param name="fadeInDuration">The duration of the fade in animation.</param>
    /// <param name="fadeOutDuration">The duration of the fade out animation.</param>
    /// <param name="gapDuration">The duration of the gap between the fade out and fade in animations.</param>
    public void StartFadeOutFadeInWithGap(CanvasGroup canvasGroup, float fadeInDuration, float fadeOutDuration,
        float gapDuration)
    {
        StopAllCoroutines();
        StartCoroutine(FadeOutFadeInWithGap(canvasGroup, fadeInDuration, fadeOutDuration, gapDuration));
    }

    /// <summary>
    ///     Sets the alpha value of the given CanvasGroup.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to set the alpha value for.</param>
    /// <param name="value">The alpha value to set.</param>
    private void SetAlpha(CanvasGroup canvasGroup, float value)
    {
        _currentAlpha = value;
        canvasGroup.alpha = _currentAlpha;
    }

    /// <summary>
    ///     Coroutine for the fade in animation.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to fade in.</param>
    /// <param name="duration">The duration of the fade in animation.</param>
    private IEnumerator FadeIn(CanvasGroup canvasGroup, float duration)
    {
        float elapsedTime = 0.0f;

        // Gradually increase alpha from 0 to 1
        while (_currentAlpha <= 1.0f)
        {
            SetAlpha(canvasGroup, elapsedTime / duration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        OnCurrentFadeCompleted?.Invoke();
    }

    /// <summary>
    ///     Coroutine for the fade out animation.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to fade out.</param>
    /// <param name="duration">The duration of the fade out animation.</param>
    private IEnumerator FadeOut(CanvasGroup canvasGroup, float duration)
    {
        float elapsedTime = 0.0f;

        // Gradually decrease alpha from 1 to 0
        while (_currentAlpha >= 0.0f)
        {
            SetAlpha(canvasGroup, 1 - elapsedTime / duration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        OnCurrentFadeCompleted?.Invoke();
    }

    /// <summary>
    ///     Coroutine for a sequence of fade in and fade out animations with a gap in between.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to animate.</param>
    /// <param name="fadeInDuration">The duration of the fade in animation.</param>
    /// <param name="fadeOutDuration">The duration of the fade out animation.</param>
    /// <param name="gapDuration">The duration of the gap between the fade in and fade out animations.</param>
    private IEnumerator FadeInFadeOutWithGap(CanvasGroup canvasGroup, float fadeInDuration, float fadeOutDuration,
        float gapDuration)
    {
        float elapsedTime = 0.0f;

        // Gradually increase alpha from 0 to 1
        while (_currentAlpha <= 1.0f)
        {
            SetAlpha(canvasGroup, elapsedTime / fadeInDuration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        // Pause for a specified gap duration
        yield return new WaitForSeconds(gapDuration);

        elapsedTime = 0.0f;

        // Gradually decrease alpha from 1 to 0
        while (_currentAlpha >= 0.0f)
        {
            SetAlpha(canvasGroup, 1 - elapsedTime / fadeOutDuration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        OnCurrentFadeCompleted?.Invoke();
    }

    /// <summary>
    ///     Coroutine for a sequence of fade out and fade in animations with a gap in between.
    /// </summary>
    /// <param name="canvasGroup">The CanvasGroup to animate.</param>
    /// <param name="fadeInDuration">The duration of the fade in animation.</param>
    /// <param name="fadeOutDuration">The duration of the fade out animation.</param>
    /// <param name="gapDuration">The duration of the gap between the fade out and fade in animations.</param>
    private IEnumerator FadeOutFadeInWithGap(CanvasGroup canvasGroup, float fadeInDuration, float fadeOutDuration,
        float gapDuration)
    {
        float elapsedTime = 0.0f;

        // Gradually decrease alpha from 1 to 0
        while (_currentAlpha >= 0.0f)
        {
            SetAlpha(canvasGroup, 1 - elapsedTime / fadeOutDuration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        // Pause for a specified gap duration
        yield return new WaitForSeconds(gapDuration);

        elapsedTime = 0.0f;

        // Gradually increase alpha from 0 to 1
        while (_currentAlpha <= 1.0f)
        {
            SetAlpha(canvasGroup, elapsedTime / fadeInDuration);
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        OnCurrentFadeCompleted?.Invoke();
    }
}