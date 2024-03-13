using System.Runtime.InteropServices;
using UnityEngine;

[DefaultExecutionOrder(-120)]
public class WebGLPlatformRecognizer : MonoBehaviour
{
    public static WebGLPlatformRecognizer Instance { get; private set; }

    private void Awake()
    {
        if (Instance != null)
        {
            Debug.LogError("There's more than one WebGLPlatformRecognizer! " + transform + " - " + Instance);
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    [DllImport("__Internal")]
    private static extern bool IsMobile();

    public bool IsMobilePlatform()
    {
#if !UNITY_EDITOR && UNITY_WEBGL
     return IsMobile();
#endif
        return false;
    }
}