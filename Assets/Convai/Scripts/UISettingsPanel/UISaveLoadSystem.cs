using System;
using Convai.Scripts.Utils;
using UnityEngine;

/// <summary>
///     The UISaveLoadSystem class manages the storage and retrieval of persistent data using PlayerPrefs.
///     It also ensures that there is only one instance of the class.
/// </summary>
[DefaultExecutionOrder(-110)]
public class UISaveLoadSystem : MonoBehaviour
{
    private const string SELECTED_MICROPHONE_DEVICE_NUMBER = "SelectedMicrophoneDeviceNumber";
    private const string PLAYER_NAME = "PlayerName";
    private const string UI_TYPE = "UIType";
    private const string NOTIFICATION_SYSTEM_ACTIVE_STATUS = "NotificationSystemActiveStatus";

    /// <summary>
    ///     Stores the UI type.
    /// </summary>
    [HideInInspector] public ConvaiChatUIHandler.UIType UIType;

    /// <summary>
    ///     Events triggered during load and save operations
    /// </summary>
    public Action OnLoad; // Event triggered after loading values from PlayerPrefs.

    public Action OnSave; // Event triggered before saving values to PlayerPrefs.

    /// <summary>
    ///     Singleton instance of the UISaveLoadSystem
    /// </summary>
    public static UISaveLoadSystem Instance { get; private set; }

    /// <summary>
    ///     Stores the selected microphone device number.
    /// </summary>
    public int SelectedMicrophoneDeviceNumber { get; set; }

    /// <summary>
    ///     Stores the player's name.
    /// </summary>
    public string PlayerName { get; set; }

    /// <summary>
    ///     Stores the status of the notification system.
    /// </summary>
    public bool NotificationSystemActiveStatus { get; set; }

    /// <summary>
    ///     Ensure there is only one instance of UISaveLoadSystem
    /// </summary>
    private void Awake()
    {
        if (Instance != null)
        {
            // Log a warning and destroy the duplicate instance
            Debug.Log("<color=red> There's More Than One UISaveLoadSystem </color> " + transform + " - " + Instance);
            Destroy(gameObject);
            return;
        }

        // Set the singleton instance
        Instance = this;
    }

    /// <summary>
    ///     Start is called before the first frame update
    /// </summary>
    private void Start()
    {
        // Load values from PlayerPrefs at the start of the application
        LoadValues();
    }

    /// <summary>
    ///     Called when the script instance is being destroyed
    /// </summary>
    private void OnDestroy()
    {
        // Save values to PlayerPrefs when the script is destroyed (e.g., when the scene changes)
        SaveValues();
    }

    /// <summary>
    ///     Load values from PlayerPrefs
    /// </summary>
    private void LoadValues()
    {
        // Retrieve selected microphone device number from PlayerPrefs, use 0 as default if not found
        SelectedMicrophoneDeviceNumber = PlayerPrefs.GetInt(SELECTED_MICROPHONE_DEVICE_NUMBER, 0);

        // Retrieve player name from PlayerPrefs, default to "Player" if not found
        PlayerName = PlayerPrefs.GetString(PLAYER_NAME, "Player");

        // Retrieve UI type from PlayerPrefs, use 0 as default if not found
        UIType = (ConvaiChatUIHandler.UIType)PlayerPrefs.GetInt(UI_TYPE, 0);

        // Retrieve notification system status from PlayerPrefs, default to true if not found
        NotificationSystemActiveStatus = PlayerPrefs.GetInt(NOTIFICATION_SYSTEM_ACTIVE_STATUS, 1) == 1;

        // Invoke the OnLoad event to notify listeners that loading has completed
        OnLoad?.Invoke();
    }

    /// <summary>
    ///     Save values to PlayerPrefs
    /// </summary>
    public void SaveValues()
    {
        // Invoke the OnSave event to notify listeners that saving is about to occur
        OnSave?.Invoke();

        // Save selected microphone device number to PlayerPrefs
        PlayerPrefs.SetInt(SELECTED_MICROPHONE_DEVICE_NUMBER, SelectedMicrophoneDeviceNumber);

        // Save player name to PlayerPrefs
        PlayerPrefs.SetString(PLAYER_NAME, PlayerName);

        // Save UI type to PlayerPrefs as an integer representation
        PlayerPrefs.SetInt(UI_TYPE, (int)UIType);

        // Save notification system status to PlayerPrefs as 1 or 0 (true or false)
        PlayerPrefs.SetInt(NOTIFICATION_SYSTEM_ACTIVE_STATUS, NotificationSystemActiveStatus ? 1 : 0);
    }
}