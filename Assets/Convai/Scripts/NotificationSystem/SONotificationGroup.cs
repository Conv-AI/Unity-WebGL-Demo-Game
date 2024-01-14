using UnityEngine;

/// <summary>
///     Represents a group of notifications as a ScriptableObject.
///     This allows for easy configuration and management of different notifications in the Unity Editor.
/// </summary>
[CreateAssetMenu(menuName = "Convai/Notification System/Notification Group", fileName = "New Notification Group")]
public class SONotificationGroup : ScriptableObject
{
    /// <summary>
    ///     Array of SONotification objects.
    ///     Each object represents a unique notification that can be triggered in the application.
    /// </summary>
    public SONotification[] SONotifications;
}