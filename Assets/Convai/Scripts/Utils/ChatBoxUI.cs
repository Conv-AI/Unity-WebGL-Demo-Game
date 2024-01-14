using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     Manages the chat UI for displaying messages from characters and the player.
    /// </summary>
    public class ChatBoxUI : ChatUIBase
    {
        private const int MAX_MESSAGES = 25;

        private readonly List<Message> _messageList = new();
        private GameObject _chatPanel, _textObject;
        private ScrollRect _chatScrollRect;
        private Speaker _currentSpeaker;
        private bool _isFirstMessage = true;

        /// <summary>
        ///     Initializes the chat UI with the specified prefab.
        /// </summary>
        /// <param name="uiPrefab">The UI prefab to instantiate.</param>
        public override void Initialize(GameObject uiPrefab)
        {
            UIInstance = Instantiate(uiPrefab);
            _chatPanel = UIInstance.transform.GetChild(0).GetChild(0).GetChild(0).GetChild(0).gameObject;
            _textObject = _chatPanel.transform.GetChild(0).gameObject;
            _chatScrollRect = UIInstance.transform.GetChild(0).GetChild(0).GetComponent<ScrollRect>();
            UIInstance.SetActive(false);
        }

        /// <summary>
        ///     Sends a message as a character.
        /// </summary>
        /// <param name="charName">The name of the character.</param>
        /// <param name="text">The message text.</param>
        /// <param name="characterTextColor">The color of the character's text.</param>
        public override void SendCharacterText(string charName, string text, Color characterTextColor)
        {
            BroadcastCharacterDialogue(charName, text, characterTextColor);
        }

        /// <summary>
        ///     Sends a message as the player.
        /// </summary>
        /// <param name="playerName">The name of the player.</param>
        /// <param name="text">The message text.</param>
        /// <param name="playerTextColor">The color of the player's text.</param>
        public override void SendPlayerText(string playerName, string text, Color playerTextColor)
        {
            BroadcastPlayerDialogue(playerName, text, playerTextColor);
        }

        /// <summary>
        ///     Clears all messages from the UI.
        /// </summary>
        public void ClearUI()
        {
            foreach (Message message in _messageList) Destroy(message.TextObject.gameObject);
            _messageList.Clear();
        }

        // Helper methods and private functions are below. These are not part of the public API
        // and are used internally by the ChatBoxUI class to manage chat messages.

        /// <summary>
        ///     Broadcasts a dialogue message from a character.
        /// </summary>
        /// <param name="characterName">Name of the character.</param>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="characterTextColor">Color of the character's text.</param>
        private void BroadcastCharacterDialogue(string characterName, string text, Color characterTextColor)
        {
            string trimmedText = text.Trim();

            if (_currentSpeaker != Speaker.Character || _isFirstMessage)
            {
                _isFirstMessage = false;
                HandleNewCharacterMessage(characterName, trimmedText, characterTextColor);
            }
            else
            {
                AppendToExistingMessage(trimmedText);
            }

            _currentSpeaker = Speaker.Character;
            ScrollToBottom();
        }

        /// <summary>
        ///     Handles a new dialogue message from a character.
        /// </summary>
        /// <param name="characterName">Name of the character.</param>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="characterTextColor">Color of the character's text.</param>
        private void HandleNewCharacterMessage(string characterName, string text, Color characterTextColor)
        {
            if (_messageList.Count >= MAX_MESSAGES) DestroyOldestMessage();

            CreateNewMessage(text, characterName, characterTextColor);
        }


        /// <summary>
        ///     Broadcasts a dialogue message from a player.
        /// </summary>
        /// <param name="playerName">Name of the player.</param>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="playerTextColor">Color of the player's text.</param>
        private void BroadcastPlayerDialogue(string playerName, string text, Color playerTextColor)
        {
            string trimmedText = text.Trim();

            if (_currentSpeaker != Speaker.Player || !_messageList.Any())
                HandleNewPlayerMessage(playerName, trimmedText, playerTextColor);
            else
                ReplaceExistingPlayerMessage(playerName, trimmedText, playerTextColor);

            _currentSpeaker = Speaker.Player;
            ScrollToBottom();
        }


        /// <summary>
        ///     Handles a new dialogue message from a player.
        /// </summary>
        /// <param name="playerName">Name of the player.</param>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="playerTextColor">Color of the player's text.</param>
        private void HandleNewPlayerMessage(string playerName, string text, Color playerTextColor)
        {
            if (_messageList.Count >= MAX_MESSAGES) DestroyOldestMessage();

            CreateNewMessage(text, playerName, playerTextColor);
        }


        /// <summary>
        ///     Replaces an existing player message with a new one.
        /// </summary>
        /// <param name="playerName">Name of the player.</param>
        /// <param name="text">New text of the dialogue message.</param>
        /// <param name="playerTextColor">Color of the player's text.</param>
        private void ReplaceExistingPlayerMessage(string playerName, string text, Color playerTextColor)
        {
            Message lastMessage = _messageList[^1];
            lastMessage.Text = text;
            lastMessage.TextObject.text = FormatDialogueText(playerName, text, playerTextColor);
        }


        /// <summary>
        ///     Appends a text to the existing message.
        /// </summary>
        /// <param name="text">Text which needs to append to the existing message.</param>
        private void AppendToExistingMessage(string text)
        {
            if (_messageList.Count > 0)
            {
                Message lastMessage = _messageList[^1];
                lastMessage.Text += " " + text;
                lastMessage.TextObject.text += " " + text;
            }
        }


        /// <summary>
        /// </summary>
        private void ScrollToBottom()
        {
            Canvas.ForceUpdateCanvases();
            _chatScrollRect.verticalNormalizedPosition = 0f;
        }


        /// <summary>
        ///     Formats the dialogue text.
        /// </summary>
        /// <param name="speakerName">Name of the speaker.</param>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="speakerColor">Color of the speaker's text.</param>
        /// <returns>Formatted dialogue text with color tag and speaker's name.</returns>
        private static string FormatDialogueText(string speakerName, string text, Color speakerColor)
        {
            string speakerColorHtml = ColorUtility.ToHtmlStringRGB(speakerColor);
            return $"<b><color=#{speakerColorHtml}>{speakerName}</color></b>: {text}";
        }


        /// <summary>
        ///     Destroys the oldest message in the chat UI.
        /// </summary>
        private void DestroyOldestMessage()
        {
            Destroy(_messageList[0].TextObject.gameObject);
            _messageList.RemoveAt(0);
        }


        /// <summary>
        ///     Creates a new dialogue message.
        /// </summary>
        /// <param name="text">Text of the dialogue message.</param>
        /// <param name="speakerName">Name of the speaker.</param>
        /// <param name="speakerColor">Color of the speaker's text.</param>
        private void CreateNewMessage(string text, string speakerName, Color speakerColor)
        {
            Message newMessage = new()
            {
                Text = text,
                TextObject = Instantiate(_textObject, _chatPanel.transform).GetComponent<TMP_Text>()
            };
            newMessage.TextObject.text = FormatDialogueText(speakerName, text, speakerColor);
            _messageList.Add(newMessage);
        }


        /// <summary>
        ///     Enumeration of the possible speakers.
        /// </summary>
        private enum Speaker
        {
            Player,
            Character
        }

        /// <summary>
        ///     Class to keep track of individual chat messages.
        /// </summary>
        private class Message
        {
            public string Text { get; set; }
            public TMP_Text TextObject { get; set; }
        }
    }
}