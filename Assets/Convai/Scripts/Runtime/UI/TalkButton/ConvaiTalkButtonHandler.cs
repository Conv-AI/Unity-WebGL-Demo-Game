using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Convai.Scripts.Utils
{
    public class ConvaiTalkButtonHandler : Button
    {
        private const float NORMAL_ALPHA = 1f; // The alpha when button is not pressed

        private const float PRESSED_ALPHA = 0.5f; // The alpha when button is pressed

        private ConvaiNPC _currentActiveNPC;

        private bool _subscribed;

        protected override void Start()
        {
            base.Start();
            if (ConvaiNPCManager.Instance != null)
            {
                ConvaiNPCManager.Instance.OnActiveNPCChanged += OnActiveNPCChangedHandler;
                Logger.Info("Listening to OnActiveNPCChanged event.", Logger.LogCategory.Character);
            }
            else
            {
                Logger.Warn("Instance of ConvaiNPCManager is not yet initialized.", Logger.LogCategory.Character);
            }
        }

        protected override void OnEnable()
        {
            // Check if NPC Manager instance is available before subscribing
            ConvaiNPCManager npcManager = ConvaiNPCManager.Instance;
            if (npcManager != null)
            {
                npcManager.OnActiveNPCChanged += OnActiveNPCChangedHandler;
                _currentActiveNPC = npcManager.GetActiveConvaiNPC();
                if (!_subscribed)
                {
                    _subscribed = true;
                    Logger.Info("Subscribed to OnActiveNPCChanged event.", Logger.LogCategory.Character);
                }
            }
            else
            {
                Logger.Warn("NPC Manager instance is not available during enabling.", Logger.LogCategory.Character);
            }
        }

        protected override void OnDisable()
        {
            // Always make sure to unsubscribe from events when the object is disabled
            ConvaiNPCManager npcManager = ConvaiNPCManager.Instance;
            if (npcManager != null)
            {
                npcManager.OnActiveNPCChanged -= OnActiveNPCChangedHandler;
                if (_subscribed)
                {
                    _subscribed = false;
                    Logger.Info("Unsubscribed from OnActiveNPCChanged event.", Logger.LogCategory.Character);
                }
            }
        }

        protected override void OnDestroy()
        {
            if (ConvaiNPCManager.Instance != null)
            {
                ConvaiNPCManager.Instance.OnActiveNPCChanged -= OnActiveNPCChangedHandler;
                Logger.Info("Stopped listening to OnActiveNPCChanged event.", Logger.LogCategory.Character);
            }
        }

        private void OnActiveNPCChangedHandler(ConvaiNPC newActiveNPC)
        {
            _currentActiveNPC = newActiveNPC;
            if (_currentActiveNPC != null)
                Logger.Info($"Active NPC has changed to: {_currentActiveNPC.name}", Logger.LogCategory.Character);
        }

        public override void OnPointerDown(PointerEventData eventData)
        {
            base.OnPointerDown(eventData);

            ColorBlock colorBlock = colors;
            colorBlock.normalColor = new Color(colorBlock.normalColor.r, colorBlock.normalColor.g,
                colorBlock.normalColor.b,
                PRESSED_ALPHA);
            colors = colorBlock;

            if (_currentActiveNPC != null)
            {
                _currentActiveNPC.StartListening();
                IncreaseScale();
                Logger.DebugLog($"{gameObject.name} Was Clicked.", Logger.LogCategory.Character);
            }
            else
            {
                Logger.Warn("No active NPC found when button was pressed.", Logger.LogCategory.Character);
            }
        }

        public override void OnPointerUp(PointerEventData eventData)
        {
            base.OnPointerUp(eventData);

            ColorBlock colorBlock = colors;
            colorBlock.normalColor =
                new Color(colorBlock.normalColor.r, colorBlock.normalColor.g, colorBlock.normalColor.b, NORMAL_ALPHA);
            colors = colorBlock;

            if (_currentActiveNPC != null)
            {
                _currentActiveNPC.StopListening();
                DecreaseScale();
                Logger.DebugLog($"{gameObject.name} Was Released.", Logger.LogCategory.Character);
            }
            else
            {
                Logger.Warn("No active NPC found when button was released.", Logger.LogCategory.Character);
            }
        }

        private void IncreaseScale()
        {
            Vector3 targetScale = new Vector3(1.25f, 1.25f, 1.25f);
            transform.localScale = Vector3.Lerp(transform.localScale, targetScale, 1f);
        }

        private void DecreaseScale()
        {
            Vector3 targetScale = new Vector3(1, 1, 1);
            transform.localScale = Vector3.Lerp(transform.localScale, targetScale, 1f);
        }
    }
}