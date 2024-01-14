using TMPro;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     SubtitleChatUI is responsible for displaying subtitles on the screen.
    ///     It inherits from ChatUIBase and overrides methods to provide specific functionality for subtitle UI.
    /// </summary>
    public class SubtitleChatUI : ChatUIBase
    {
        private TextMeshProUGUI _subtitleText;

        /// <summary>
        ///     Initializes the subtitle UI with the provided prefab.
        /// </summary>
        /// <param name="uiPrefab">The UI prefab to instantiate.</param>
        public override void Initialize(GameObject uiPrefab)
        {
            // Instantiate the UI prefab and get the subtitle text component
            UIInstance = Instantiate(uiPrefab);
            _subtitleText = UIInstance.GetComponentInChildren<TextMeshProUGUI>();

            // Start with the UI inactive
            UIInstance.SetActive(false);
        }

        /// <summary>
        ///     Sends the character's text to the subtitle UI.
        /// </summary>
        /// <param name="charName">The name of the character speaking.</param>
        /// <param name="text">The text spoken by the character.</param>
        /// <param name="characterTextColor">The color associated with the character.</param>
        public override void SendCharacterText(string charName, string text, Color characterTextColor)
        {
            // Update the subtitle text with formatted character dialogue.
            UpdateSubtitleText(charName, text, characterTextColor);
        }

        /// <summary>
        ///     Sends the player's text to the subtitle UI.
        /// </summary>
        /// <param name="playerName">The name of the player speaking.</param>
        /// <param name="text">The text spoken by the player.</param>
        /// <param name="playerTextColor">The color associated with the player.</param>
        public override void SendPlayerText(string playerName, string text, Color playerTextColor)
        {
            // Update the subtitle text with formatted player dialogue.
            UpdateSubtitleText(playerName, text, playerTextColor);
        }

        /// <summary>
        ///     Updates the subtitle text with the provided speaker's name, text, and color.
        /// </summary>
        /// <param name="speakerName">The name of the speaker.</param>
        /// <param name="text">The text spoken by the speaker.</param>
        /// <param name="color">The color associated with the speaker.</param>
        private void UpdateSubtitleText(string speakerName, string text, Color color)
        {
            // Check if the subtitle text component is available before updating.
            if (_subtitleText != null)
                _subtitleText.text = FormatText(speakerName, text, color);
            else
                Debug.LogError("Subtitle text component not found.");
        }

        /// <summary>
        ///     Formats the text with the speaker's name and color.
        /// </summary>
        /// <param name="speakerName">The name of the speaker.</param>
        /// <param name="text">The text spoken by the speaker.</param>
        /// <param name="color">The color associated with the speaker.</param>
        /// <returns>The formatted text string.</returns>
        private string FormatText(string speakerName, string text, Color color)
        {
            // Convert the color to a hex string for HTML color formatting.
            string colorHex = ColorUtility.ToHtmlStringRGB(color);
            // Return the formatted text with the speaker's name and color.
            return $"<color=#{colorHex}>{speakerName}</color>: {text}";
        }
    }
}