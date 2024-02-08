using System;
using UnityEngine;

public class SceneManagement : MonoBehaviour
{
    public void ChangeScene(int sceneIndex)
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneIndex);
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
            ReturnMenu();
    }

    private void ReturnMenu()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene(0);
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
    }
}