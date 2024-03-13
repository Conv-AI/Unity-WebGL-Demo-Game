using StarterAssets;
using UnityEngine;

public class WebGLPlayerActivator : MonoBehaviour
{
    [SerializeField] private FirstPersonController _firstPersonController;
    [SerializeField] private GameObject _joystick;
    [SerializeField] private GameManager _gameManager;

    private void Start()
    {
        _gameManager.OnValidationCompleted += GameManager_OnValidationCompleted;
    }


    private void GameManager_OnValidationCompleted()
    {
        _firstPersonController.enabled = true;
        if (WebGLPlatformRecognizer.Instance.IsMobilePlatform())
        {
            _joystick.SetActive(true);
        }
    }
}