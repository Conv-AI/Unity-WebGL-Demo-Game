using UnityEngine;
using UnityEngine.UI;

// Handles the activation status of the notification system based on Settings Panel Toggle.
public class NotificationSystemActiveStatusHandler : MonoBehaviour
{
    [SerializeField] private Toggle _notificationSystemActiveStatusToggle;

    private void Awake()
    {
        // Subscribe to the toggle's value change event.
        _notificationSystemActiveStatusToggle.onValueChanged.AddListener(SetActiveStatus);
    }

    /// <summary>
    ///     Subscribe to events when this component is enabled.
    /// </summary>
    private void OnEnable()
    {
        // Subscribe to the event when saved data is loaded.
        UISaveLoadSystem.Instance.OnLoad += UISaveLoadSystem_OnLoad;

        // Subscribe to the event when data is saved.
        UISaveLoadSystem.Instance.OnSave += UISaveLoadSystem_OnSave;
    }

    /// <summary>
    ///     Unsubscribe from events when this component is disabled.
    /// </summary>
    private void OnDisable()
    {
        // Subscribe to the event when saved data is loaded.
        UISaveLoadSystem.Instance.OnLoad -= UISaveLoadSystem_OnLoad;

        // Subscribe to the event when data is saved.
        UISaveLoadSystem.Instance.OnSave -= UISaveLoadSystem_OnSave;
    }

    /// <summary>
    ///     Event handler for when saved data is loaded.
    /// </summary>
    private void UISaveLoadSystem_OnLoad()
    {
        // Retrieve the saved notification system activation status.
        bool newValue = UISaveLoadSystem.Instance.NotificationSystemActiveStatus;

        // Update the UI and internal status based on the loaded value.
        SetActiveStatus(newValue);
        _notificationSystemActiveStatusToggle.isOn = newValue;
    }

    /// <summary>
    ///     Event handler for when data is saved.
    /// </summary>
    private void UISaveLoadSystem_OnSave()
    {
        // Save the current notification system activation status.
        UISaveLoadSystem.Instance.NotificationSystemActiveStatus = _notificationSystemActiveStatusToggle.isOn;
    }

    /// <summary>
    ///     Set the activation status of the notification system.
    /// </summary>
    /// <param name="value"> The new activation status. </param>
    public void SetActiveStatus(bool value)
    {
        // Call the NotificationSystemHandler to update the activation status.
        NotificationSystemHandler.Instance.SetNotificationSystemActiveStatus(value);
    }
}