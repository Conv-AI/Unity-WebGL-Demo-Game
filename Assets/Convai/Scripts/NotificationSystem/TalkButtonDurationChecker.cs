using Convai.Scripts;
using Convai.Scripts.Utils;
using TMPro;
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
    ///     Flag indicating whether the talk button was released prematurely.
    /// </summary>
    [HideInInspector] public bool IsTalkKeyReleasedEarly;

    private TMP_InputField _activeInputField;

    /// <summary>
    ///     Timer to track the duration of the talk button press.
    /// </summary>
    private float _timer;

    private UIAppearanceSettings _uiAppearanceSettings;

    private void Awake()
    {
        _uiAppearanceSettings = FindObjectOfType<UIAppearanceSettings>();
    }

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
            if (_activeInputField != null && _activeInputField.isFocused)
            {
                _timer = 0;
                return;
            }

            CheckTalkButtonRelease();
            // Reset the timer for the next talk action.
            _timer = 0;
        }
    }

    private void OnEnable()
    {
        ConvaiNPCManager.Instance.OnActiveNPCChanged += ConvaiNPCManager_OnActiveNPCChanged;
        _uiAppearanceSettings.OnAppearanceChanged += UIAppearanceSettings_OnAppearanceChanged;
    }

    private void OnDisable()
    {
        ConvaiNPCManager.Instance.OnActiveNPCChanged -= ConvaiNPCManager_OnActiveNPCChanged;
        _uiAppearanceSettings.OnAppearanceChanged -= UIAppearanceSettings_OnAppearanceChanged;
    }

    private void ConvaiNPCManager_OnActiveNPCChanged(ConvaiNPC convaiNpc)
    {
        if (convaiNpc == null)
        {
            _activeInputField = null;
            return;
        }

        _activeInputField = convaiNpc.FindActiveInputField();
    }

    private void UIAppearanceSettings_OnAppearanceChanged()
    {
        ConvaiNPC convaiNpc = ConvaiNPCManager.Instance.activeConvaiNPC;
        if (convaiNpc == null)
        {
            _activeInputField = null;
            return;
        }

        _activeInputField = convaiNpc.FindActiveInputField();
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