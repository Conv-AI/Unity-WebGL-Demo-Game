using Convai.Scripts.Utils;
using UnityEngine;

/// <summary>
///     Monitors the duration of the talk button press and notifies the Notification System if released prematurely.
/// </summary>
public class TalkButtonDurationChecker : MonoBehaviour
{
    /// <summary>
    ///     Minimum duration required for a valid talk action.
    /// </summary>
    private const float MIN_TALK_DURATION = 0.5f;

    /// <summary>
    ///     Timer to track the duration of the talk button press.
    /// </summary>
    private float _timer;

    /// <summary>
    /// Flag indicating whether the talk button was released prematurely.
    /// </summary>
    [HideInInspector] public bool IsTalkKeyReleasedEarly;

    /// <summary>
    ///     Update is called once per frame.
    ///     It checks if the talk button is being held down or released.
    /// </summary>
    private void Update()
    {
        // Check if the talk button is being held down.
        if (ConvaiInputManager.Instance.IsTalkKeyHeld())
            // Increment the timer based on the time passed since the last frame.
            _timer += Time.deltaTime;

        // Check if the talk button is released.
        if (ConvaiInputManager.Instance.WasTalkKeyReleased())
        {
            CheckTalkButtonRelease();
            // Reset the timer for the next talk action.
            _timer = 0;
        }
    }

    /// <summary>
    ///     Checks if the talk button was released prematurely and triggers a notification if so.
    /// </summary>
    private void CheckTalkButtonRelease()
    {
        // Initialize the flag to false.
        IsTalkKeyReleasedEarly = false;

        // Trigger a notification if the talk button is released before reaching the minimum required duration.
        if (_timer < MIN_TALK_DURATION)
        {
            // Check if there is an active ConvaiNPC.
            if (ConvaiNPCManager.Instance.activeConvaiNPC == null) return;

            // Set the flag to true and request a notification.
            IsTalkKeyReleasedEarly = true;
            NotificationSystemHandler.Instance.NotificationRequest(NotificationType.TalkButtonReleasedEarly);
        }
    }
}