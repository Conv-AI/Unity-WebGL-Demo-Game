using Convai.Scripts.Utils;
using UnityEngine;
using UnityEngine.InputSystem;

/// <summary>
/// Controls player input to trigger a notification if there is no active NPC available for conversation.
/// </summary>
public class ActiveNPCChecker : MonoBehaviour
{
    /// <summary>
    /// Subscribes to the talk key input action when the script starts.
    /// </summary>
    private void Start()
    {
        ConvaiInputManager.Instance.GetTalkKeyAction().started += ConvaiInputManager_TalkKeyActionStarted;
    }

    /// <summary>
    /// Unsubscribes from the talk key input action when the script is destroyed.
    /// </summary>
    private void OnDestroy()
    {
        ConvaiInputManager.Instance.GetTalkKeyAction().started -= ConvaiInputManager_TalkKeyActionStarted;
    }

    /// <summary>
    /// Handles the talk key action and triggers a notification if no active NPC is available.
    /// </summary>
    /// <param name="input">The input context of the talk key action.</param>
    private void ConvaiInputManager_TalkKeyActionStarted(InputAction.CallbackContext input)
    {
        if (input.action.WasPressedThisFrame())
        {
            if (ConvaiNPCManager.Instance.activeConvaiNPC == null)
                NotificationSystemHandler.Instance.NotificationRequest(NotificationType.NotCloseEnoughForConversation);
        }
    }
}