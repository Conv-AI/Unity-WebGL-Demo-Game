using UnityEngine;

public class NetworkReachabilityChecker : MonoBehaviour
{
    private void Start()
    {
        // Variable to store the debug text for network reachability status
        string networkStatusDebugText = "";

        switch (Application.internetReachability)
        {
            // Check the current internet reachability status
            case NetworkReachability.NotReachable:
                // If the device is not reachable over the internet, set debug text and send a notification.
                networkStatusDebugText = "Not Reachable";
                NotificationSystemHandler.Instance.NotificationRequest(NotificationType.NetworkReachabilityIssue);
                break;
            case NetworkReachability.ReachableViaCarrierDataNetwork:
                // Reachable via mobile data network
                networkStatusDebugText = "Reachable via Carrier Data Network";
                break;
            case NetworkReachability.ReachableViaLocalAreaNetwork:
                // Reachable via local area network
                networkStatusDebugText = "Reachable via Local Area Network";
                break;
        }

        // Log the network reachability status for debugging
        Debug.Log("Network Reachability: " + networkStatusDebugText);
    }
}