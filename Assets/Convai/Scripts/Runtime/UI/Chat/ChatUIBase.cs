using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     Base class for chat UI components, providing common functionality and abstract methods to be implemented by derived
    ///     classes.
    /// </summary>
    public abstract class ChatUIBase : MonoBehaviour, IChatUI
    {
        [SerializeField] protected GameObject recordingMarker;
        private readonly List<Character> _characters = new();
        [NonSerialized] protected GameObject UIInstance;

        /// <summary>
        ///     Initializes the recording marker and subscribes to the OnPlayerSpeakingChanged event.
        /// </summary>
        protected virtual void Start()
        {
            SetRecordingMarkerActive(true);
            ConvaiGRPCWebAPI.Instance.OnPlayerSpeakingChanged += OnPlayerSpeakingChanged;
        }

        /// <summary>
        ///     Initializes the UI with the provided prefab.
        /// </summary>
        /// <param name="uiPrefab">The UI prefab to instantiate.</param>
        public abstract void Initialize(GameObject uiPrefab);

        /// <summary>
        ///     Activates the UI instance.
        /// </summary>
        public virtual void ActivateUI()
        {
            SetUIActive(true);
        }

        /// <summary>
        ///     Deactivates the UI instance.
        /// </summary>
        public virtual void DeactivateUI()
        {
            SetUIActive(false);
        }

        /// <summary>
        ///     Sends character text to the UI.
        /// </summary>
        /// <param name="charName">The name of the character.</param>
        /// <param name="text">The text to send.</param>
        /// <param name="characterTextColor">The color of the character's text.</param>
        public abstract void SendCharacterText(string charName, string text, Color characterTextColor);

        /// <summary>
        ///     Sends player text to the UI.
        /// </summary>
        /// <param name="playerName">The name of the player.</param>
        /// <param name="text">The text to send.</param>
        /// <param name="playerTextColor">The color of the player's text.</param>
        public abstract void SendPlayerText(string playerName, string text, Color playerTextColor);

        /// <summary>
        ///     Retrieves the CanvasGroup component from the UI instance.
        /// </summary>
        /// <returns>The CanvasGroup component.</returns>
        public CanvasGroup GetCanvasGroup()
        {
            return UIInstance.GetComponent<CanvasGroup>();
        }

        /// <summary>
        ///     Adds a character to the list of known characters if it does not already exist.
        /// </summary>
        /// <param name="character">The character to add.</param>
        public void AddCharacter(Character character)
        {
            if (!HasCharacter(character.characterName))
                _characters.Add(character);
        }

        /// <summary>
        ///     Checks if a character with the given name exists in the list of known characters.
        /// </summary>
        /// <param name="characterName">The name of the character to check.</param>
        /// <returns>True if the character exists, false otherwise.</returns>
        public bool HasCharacter(string characterName)
        {
            return _characters.Any(character => character.characterName == characterName);
        }

        /// <summary>
        ///     Handles the player speaking state change by updating the recording marker's visibility.
        /// </summary>
        /// <param name="isSpeaking">Whether the player is currently speaking.</param>
        private void OnPlayerSpeakingChanged(bool isSpeaking)
        {
            if (recordingMarker.TryGetComponent(out Image image))
                image.color = new Color(image.color.r, image.color.g, image.color.b, isSpeaking ? 1.0f : 0.5f);
            else
                Logger.Error("Image component not found on recording marker.", Logger.LogCategory.Character);
        }

        /// <summary>
        ///     Sets the active state of the recording marker.
        /// </summary>
        /// <param name="active">The active state to set.</param>
        private void SetRecordingMarkerActive(bool active)
        {
            if (recordingMarker != null)
                recordingMarker.SetActive(active);
            else
                Logger.Error("Recording marker GameObject is not assigned.", Logger.LogCategory.Character);
        }

        /// <summary>
        ///     Sets the active state of the UI instance.
        /// </summary>
        /// <param name="active">The active state to set.</param>
        private void SetUIActive(bool active)
        {
            if (UIInstance != null)
                UIInstance.SetActive(active);
            else
                Logger.Error("UI instance GameObject is not assigned.", Logger.LogCategory.Character);
        }
    }
}