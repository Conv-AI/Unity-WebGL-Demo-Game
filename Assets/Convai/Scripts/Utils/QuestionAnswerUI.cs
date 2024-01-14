using TMPro;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     The QuestionAnswerUI class is responsible for managing the UI elements
    ///     that display questions and answers in a conversational interface.
    /// </summary>
    public class QuestionAnswerUI : ChatUIBase
    {
        private TextMeshProUGUI _answerText;
        private TextMeshProUGUI _questionText;

        /// <summary>
        ///     Initializes the UI with the provided prefab.
        /// </summary>
        /// <param name="uiPrefab">The UI prefab to instantiate.</param>
        public override void Initialize(GameObject uiPrefab)
        {
            UIInstance = Instantiate(uiPrefab);
            _questionText = UIInstance.transform.Find("Background").Find("QuestionText")
                .GetComponent<TextMeshProUGUI>();
            _answerText = UIInstance.transform.Find("Background").Find("AnswerText").GetComponent<TextMeshProUGUI>();
            UIInstance.SetActive(false);
        }

        /// <summary>
        ///     Sends the character's text to the UI, formatted with the character's color.
        /// </summary>
        /// <param name="charName">The name of the character speaking.</param>
        /// <param name="text">The text spoken by the character.</param>
        /// <param name="characterTextColor">The color associated with the character.</param>
        public override void SendCharacterText(string charName, string text, Color characterTextColor)
        {
            if (_answerText != null) _answerText.text = FormatDialogueText(charName, text, characterTextColor);
        }

        /// <summary>
        ///     Sends the player's text to the UI, formatted with the player's color.
        /// </summary>
        /// <param name="playerName">The name of the player speaking.</param>
        /// <param name="text">The text spoken by the player.</param>
        /// <param name="playerTextColor">The color associated with the player.</param>
        public override void SendPlayerText(string playerName, string text, Color playerTextColor)
        {
            if (_questionText != null) _questionText.text = FormatDialogueText(playerName, text, playerTextColor);
        }

        /// <summary>
        ///     Formats the dialogue text with the speaker's name and color.
        /// </summary>
        /// <param name="speakerName">The name of the speaker.</param>
        /// <param name="text">The text spoken by the speaker.</param>
        /// <param name="speakerColor">The color associated with the speaker.</param>
        /// <returns>Formatted dialogue text.</returns>
        private string FormatDialogueText(string speakerName, string text, Color speakerColor)
        {
            string colorHex = ColorUtility.ToHtmlStringRGBA(speakerColor);
            return $"<color=#{colorHex}>{speakerName}</color>: {text}";
        }
    }
}