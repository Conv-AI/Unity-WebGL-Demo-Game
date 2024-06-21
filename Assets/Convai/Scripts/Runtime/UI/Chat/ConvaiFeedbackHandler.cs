using Convai.Scripts;
using Convai.Scripts.Utils;
using UnityEngine;
using UnityEngine.UI;

public class ConvaiFeedbackHandler : MonoBehaviour
{
    [SerializeField] private Button _thumbsUPButton;
    [SerializeField] private Button _thumbsDownButton;

    [SerializeField] private GameObject _thumbsUPFill;
    [SerializeField] private GameObject _thumbsDownFill;

    private ConvaiNPC _convaiNPC;

    /// <summary>
    /// Called when the object becomes enabled and active.
    /// </summary>
    private void OnEnable()
    {
        _thumbsUPButton.onClick.AddListener((() => OnFeedbackButtonClicked(_thumbsUPButton)));
        _thumbsDownButton.onClick.AddListener((() => OnFeedbackButtonClicked(_thumbsDownButton)));
        ConvaiNPCManager.Instance.OnActiveNPCChanged += OnActiveNPCChanged;
    }

    private void OnActiveNPCChanged(ConvaiNPC newNPC)
    {
        if (newNPC != null)
        {
            _convaiNPC = newNPC;
        }
    }

    /// <summary>
    /// Called when the object is disabled.
    /// </summary>
    private void OnDisable()
    {
        _thumbsUPButton.onClick.RemoveAllListeners();
        _thumbsDownButton.onClick.RemoveAllListeners();
        ConvaiNPCManager.Instance.OnActiveNPCChanged -= OnActiveNPCChanged;
    }

    /// <summary>
    /// Handles the event when the feedback button is clicked.
    /// </summary>
    private void OnFeedbackButtonClicked(Button button)
    {
        if (button == _thumbsUPButton)
        {
            SendFeedback(true);
        }
        else if (button == _thumbsDownButton)
        {
            SendFeedback(false);
        }
    }

    /// <summary>
    /// Sends the feedback to the Convai API.
    /// </summary>
    /// <param name="thumbsUP">Indicates whether the feedback is a thumbs up or thumbs down.</param>
    private void SendFeedback(bool thumbsUP)
    {
        // Set the fill visuals for thumbs up and thumbs down buttons.
        HandleThumbsFill(thumbsUP);

        ConvaiGRPCWebAPI.Instance.SendFeedback(_convaiNPC.characterID,_convaiNPC.sessionID,thumbsUP,"");
    }

    /// <summary>
    /// Sets the fill state of the Thumbs Up and Thumbs Down buttons.
    /// </summary>
    /// <param name="thumbsUP">Indicates whether the feedback is a thumbs up or thumbs down.</param>
    private void HandleThumbsFill(bool thumbsUP)
    {
        _thumbsUPFill.SetActive(thumbsUP);
        _thumbsDownFill.SetActive(!thumbsUP);
    }
}