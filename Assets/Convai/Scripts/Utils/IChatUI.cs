using UnityEngine;

namespace Convai.Scripts.Utils
{
    public interface IChatUI
    {
        void Initialize(GameObject uiPrefab);
        void ActivateUI();
        void DeactivateUI();
        void SendCharacterText(string charName, string text, Color characterTextColor);
        void SendPlayerText(string playerName, string text, Color playerTextColor);
        CanvasGroup GetCanvasGroup();
    }
}