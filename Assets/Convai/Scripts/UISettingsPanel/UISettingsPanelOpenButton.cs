using UnityEngine;
using UnityEngine.UI;

public class UISettingsPanelOpenButton : MonoBehaviour
{
    private UISettingsPanel _uiSettingsPanel;
    private Button _openButton;

    private void Awake()
    {
        _uiSettingsPanel = FindObjectOfType<UISettingsPanel>();
        _openButton = GetComponent<Button>();

        _openButton.onClick.AddListener(OpenSettingsPanel);
    }

    private void OpenSettingsPanel()
    {
        _uiSettingsPanel.ToggleSettingsPanel(true);
    }
}