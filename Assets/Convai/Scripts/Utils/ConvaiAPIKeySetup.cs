using UnityEngine;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     ScriptableObject that stores Convai API Key.
    ///     Allows the API key to be easily changed from the Unity editor and reduces risk of embedding keys directly into
    ///     script.
    ///     This object can be created from Unity Editor by going in top menu to Convai -> API Key
    /// </summary>
    [CreateAssetMenu(fileName = "ConvaiAPIKey", menuName = "Convai/API Key")]
    public class ConvaiAPIKeySetup : ScriptableObject
    {
        public string APIKey;
    }
}