using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
///     Represents a UI notification element that can be activated or deactivated.
/// </summary>
public class UINotification : MonoBehaviour
{
    /// <summary>
    ///     The RectTransform of the notification UI element.
    /// </summary>
    public RectTransform NotificationRectTransform;

    /// <summary>
    ///     The image component for displaying the notification icon.
    /// </summary>
    [SerializeField] private Image _notificationIcon;

    /// <summary>
    ///     The TextMeshProUGUI component for displaying the notification title.
    /// </summary>
    [SerializeField] private TextMeshProUGUI _notificationTitleText;

    /// <summary>
    ///     The TextMeshProUGUI component for displaying the notification text.
    /// </summary>
    [SerializeField] private TextMeshProUGUI _notificationMessageText;

    /// <summary>
    ///     Deactivates the notification UI element on awake.
    /// </summary>
    private void Awake()
    {
        SetActive(false);
    }

    /// <summary>
    ///     Initializes the UI notification with the provided Notification data.
    /// </summary>
    /// <param name="soNotification">The notification data to initialize the UI notification with.</param>
    public void Initialize(SONotification soNotification)
    {
        if (soNotification == null)
        {
            throw new ArgumentNullException(nameof(soNotification), "SONotification is null.");
        }

        // Set the notification icon and text based on the provided Notification.
        _notificationIcon.sprite = soNotification.Icon;
        _notificationTitleText.text = soNotification.NotificationTitle;
        _notificationMessageText.text = soNotification.NotificationMessage;

        // Activate the notification UI element.
        SetActive(true);
    }

    /// <summary>
    ///     Sets the active state of the notification UI element.
    /// </summary>
    /// <param name="value">The new active state.</param>
    public void SetActive(bool value)
    {
        gameObject.SetActive(value);
    }
}