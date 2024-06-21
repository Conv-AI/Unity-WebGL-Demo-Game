using UnityEngine;

/// <summary>
///     This class represents a notification in the game.
/// </summary>
[CreateAssetMenu(menuName = "Convai/Notification System/Notification", fileName = "New Notification")]
public class SONotification : ScriptableObject
{
    /// <summary>
    ///     The type of the notification.
    /// </summary>
    [Tooltip("The type of the notification.")]
    public NotificationType NotificationType;

    /// <summary>
    ///     The icon to be displayed with the notification.
    /// </summary>
    [Tooltip("The icon to be displayed with the notification.")]
    public Sprite Icon;

    /// <summary>
    ///     The notification title.
    /// </summary>
    [Tooltip("The notification title.")]
    public string NotificationTitle;
    /// <summary>
    ///     The text content of the notification.
    /// </summary>
    [TextArea(10, 10)] [Tooltip("The text content of the notification.")]
    public string NotificationMessage;
}