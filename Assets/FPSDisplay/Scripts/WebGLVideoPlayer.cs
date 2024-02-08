using UnityEngine;
using UnityEngine.Video;

public class WebGLVideoPlayer : MonoBehaviour
{
    [SerializeField] private VideoPlayer _videoPlayer;
    [SerializeField] private string _videoName;

    private void Awake()
    {
        PlayVideo();
    }

    private void PlayVideo()
    {
        string videoPath = Application.streamingAssetsPath + "/" + _videoName;
        _videoPlayer.url = videoPath;
        _videoPlayer.Play();
    }
}