using UnityEditor;
using UnityEditor.PackageManager.Requests;
using UnityEditor.PackageManager;
#if !READY_PLAYER_ME
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
using UnityEngine;
#endif

namespace Convai.Scripts.Editor.Custom_Package
{
    [InitializeOnLoad]
    public class ReadyPlayerMeImporter
    {
        static AddRequest _request;
        static ReadyPlayerMeImporter()
        {
#if !READY_PLAYER_ME
        Debug.Log("Ready Player Me is not installed, importing it");
        _request = Client.Add("https://github.com/readyplayerme/rpm-unity-sdk-core.git");
        EditorUtility.DisplayProgressBar("Importing Ready Player Me", "Importing.....", Random.Range(0,1f));
        EditorApplication.update += UnityEditorUpdateCallback;
       
#endif
        }

#if !READY_PLAYER_ME
        private static void UnityEditorUpdateCallback()
        {
            if (_request == null) return;
            if (!_request.IsCompleted) return;
            switch (_request.Status)
            {
                case StatusCode.Success:
                    Debug.Log($"Successfully installed: {_request.Result.name}");
                    break;
                case StatusCode.Failure:
                    Debug.Log($"Failure: {_request.Error.message}");
                    break;
            }
            EditorApplication.update -= UnityEditorUpdateCallback;
            EditorUtility.ClearProgressBar();
        }
#endif
    }
}