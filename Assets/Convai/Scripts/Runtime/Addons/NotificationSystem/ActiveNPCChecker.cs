using System;
using Convai.Scripts.Utils;
using UnityEngine;
#if ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem;
#endif

/// <summary>
///     Controls player input to trigger a notification if there is no active NPC available for conversation.
/// </summary>
public class ActiveNPCChecker : MonoBehaviour
{
#if ENABLE_INPUT_SYSTEM
    /// <summary>
    ///     Subscribes to the talk key input action when the script starts.
    /// </summary>
    private void Start()
    {
        ConvaiInputManager.Instance.GetTalkKeyAction().started += ConvaiInputManager_TalkKeyActionStarted;
    }

    /// <summary>
    ///     Unsubscribes from the talk key input action when the script is destroyed.
    /// </summary>
    private void OnDestroy()
    {
        ConvaiInputManager.Instance.GetTalkKeyAction().started -= ConvaiInputManager_TalkKeyActionStarted;
    }

    /// <summary>
    ///     Handles the talk key action and triggers a notification if no active NPC is available.
    /// </summary>
    /// <param name="input">The input context of the talk key action.</param>
    private void ConvaiInputManager_TalkKeyActionStarted(InputAction.CallbackContext input)
    {
        try
        {
            if (!input.action.WasPressedThisFrame() || UIUtilities.IsAnyInputFieldFocused() || ConvaiNPCManager.Instance.activeConvaiNPC == null)
                if (ConvaiNPCManager.Instance.activeConvaiNPC == null)
                    NotificationSystemHandler.Instance.NotificationRequest(NotificationType.NotCloseEnoughForConversation);
        }
        catch (NullReferenceException)
        {
            Debug.Log("No active NPC available for conversation");
        }
    }
#elif ENABLE_LEGACY_INPUT_MANAGER
    private void Update()
    {
        if (ConvaiInputManager.Instance.WasTalkKeyPressed())
        {
            if (ConvaiNPCManager.Instance.activeConvaiNPC == null)
                NotificationSystemHandler.Instance.NotificationRequest(NotificationType.NotCloseEnoughForConversation);
        }
    }
#endif
}