using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
///     This class is responsible for controlling the UI notifications in the game.
///     It handles the creation, activation, deactivation, and animation of notifications.
/// </summary>
public class UINotificationController : MonoBehaviour
{
    /// <summary>
    ///     Maximum number of notifications that can be displayed at the same time.
    /// </summary>
    private const int MAX_NUMBER_OF_NOTIFICATION_AT_SAME_TIME = 3;

    /// <summary>
    ///     References to the UI notification prefab and other necessary components.
    /// </summary>
    [Header("References")]
    [SerializeField] private UINotification _uiNotificationPrefab;

    /// <summary>
    ///     Spacing between Notifications
    /// </summary>
    [Header("Configurations")]
    [SerializeField] private int _spacing = 100;

    /// <summary>
    ///     Position for Active Notification
    /// </summary>
    [Tooltip("Starting position for the first notification; Y value adjusts sequentially for each subsequent notification.")]
    [SerializeField] private Vector2 _activeNotificationPos;

    /// <summary>
    ///     Position for Deactivated Notification
    /// </summary>
    [SerializeField] private Vector2 _deactivatedNotificationPos;


    [Header("UI Notification Animation Values")]
    [SerializeField] private float _activeDuration = 4f;
    [SerializeField] private float _slipDuration = 0.3f;
    [SerializeField] private float _delay = 0.3f;
    [SerializeField] private AnimationCurve _slipAnimationCurve;
    private readonly float _fadeInDuration = 0.35f;
    private readonly float _fadeOutDuration = 0.2f;

    /// <summary>
    ///     Flag indicating whether a UI notification movement animation is currently in progress.
    ///     Used to prevent overlapping animation coroutines for UI notifications.
    /// </summary>
    private bool _isNotificationAnimationInProgress;
    private Queue<UINotification> _activeUINotifications;
    private Queue<UINotification> _deactivatedUINotifications;
    private CanvasGroup _canvasGroup;
    private FadeCanvas _fadeCanvas;


    /// <summary>
    ///     List to keep track of the order in which pending notifications were requested.
    /// </summary>
    private readonly List<SONotification> _pendingNotificationsOrder = new();

    /// <summary>
    ///     Awake is called when the script instance is being loaded.
    ///     It is used to initialize any variables or game state before the game starts.
    /// </summary>
    private void Awake()
    {
        // Get necessary components and initialize UI notifications.
        _canvasGroup = GetComponent<CanvasGroup>();
        _fadeCanvas = GetComponent<FadeCanvas>();
        InitializeUINotifications();
    }

    /// <summary>
    ///     This function is called when the object becomes enabled and active.
    ///     It is used to subscribe to the OnNotificationRequested event.
    /// </summary>
    private void OnEnable()
    {
        NotificationSystemHandler.Instance.OnNotificationRequested += NotificationSystemHandler_OnNotificationRequested;
    }

    /// <summary>
    ///     This function is called when the behaviour becomes disabled or inactive.
    ///     It is used to unsubscribe from the OnNotificationRequested event.
    /// </summary>
    private void OnDisable()
    {
        NotificationSystemHandler.Instance.OnNotificationRequested -= NotificationSystemHandler_OnNotificationRequested;
    }

    /// <summary>
    ///     Handles a new notification request by adding it to the order list and attempting to initialize it.
    ///     If a notification animation is already in progress, waits for it to complete before processing the new request.
    /// </summary>
    /// <param name="SONotification">The requested SONotification to be processed.</param>
    private void NotificationSystemHandler_OnNotificationRequested(SONotification SONotification)
    {
        // Add the requested notification to the order list and try to initialize it.
        _pendingNotificationsOrder.Add(SONotification);

        // If a notification animation is already in progress, wait for it to complete before processing the new request.
        if (_isNotificationAnimationInProgress) return;

        // If initialization fails, return
        if (TryInitializeNewNotification(SONotification, out UINotification uiNotification) == false) return;

        // Start the coroutine for UI notification animations
        StartNotificationUICoroutine(uiNotification);
    }

    /// <summary>
    ///     This function is used to initialize the UI notifications.
    ///     It initializes the queues for active and deactivated UI notifications and instantiates and enqueues deactivated UI
    ///     notifications.
    /// </summary>
    private void InitializeUINotifications()
    {
        // Initialize the queues for active and deactivated UI notifications.
        _activeUINotifications = new Queue<UINotification>();
        _deactivatedUINotifications = new Queue<UINotification>();

        // Instantiate and enqueue deactivated UI notifications.
        for (int i = 0; i < MAX_NUMBER_OF_NOTIFICATION_AT_SAME_TIME; i++)
        {
            UINotification uiNotification = Instantiate(_uiNotificationPrefab, transform);

            // Initialize Position
            uiNotification.NotificationRectTransform.anchoredPosition = _deactivatedNotificationPos;
            _deactivatedUINotifications.Enqueue(uiNotification);
        }
    }

    /// <summary>
    ///     Attempts to initialize a new UI notification using the provided SONotification.
    ///     Tries to get an available UI notification and initializes it with the given SONotification.
    /// </summary>
    /// <param name="SONotification">The SONotification to be used for initializing the UI notification.</param>
    /// <param name="uiNotification">The initialized UINotification if successful, otherwise null.</param>
    /// <returns>True if initialization is successful, false otherwise.</returns>
    private bool TryInitializeNewNotification(SONotification SONotification, out UINotification uiNotification)
    {
        // Try to get an available UI notification and initialize it with the given SONotification.
        uiNotification = GetAvailableUINotification();
        if (uiNotification == null) return false;

        uiNotification.Initialize(SONotification);
        return true;
    }

    /// <summary>
    ///     Initiates the coroutine for UI notification animations and adds the notification to the active queue.
    /// </summary>
    /// <param name="uiNotification">The UINotification to be animated and added to the active queue.</param>
    private void StartNotificationUICoroutine(UINotification uiNotification)
    {
        // Define additional delay for smoother notification end transition
        float extraDelayForNotificationEndTransition = 0.5f;

        // Calculate the total duration including fadeIn, activeDuration, slipDuration (for both activation and deactivation), delay, and extra delay
        float totalAnimationDuration = _fadeInDuration + _activeDuration + (2 * _slipDuration) + _delay + extraDelayForNotificationEndTransition;

        // Start the fade animation for the canvas group
        _fadeCanvas.StartFadeInFadeOutWithGap(_canvasGroup, _fadeInDuration, _fadeOutDuration, totalAnimationDuration);

        // Enqueue the notification to the active queue
        _activeUINotifications.Enqueue(uiNotification);

        // Start the coroutine for individual UI notification animations
        StartCoroutine(StartNotificationUI(uiNotification));
    }

    /// <summary>
    ///     Coroutine for managing the lifecycle of a UI notification, including its activation, display duration, and deactivation.
    /// </summary>
    /// <param name="uiNotification">The UINotification to be managed.</param>
    private IEnumerator StartNotificationUI(UINotification uiNotification)
    {
        // Remove the notification from the pending list
        int firstIndex = 0;
        _pendingNotificationsOrder.RemoveAt(firstIndex);

        // Move to the active position
        yield return MoveUINotificationToActivePosition(uiNotification);

        // Wait for the active duration
        yield return new WaitForSeconds(_activeDuration);

        UpdateUINotificationPositions();

        // Move to the hidden position
        yield return MoveUINotificationToHiddenPosition(uiNotification);

        // Deactivate the UI notification, update positions, and check for pending notifications.
        DeactivateAndEnqueueUINotification(uiNotification);

        // If there are pending notifications, initialize and start a new one
        if (AreTherePendingNotifications())
        {
            TryInitializeAndStartNewNotification();
        }

        // Update UI notification positions after the lifecycle is complete
        UpdateUINotificationPositions();
    }

    /// <summary>
    ///     Moves the UI notification to its active position.
    /// </summary>
    private IEnumerator MoveUINotificationToActivePosition(UINotification uiNotification)
    {
        float targetY = _activeNotificationPos.y - _spacing * (_activeUINotifications.Count - 1);
        Vector2 targetPos = new Vector2(_activeNotificationPos.x, targetY);
        yield return StartCoroutine(MoveUINotificationToTargetPos(uiNotification, targetPos));
    }

    /// <summary>
    ///     Moves the UI notification to its hidden position.
    /// </summary>
    private IEnumerator MoveUINotificationToHiddenPosition(UINotification uiNotification)
    {
        Vector2 targetPos = _deactivatedNotificationPos;
        yield return StartCoroutine(MoveUINotificationToTargetPos(uiNotification, targetPos));
    }

    /// <summary>
    ///     Deactivates the UI notification, updates positions, and enqueues it for later use.
    /// </summary>
    private void DeactivateAndEnqueueUINotification(UINotification uiNotification)
    {
        uiNotification.SetActive(false);
        _activeUINotifications.Dequeue();
        _deactivatedUINotifications.Enqueue(uiNotification);
        UpdateUINotificationPositions();
    }

    /// <summary>
    ///     Checks if there are pending notifications and initializes and starts a new one if available.
    /// </summary>
    private void TryInitializeAndStartNewNotification()
    {
        if (TryInitializeNewNotification(_pendingNotificationsOrder[0], out UINotification newUiNotification))
        {
            StartNotificationUICoroutine(newUiNotification);
        }
    }

    /// <summary>
    ///     Smoothly moves the UI notification to the target position over a specified duration.
    /// </summary>
    /// <param name="uiNotification">The UINotification to be moved.</param>
    /// <param name="targetPos">The target position to move the UINotification to.</param>
    private IEnumerator MoveUINotificationToTargetPos(UINotification uiNotification, Vector2 targetPos)
    {
        // Set flag to indicate that a notification animation is in progress
        _isNotificationAnimationInProgress = true;

        float elapsedTime = 0f;
        Vector2 startPos = uiNotification.NotificationRectTransform.anchoredPosition;

        // Move the UI notification smoothly to the target position over the specified duration
        while (elapsedTime <= _slipDuration + _delay)
        {
            elapsedTime += Time.deltaTime;
            float percent = Mathf.Clamp01(elapsedTime / _slipDuration);
            float curvePercent = _slipAnimationCurve.Evaluate(percent);
            uiNotification.NotificationRectTransform.anchoredPosition = Vector2.Lerp(startPos, targetPos, curvePercent);
            yield return null;
        }

        // Reset the flag once the animation is complete
        _isNotificationAnimationInProgress = false;
    }

    /// <summary>
    ///     Updates the positions of active UI notifications along the Y-axis.
    /// </summary>
    private void UpdateUINotificationPositions()
    {
        float targetX = _activeNotificationPos.x;
        float targetY = _activeNotificationPos.y;

        // Iterate through active UI notifications and move them to their respective positions
        foreach (UINotification activeUINotification in _activeUINotifications)
        {
            Vector2 targetPos = new Vector2(targetX, targetY);
            StartCoroutine(MoveUINotificationToTargetPos(activeUINotification, targetPos));
            targetY -= _spacing;
        }
    }

    /// <summary>
    ///     Gets an available UI notification from the deactivated queue.
    /// </summary>
    /// <returns>The available UI notification, or null if the deactivated queue is empty.</returns>
    private UINotification GetAvailableUINotification()
    {
        // Check if there are available deactivated UI notifications
        if (_deactivatedUINotifications.Count == 0) return null;

        // Dequeue and return an available UI notification
        return _deactivatedUINotifications.Dequeue();
    }

    /// <summary>
    ///     Checks if there are pending notifications in the order list.
    /// </summary>
    /// <returns>True if there are pending notifications, false otherwise.</returns>
    private bool AreTherePendingNotifications()
    {
        // Check if there are any pending notifications in the order list
        return _pendingNotificationsOrder.Count >= 1;
    }
}