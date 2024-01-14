using System.Collections;
using System.Text.RegularExpressions;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    // TODO: Change URL to point to the blinking script documentation after it is created
    /// <summary>
    ///     Controls the blinking behavior of a character model in Unity.
    /// </summary>
    /// <remarks>
    ///     Instructions to find the index of left / right eyelids in BlendShapes:
    ///     <list type="bullet">
    ///         <item>
    ///             <description>Select your character model in the scene which has the SkinnedMeshRenderer component.</description>
    ///         </item>
    ///         <item>
    ///             <description>Look for the blend shapes in the SkinnedMeshRenderer component in the Inspector window.</description>
    ///         </item>
    ///         <item>
    ///             <description>
    ///                 The count (from 0) of blend shape until "EyeBlink_L" or similar is the index of the lef
    ///                 eyelid.
    ///             </description>
    ///         </item>
    ///         <item>
    ///             <description>
    ///                 The count (from 0) of blend shape until "EyeBlink_R" or similar is the index of the right
    ///                 eyelid.
    ///             </description>
    ///         </item>
    ///     </list>
    /// </remarks>
    [DisallowMultipleComponent]
    [AddComponentMenu("Convai/Character Blinking")]
    [HelpURL("https://docs.convai.com/api-docs/plugins-and-integrations/unity-plugin/scripts-overview")]
    public class ConvaiBlinkingHandler : MonoBehaviour
    {
        [SerializeField] [Tooltip("The SkinnedMeshRenderer for the character's face")]
        private SkinnedMeshRenderer faceSkinnedMeshRenderer;

        [SerializeField] [Tooltip("The index of the left eyelid blend shape in the SkinnedMeshRenderer")]
        private int indexOfLeftEyelid = -1;

        [SerializeField] [Tooltip("The index of the right eyelid blend shape in the SkinnedMeshRenderer")]
        private int indexOfRightEyelid = -1;

        [SerializeField]
        [Tooltip("The minimum amount of time, in seconds, for a blink. Positive values only.")]
        [Range(0.1f, 1f)]
        private float minBlinkDuration = 0.2f;

        [SerializeField]
        [Tooltip(
            "The maximum amount of time, in seconds, for a blink. Must be greater than the minimum blink duration.")]
        [Range(0.1f, 1f)]
        private float maxBlinkDuration = 0.3f;

        [SerializeField]
        [Tooltip("The minimum amount of time, in seconds, between blinks. Positive values only.")]
        [Range(1f, 10f)]
        private float minBlinkInterval = 2;

        [SerializeField]
        [Tooltip(
            "The maximum amount of time, in seconds, between blinks. Must be greater than the minimum blink interval.")]
        [Range(1f, 10f)]
        private float maxBlinkInterval = 3;

        /// <summary>
        ///     Initializes the settings for eyelid blinking on a character's SkinnedMeshRenderer blend shapes.
        /// </summary>
        /// <remarks>
        ///     This method executes the following sequence of operations:
        ///     <list type="bullet">
        ///         <item>
        ///             <description>
        ///                 Checks if the SkinnedMeshRenderer is associated with the character's face. If it is not found,
        ///                 it logs an error and returns.
        ///             </description>
        ///         </item>
        ///         <item>
        ///             <description>
        ///                 If the indices of the left and right eyelids are not set (i.e., they are -1), it iterates over
        ///                 the blend shapes of the SkinnedMeshRenderer to find these indices. It uses regex to match blend shapes'
        ///                 names, looking for "eye" and "blink" in combination with either "_l" for left or "_r" for right
        ///                 indicators. The appropriate indices found are stored in PlayerPrefs for caching purposes.
        ///             </description>
        ///         </item>
        ///     </list>
        /// </remarks>
        private void Start()
        {
            string npcName = GetComponent<ConvaiNPC>().characterName; // fetch NPC name from ConvaiNPC script
            string leftBlinkKey = npcName + "LeftEyelid";
            string rightBlinkKey = npcName + "RightEyelid";

            indexOfLeftEyelid = PlayerPrefs.GetInt(leftBlinkKey, -1);
            indexOfRightEyelid = PlayerPrefs.GetInt(rightBlinkKey, -1);

            faceSkinnedMeshRenderer = GetSkinnedMeshRendererWithRegex(transform);
            if (faceSkinnedMeshRenderer != null)
            {
                // If we couldn't retrieve the indices from cache, we search for them in our mesh
                if (indexOfLeftEyelid == -1 || indexOfRightEyelid == -1)
                {
                    for (int i = 0; i < faceSkinnedMeshRenderer.sharedMesh.blendShapeCount; i++)
                    {
                        string blendShapeName = faceSkinnedMeshRenderer.sharedMesh.GetBlendShapeName(i).ToLower();
                        if (indexOfLeftEyelid == -1 && Regex.IsMatch(blendShapeName, @"(eye).*(blink).*(l|left)"))
                        {
                            indexOfLeftEyelid = i;
                            PlayerPrefs.SetInt(leftBlinkKey, i);
                        }
                        else if (indexOfRightEyelid == -1 &&
                                 Regex.IsMatch(blendShapeName, @"(eye).*(blink).*(r|right)"))
                        {
                            indexOfRightEyelid = i;
                            PlayerPrefs.SetInt(rightBlinkKey, i);
                        }
                    }

                    if (indexOfLeftEyelid == -1 || indexOfRightEyelid == -1)
                    {
                        Logger.Error("Left and/or Right eyelid blend shapes not found!", Logger.LogCategory.Character);
                        return;
                    }
                }

                indexOfLeftEyelid = PlayerPrefs.GetInt(leftBlinkKey, -1);
                indexOfRightEyelid = PlayerPrefs.GetInt(rightBlinkKey, -1);

                if (indexOfLeftEyelid == -1 || indexOfRightEyelid == -1)
                {
                    for (int i = 0; i < faceSkinnedMeshRenderer.sharedMesh.blendShapeCount; i++)
                    {
                        string blendShapeName = faceSkinnedMeshRenderer.sharedMesh.GetBlendShapeName(i).ToLower();
                        if (indexOfLeftEyelid == -1 && Regex.IsMatch(blendShapeName, @"(eye).*(blink).*(l|left)"))
                        {
                            indexOfLeftEyelid = i;
                            PlayerPrefs.SetInt(leftBlinkKey, i);
                        }
                        else if (indexOfRightEyelid == -1 &&
                                 Regex.IsMatch(blendShapeName, @"(eye).*(blink).*(r|right)"))
                        {
                            indexOfRightEyelid = i;
                            PlayerPrefs.SetInt(rightBlinkKey, i);
                        }
                    }

                    if (indexOfLeftEyelid == -1 || indexOfRightEyelid == -1)
                    {
                        Logger.Error("Left and/or Right eyelid blend shapes not found!", Logger.LogCategory.Character);
                        return;
                    }
                }
            }
            else
            {
                Logger.Error("No SkinnedMeshRenderer found with matching name.", Logger.LogCategory.Character);
            }

            StartCoroutine(BlinkCoroutine());
        }

        private void OnValidate()
        {
            maxBlinkDuration = Mathf.Max(minBlinkDuration, maxBlinkDuration);
            maxBlinkInterval = Mathf.Max(minBlinkInterval, maxBlinkInterval);
        }

        private SkinnedMeshRenderer GetSkinnedMeshRendererWithRegex(Transform parentTransform)
        {
            SkinnedMeshRenderer findFaceSkinnedMeshRenderer = null;
            Regex regexPattern = new("(.*_Head|CC_Base_Body)");

            foreach (Transform child in parentTransform)
                if (regexPattern.IsMatch(child.name))
                {
                    findFaceSkinnedMeshRenderer = child.GetComponent<SkinnedMeshRenderer>();

                    if (findFaceSkinnedMeshRenderer != null) break;
                }

            return findFaceSkinnedMeshRenderer;
        }

        /// <summary>
        ///     Coroutine that controls the blinking behavior of the character.
        /// </summary>
        /// <remarks>
        ///     This coroutine is designed to perform a sequence of blinking actions where it:
        ///     <list type="bullet">
        ///         <item>
        ///             <description>Closes the eyes smoothly over half of the defined 'blinkDuration'</description>
        ///         </item>
        ///         <item>
        ///             <description>Waits for the defined 'blinkDuration'</description>
        ///         </item>
        ///         <item>
        ///             <description>Opens the eyes smoothly over half of the defined 'blinkDuration'</description>
        ///         </item>
        ///         <item>
        ///             <description>Waits for a randomized interval time before repeating the blinking process</description>
        ///         </item>
        ///     </list>
        /// </remarks>
        /// <returns>Enumerator to control the sequence of this coroutine</returns>
        private IEnumerator BlinkCoroutine()
        {
            while (true)
            {
                float blinkDuration = Random.Range(minBlinkDuration, maxBlinkDuration);
                float blinkInterval = Random.Range(minBlinkInterval, maxBlinkInterval);

                // Blink the character's eyes over the course of the blinkDuration
                for (float t = 0.0f; t < blinkDuration; t += Time.deltaTime)
                {
                    float normalizedTime = t / blinkDuration;
                    SetEyelidsBlendShapeWeight(100 *
                                               normalizedTime); // Increase the weight of the blend shape to affect the character's model
                    yield return null;
                }

                SetEyelidsBlendShapeWeight(100);

                // Wait for blinkDuration seconds, this gives the impression of the eyelids being naturally closed
                yield return new WaitForSeconds(blinkDuration);


                // Now we 'un-blink' the character's eyes over the course of the blinkDuration

                for (float t = 0.0f; t < blinkDuration; t += Time.deltaTime)
                {
                    float normalizedTime = t / blinkDuration;
                    SetEyelidsBlendShapeWeight(100 - 100 * normalizedTime);
                    yield return null;
                }


                yield return new WaitForSeconds(blinkInterval);
            }
        }

        /// <summary>
        ///     Sets the same weight to both eyelids' blend shape.
        /// </summary>
        private void SetEyelidsBlendShapeWeight(float weight)
        {
            faceSkinnedMeshRenderer.SetBlendShapeWeight(indexOfLeftEyelid, weight);
            faceSkinnedMeshRenderer.SetBlendShapeWeight(indexOfRightEyelid, weight);
        }
    }
}