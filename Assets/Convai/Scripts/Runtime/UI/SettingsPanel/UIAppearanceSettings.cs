using System;
using System.Collections.Generic;
using Convai.Scripts;
using Convai.Scripts.Utils;
using TMPro;
using UnityEngine;

/// <summary>
///     This class is used to control the appearance settings of the UI.
///     It requires a UIMicrophoneSettings, AudioSource, and MicrophoneInputChecker components to work.
/// </summary>
public class UIAppearanceSettings : MonoBehaviour
{
    [Header("Settings Panel Animation Values")]
    [SerializeField]
    [Tooltip("Duration of the appearance preview animation.")]
    private float _appearancePreviewDuration = 1f;

    [Header("References")] [Tooltip("Dropdown for selecting the appearance.")] [SerializeField]
    private TMP_Dropdown _appearanceDropdown;

    /// <summary>
    ///     FadeCanvas for handling appearance transitions.
    /// </summary>
    [SerializeField] private FadeCanvas _fadeCanvas;

    /// <summary>
    ///     Duration for fade in animation.
    /// </summary>
    private readonly float _fadeInDuration = 0.3f;

    /// <summary>
    ///     Duration for fade out animation.
    /// </summary>
    private readonly float _fadeOutDuration = 0.45f;

    /// <summary>
    ///     Currently active appearance.
    /// </summary>
    private IChatUI _currentActiveAppearance;

    /// <summary>
    ///     Reference to the UISettingsPanel for coordinating with appearance changes.
    /// </summary>
    private UISettingsPanel _uiSettingsPanel;

    /// <summary>
    ///  Action notifying the change of appearance.
    /// </summary>
    public Action OnAppearanceChanged;
    
    /// <summary>
    ///     Initialization when the script is loaded.
    /// </summary>
    private void Awake()
    {
        // Clear existing options in the dropdown.
        _appearanceDropdown.ClearOptions();

        // Get reference to the UISettingsPanel.
        _uiSettingsPanel = GetComponent<UISettingsPanel>();
    }

    private void Start()
    {
        InitializeAppearanceDropdown();
    }

    /// <summary>
    ///     Subscribe to events when this component is enabled.
    /// </summary>
    private void OnEnable()
    {
        // Subscribe to the event when saved data is loaded.
        UISaveLoadSystem.Instance.OnLoad += UISaveLoadSystem_OnLoad;

        // Subscribe to the event when data is saved.
        UISaveLoadSystem.Instance.OnSave += UISaveLoadSystem_OnSave;

        ConvaiNPCManager.Instance.OnActiveNPCChanged += ConvaiNPCManager_OnActiveNPCChanged;
    }

    /// <summary>
    ///     Unsubscribe from events when this component is disabled.
    /// </summary>
    private void OnDisable()
    {
        // Unsubscribe from the event when saved data is loaded.
        UISaveLoadSystem.Instance.OnLoad -= UISaveLoadSystem_OnLoad;

        // Unsubscribe from the event when data is saved.
        UISaveLoadSystem.Instance.OnSave -= UISaveLoadSystem_OnSave;

        ConvaiNPCManager.Instance.OnActiveNPCChanged -= ConvaiNPCManager_OnActiveNPCChanged;
    }

    /// <summary>
    ///     Initialize the appearance dropdown with available options.
    /// </summary>
    private void InitializeAppearanceDropdown()
    {
        List<string> appearanceNames = new();
        foreach (KeyValuePair<ConvaiChatUIHandler.UIType, IChatUI> appearance in ConvaiChatUIHandler.Instance
                     .GetUIAppearances) appearanceNames.Add(appearance.Key.ToString());

        _appearanceDropdown.AddOptions(appearanceNames);
        int value = (int)UISaveLoadSystem.Instance.UIType;
        _appearanceDropdown.value = value;
        // Subscribe to the appearance change event.
        _appearanceDropdown.onValueChanged.AddListener(ChangeAppearance);
    }

    /// <summary>
    ///     Event handler for when the active NPC changes.
    /// </summary>
    private void ConvaiNPCManager_OnActiveNPCChanged(ConvaiNPC newActiveNPC)
    {
        if (newActiveNPC != null)
            _fadeCanvas.StartFadeIn(_currentActiveAppearance.GetCanvasGroup(), _fadeInDuration);
        else _fadeCanvas.StartFadeOut(_currentActiveAppearance.GetCanvasGroup(), _fadeOutDuration);
    }

    /// <summary>
    ///     Event handler when saved data is loaded.
    /// </summary>
    private void UISaveLoadSystem_OnLoad()
    {
        // Set the current active appearance based on loaded data.
        _currentActiveAppearance = ConvaiChatUIHandler.Instance.GetCurrentUI();
    }

    /// <summary>
    ///     Event handler when data is saved.
    /// </summary>
    private void UISaveLoadSystem_OnSave()
    {
    }

    /// <summary>
    ///     Event handler for appearance change.
    /// </summary>
    private void ChangeAppearance(int selectedOptionNumber)
    {
        // Initiate Settings Panel transition.
        _uiSettingsPanel.FadeOutFadeinWithGap(_fadeInDuration, _fadeOutDuration, _appearancePreviewDuration);

        // Deactivate the current appearance.
        _currentActiveAppearance.DeactivateUI();

        ConvaiChatUIHandler.UIType newUIType = (ConvaiChatUIHandler.UIType)_appearanceDropdown.value;
        ConvaiChatUIHandler.Instance.SetUIType(newUIType);
        _currentActiveAppearance = ConvaiChatUIHandler.Instance.GetChatUIByUIType(newUIType);

        // Update the current active appearance reference.
        _currentActiveAppearance.ActivateUI();

        // Initiate appearance transition.
        FadeInFadeOutWithGap();
        
        OnAppearanceChanged?.Invoke();
    }

    /// <summary>
    ///     Fade out the currently active appearance.
    /// </summary>
    public void FadeOutCurrentAppearance()
    {
        _fadeCanvas.StartFadeOut(_currentActiveAppearance.GetCanvasGroup(), _fadeOutDuration);
    }

    /// <summary>
    ///     Fade in the currently active appearance.
    /// </summary>
    public void FadeInCurrentAppearance()
    {
        _fadeCanvas.StartFadeIn(_currentActiveAppearance.GetCanvasGroup(), _fadeInDuration);
    }

    /// <summary>
    ///     Perform a fade-in, fade-out transition with a gap in between.
    /// </summary>
    private void FadeInFadeOutWithGap()
    {
        _fadeCanvas.StartFadeInFadeOutWithGap(_currentActiveAppearance.GetCanvasGroup(), _fadeInDuration,
            _fadeOutDuration, _appearancePreviewDuration);
    }

    /// <summary>
    ///     Get the currently active appearance.
    /// </summary>
    public IChatUI GetCurrentActiveAppearance()
    {
        return _currentActiveAppearance;
    }
}