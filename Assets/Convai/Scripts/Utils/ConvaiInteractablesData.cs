using System;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    /// <summary>
    ///     This script defines global actions and settings for Convai.
    /// </summary>
    [AddComponentMenu("Convai/Convai Interactables Data")]
    [HelpURL(
        "https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/scripts-overview/convaiglobalactionsettings.cs")]
    public class ConvaiInteractablesData : MonoBehaviour
    {
        // [Tooltip("Flag to toggle display of actions")] [SerializeField]
        // public bool displayActions;

        [Tooltip("Array of Characters in the environment")] [SerializeField]
        public Character[] Characters;

        [Tooltip("Array of Objects in the environment")] [SerializeField]
        public Object[] Objects;

        /// <summary>
        ///     Represents a character in the environment.
        /// </summary>
        [Serializable]
        public class Character
        {
            [SerializeField] public string Name;
            [SerializeField] public string Bio;
            [SerializeField] public GameObject gameObject;
        }

        [Serializable]
        public class Object
        {
            [SerializeField] public string Name;
            [SerializeField] public string Description;
            [SerializeField] public GameObject gameObject;
        }
    }
}