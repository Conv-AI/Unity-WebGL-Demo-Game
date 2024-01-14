using Convai.Scripts.Utils;
using TMPro;
using UnityEngine;

/// <summary>
///     This class is used to manage the display name settings in the UI.
/// </summary>
public class UIDisplayNameSettings : MonoBehaviour
{
    /// <summary>
    ///     Reference to the TextMeshPro input field for entering/displaying the display name.
    /// </summary>
    [SerializeField] private TMP_InputField _playerNameInputField;

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
        // Unsubscribe from the event when saved data is loaded.
        UISaveLoadSystem.Instance.OnLoad -= UISaveLoadSystem_OnLoad;

        // Unsubscribe from the event when data is saved.
        UISaveLoadSystem.Instance.OnSave -= UISaveLoadSystem_OnSave;
    }

    /// <summary>
    ///     Event handler when saved data is loaded.
    /// </summary>
    private void UISaveLoadSystem_OnLoad()
    {
        // Set the display name input field text to the loaded display name.
        _playerNameInputField.text = UISaveLoadSystem.Instance.PlayerName;

        // Update the player name in the ConvaiChatUIHandler.
        ChangePlayerName();
    }

    /// <summary>
    ///     Event handler when data is saved.
    /// </summary>
    private void UISaveLoadSystem_OnSave()
    {
        // Save the display name from the input field to the UISaveLoadSystem.
        UISaveLoadSystem.Instance.PlayerName = _playerNameInputField.text;

        // Update the player name in the ConvaiChatUIHandler.
        ChangePlayerName();
    }

    /// <summary>
    ///     Updates the player name in the ConvaiChatUIHandler.
    /// </summary>
    private void ChangePlayerName()
    {
        // Changes the player name in the ConvaiChatUIHandler.
        ConvaiChatUIHandler.Instance.playerName = _playerNameInputField.text;
    }
}