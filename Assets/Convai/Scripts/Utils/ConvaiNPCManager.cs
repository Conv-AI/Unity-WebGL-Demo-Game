using System;
using System.Collections.Generic;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    [DefaultExecutionOrder(-101)]
    public class ConvaiNPCManager : MonoBehaviour
    {
        [Tooltip("Length of the ray used for detecting NPCs.")] [SerializeField]
        private float rayLength = 2.0f;

        [Tooltip(
            "Allowable angle from the ray's direction to keep the NPC active, even if not directly hit by the ray.")]
        [SerializeField]
        private float visionConeAngle = 45f;

        [Tooltip("Reference to the currently active NPC.")] [SerializeField]
        public ConvaiNPC activeConvaiNPC;

        // Cache used to store NPC references and avoid redundant GetComponent calls.
        private readonly Dictionary<GameObject, ConvaiNPC> _npcCache = new();

        // Reference to the NPC that was last hit by the raycast.
        private ConvaiNPC _lastHitNpc;

        // Reference to the main camera used for ray casting.
        private Camera _mainCamera;

        private ConvaiNPC ActiveConvaiNPC
        {
            get => activeConvaiNPC;
            set
            {
                // If the active NPC is different, update and trigger event
                if (activeConvaiNPC != value)
                {
                    activeConvaiNPC = value;
                    OnActiveNPCChanged?.Invoke(activeConvaiNPC);
                }
            }
        }

        // Singleton instance of the NPC manager.
        public static ConvaiNPCManager Instance { get; private set; }


        private void Awake()
        {
            // Singleton pattern to ensure only one instance exists
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
        }

        private void Start()
        {
            // Initialize the reference to the main camera
            _mainCamera = Camera.main;
        }

        private void LateUpdate()
        {
            // Create a ray based on the camera's position and forward.
            Ray ray = new(_mainCamera.transform.position, _mainCamera.transform.forward);
            bool foundConvaiNPC = false;

            // Perform a raycast
            if (Physics.Raycast(ray, out RaycastHit hit, rayLength))
            {
                ConvaiNPC convaiNpc = GetConvaiNPC(hit.transform.gameObject);
                if (convaiNpc != null)
                {
                    // If an NPC was hit by the ray
                    foundConvaiNPC = true;
                    if (_lastHitNpc != convaiNpc)
                    {
                        // If the hit NPC is different from the last hit NPC
                        Logger.DebugLog($"Player is near {convaiNpc.gameObject.name}",
                            Logger.LogCategory.Character);
                        convaiNpc.IsCharacterActive = true;

                        // Deactivate the previous NPC if it's different
                        if (ActiveConvaiNPC != null && ActiveConvaiNPC != convaiNpc)
                            ActiveConvaiNPC.IsCharacterActive = false;

                        // Update the active NPC
                        ActiveConvaiNPC = convaiNpc;
                        _lastHitNpc = convaiNpc;
                    }
                }
            }

            // If no NPC was hit by the ray but there was a previously hit NPC
            if (!foundConvaiNPC && _lastHitNpc != null)
            {
                // Calculate the angle and distance to the last hit NPC
                Vector3 toLastHitNPC = _lastHitNpc.transform.position - ray.origin;
                float angleToLastHitNPC = Vector3.Angle(ray.direction, toLastHitNPC.normalized);
                float distanceToLastHitNPC = toLastHitNPC.magnitude;
                // If the angle or distance exceeds the limits
                if (angleToLastHitNPC > visionConeAngle || distanceToLastHitNPC > rayLength * 1.2f)
                {
                    // Deactivate the NPC and reset references
                    Logger.DebugLog($"Player left {_lastHitNpc.gameObject.name}", Logger.LogCategory.Character);
                    _lastHitNpc.IsCharacterActive = false;
                    ActiveConvaiNPC = null;
                    _lastHitNpc = null;
                }
            }
        }

        private void OnDrawGizmos()
        {
            if (_mainCamera == null)
                _mainCamera = Camera.main;

            if (_mainCamera == null)
                return;

            Transform cameraTransform = _mainCamera.transform;
            Vector3 rayOrigin = cameraTransform.position;
            Vector3 rayDirection = cameraTransform.forward;

            // Drawing the main ray
            Gizmos.color = Color.blue;
            Gizmos.DrawRay(rayOrigin, rayDirection.normalized * rayLength);


            if (_lastHitNpc != null)
            {
                // Drawing the arc
                int arcResolution = 50; // number of segments to use for arc
                float angleStep = 2 * visionConeAngle / arcResolution; // angle between each segment

                Vector3 previousPoint = Quaternion.AngleAxis(-visionConeAngle, cameraTransform.up) * rayDirection *
                                        rayLength;

                for (int i = 1; i <= arcResolution; i++)
                {
                    Vector3 nextPoint = Quaternion.AngleAxis(-visionConeAngle + angleStep * i, cameraTransform.up) *
                                        rayDirection * rayLength;
                    Gizmos.DrawLine(rayOrigin + previousPoint, rayOrigin + nextPoint);
                    previousPoint = nextPoint;
                }

                Quaternion leftRotation = Quaternion.AngleAxis(-visionConeAngle, cameraTransform.up);
                Quaternion rightRotation = Quaternion.AngleAxis(visionConeAngle, cameraTransform.up);

                Vector3 leftDirection = leftRotation * rayDirection;
                Vector3 rightDirection = rightRotation * rayDirection;

                Gizmos.color = Color.yellow;
                Gizmos.DrawLine(rayOrigin, rayOrigin + leftDirection.normalized * rayLength);
                Gizmos.DrawLine(rayOrigin, rayOrigin + rightDirection.normalized * rayLength);
            }
        }


        // Event that's triggered when the active NPC changes
        public event Action<ConvaiNPC> OnActiveNPCChanged;

        private ConvaiNPC GetConvaiNPC(GameObject obj)
        {
            // Get the NPC from the cache or from the object's components
            if (_npcCache.TryGetValue(obj, out ConvaiNPC npc))
                return npc;

            npc = obj.GetComponent<ConvaiNPC>();
            if (npc != null)
                _npcCache[obj] = npc;

            return npc;
        }

        public ConvaiNPC GetActiveConvaiNPC()
        {
            return activeConvaiNPC;
        }
    }
}