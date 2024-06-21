using UnityEngine;

namespace Convai.Scripts.Utils
{
    [CreateAssetMenu(fileName = "LoggerSettings", menuName = "Convai/LoggerSettings")]
    public class LoggerSettings : ScriptableObject
    {
        // LipSync logging levels
        public bool lipSyncDebug;
        public bool lipSyncError;
        public bool lipSyncException;
        public bool lipSyncInfo;
        public bool lipSyncWarning;

        // CharacterResponse logging levels
        public bool characterResponseDebug;
        public bool characterResponseError;
        public bool characterResponseException;
        public bool characterResponseInfo;
        public bool characterResponseWarning;

        // Actions logging levels
        public bool actionsDebug;
        public bool actionsError;
        public bool actionsException;
        public bool actionsInfo;
        public bool actionsWarning;
    }
}