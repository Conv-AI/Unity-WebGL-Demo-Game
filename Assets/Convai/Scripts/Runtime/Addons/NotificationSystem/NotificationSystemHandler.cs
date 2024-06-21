using System;
using UnityEngine;

/// <summary>
///     Handles the notification system's behavior and interactions.
/// </summary>
[DefaultExecutionOrder(-100)]
public class NotificationSystemHandler : MonoBehaviour
{
    /// <summary>
    ///     Array containing predefined notification configurations.
    ///     This array can be modified in the Unity Editor to define different types of notifications.
    /// </summary>
    [SerializeField] private SONotificationGroup _notificationGroup;

    /// <summary>
    ///     Event triggered when a notification is requested.
    /// </summary>
    public Action<SONotification> OnNotificationRequested;

    /// <summary>
    ///     Flag indicating whether the notification system is currently active.
    /// </summary>
    private bool _isNotificationSystemActive = true;

    /// <summary>
    ///     Singleton instance of the NotificationSystemHandler.
    /// </summary>
    public static NotificationSystemHandler Instance { get; private set; }

    /// <summary>
    ///     Ensure there is only one instance of NotificationSystemHandler.
    /// </summary>
    private void Awake()
    {
        if (Instance != null)
        {
            Debug.Log("<color=red> There's More Than One NotificationSystemHandler </color> " + transform + " - " +
                      Instance);
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    /// <summary>
    ///     Requests a notification of the specified type.
    /// </summary>
    /// <param name="notificationType">The type of notification to request.</param>
    public void NotificationRequest(NotificationType notificationType)
    {
        // Check if the notification system is currently active.
        if (!_isNotificationSystemActive) return;

        // Search for the requested notification type in the predefined array.
        SONotification requestedSONotification = null;
        foreach (SONotification notification in _notificationGroup.SONotifications)
            if (notification.NotificationType == notificationType)
            {
                requestedSONotification = notification;
                break;
            }

        // If the requested notification is not found, log an error.
        if (requestedSONotification == null)
        {
            Debug.LogError("There is no Notification defined for the selected Notification Type!");
            return;
        }

        // Invoke the OnNotificationRequested event with the requested notification.
        OnNotificationRequested?.Invoke(requestedSONotification);
    }

    /// <summary>
    ///     Sets the activation status of the notification system.
    /// </summary>
    /// <param name="value">The new activation status.</param>
    public void SetNotificationSystemActiveStatus(bool value)
    {
        _isNotificationSystemActive = value;
    }
}