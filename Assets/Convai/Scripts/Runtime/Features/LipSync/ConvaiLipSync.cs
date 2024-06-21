using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using UnityEngine;

namespace Convai.Scripts.Utils
{
    // Simplified VisemesData class
    [Serializable]
    public class VisemesData
    {
        [JsonProperty("visemes")] public Viseme Visemes;

        public override bool Equals(object obj)
        {
            return obj is VisemesData data &&
                   EqualityComparer<Viseme>.Default.Equals(Visemes, data.Visemes);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Visemes);
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }
    }

    [Serializable]
    public class Viseme
    {
        [JsonProperty("sil")] public float Sil;
        [JsonProperty("pp")] public float Pp;
        [JsonProperty("ff")] public float Ff;
        [JsonProperty("th")] public float Th;
        [JsonProperty("dd")] public float Dd;
        [JsonProperty("kk")] public float Kk;
        [JsonProperty("ch")] public float Ch;
        [JsonProperty("ss")] public float Ss;
        [JsonProperty("nn")] public float Nn;
        [JsonProperty("rr")] public float Rr;
        [JsonProperty("aa")] public float Aa;
        [JsonProperty("e")] public float E;
        [JsonProperty("ih")] public float Ih;
        [JsonProperty("oh")] public float Oh;
        [JsonProperty("ou")] public float Ou;

        public override bool Equals(object obj)
        {
            return obj is Viseme viseme &&
                   Sil == viseme.Sil &&
                   Pp == viseme.Pp &&
                   Ff == viseme.Ff &&
                   Th == viseme.Th &&
                   Dd == viseme.Dd &&
                   Kk == viseme.Kk &&
                   Ch == viseme.Ch &&
                   Ss == viseme.Ss &&
                   Nn == viseme.Nn &&
                   Rr == viseme.Rr &&
                   Aa == viseme.Aa &&
                   E == viseme.E &&
                   Ih == viseme.Ih &&
                   Oh == viseme.Oh &&
                   Ou == viseme.Ou;
        }

        public void DebugVisemes()
        {
            Debug.Log("Sil: " + Sil);
            Debug.Log("Pp: " + Pp);
            Debug.Log("Ff: " + Ff);
            Debug.Log("Th: " + Th);
            Debug.Log("Dd: " + Dd);
            Debug.Log("Kk: " + Kk);
            Debug.Log("Ch: " + Ch);
            Debug.Log("Ss: " + Ss);
            Debug.Log("Nn: " + Nn);
            Debug.Log("Rr: " + Rr);
            Debug.Log("Aa: " + Aa);
            Debug.Log("E: " + E);
            Debug.Log("Ih: " + Ih);
            Debug.Log("Oh: " + Oh);
            Debug.Log("Ou: " + Ou);
        }

        public override int GetHashCode()
        {
            int hashFirstEight = HashCode.Combine(Sil, Pp, Ff, Th, Dd, Kk, Ch, Ss);
            return HashCode.Combine(hashFirstEight, Nn, Rr, Aa, E, Ih, Oh, Ou);
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        public static bool operator ==(Viseme left, Viseme right)
        {
            return EqualityComparer<Viseme>.Default.Equals(left, right);
        }

        public static bool operator !=(Viseme left, Viseme right)
        {
            return !(left == right);
        }
    }

    public class ConvaiLipSync : MonoBehaviour
    {
        public enum LipSyncBlendshapeType
        {
            None, // Default Value
            OVR, // Oculus 
            ReallusionPlus // Reallusion Extended
        }

        private const float FRAMERATE = 1f / 100f;
        //[HideInInspector] public FaceModel faceModelType = FaceModel.OvrModelName;

        [Tooltip(
            "The type of facial blend-shapes in the character. Select OVR for Oculus and ReallusionPlus for Reallusion Extended visemes. ARKit coming soon.")]
        public LipSyncBlendshapeType BlendshapeType = LipSyncBlendshapeType.OVR;

        [Tooltip("Skinned Mesh Renderer Component for the head of the character.")]
        public SkinnedMeshRenderer HeadSkinnedMeshRenderer;

        [Tooltip("Skinned Mesh Renderer Component for the teeth of the character, if available. Leave empty if not.")]
        public SkinnedMeshRenderer TeethSkinnedMeshRenderer;

        [Tooltip("Skinned Mesh Renderer Component for the tongue of the character, if available. Leave empty if not.")]
        public SkinnedMeshRenderer TongueSkinnedMeshRenderer;

        [Tooltip("Game object with the bone of the jaw for the character, if available. Leave empty if not.")]
        public GameObject jawBone;

        [Tooltip("Game object with the bone of the tongue for the character, if available. Leave empty if not.")]
        public GameObject tongueBone; // even though actually tongue doesn't have a bone

        [Tooltip("Set a custom position for the tongue bone so that it looks natural.")] [SerializeField]
        private Vector3 tongueBoneOffset = new(-0.01f, 0.015f, 0f);

        [Tooltip("The index of the first blendshape that will be manipulated.")]
        public int firstIndex;

        private ConvaiNPC _convaiNPC;

        private Viseme _frame;

        public List<List<VisemesData>> FaceDataList = new List<List<VisemesData>>();

        /// <summary>
        ///     This function will automatically set any of the unassigned skinned mesh renderers
        ///     to appropriate values using regex based functions.
        ///     It also invokes the LipSyncCharacter() function every one hundredth of a second.
        /// </summary>
        private void Start()
        {
            // regex search for SkinnedMeshRenderers: head, teeth, tongue
            if (HeadSkinnedMeshRenderer == null)
                HeadSkinnedMeshRenderer = GetHeadSkinnedMeshRendererWithRegex(transform);
            if (TeethSkinnedMeshRenderer == null)
                TeethSkinnedMeshRenderer = GetTeethSkinnedMeshRendererWithRegex(transform);
            if (TongueSkinnedMeshRenderer == null)
                TongueSkinnedMeshRenderer = GetTongueSkinnedMeshRendererWithRegex(transform);

            // call the LipSyncCharacter() with the frame rate set
            InvokeRepeating(nameof(LipSyncCharacter), 0f, FRAMERATE);

            _convaiNPC = GetComponent<ConvaiNPC>();
        }

        /// <summary>
        ///     This function will adjust the position of the tongue according to the tongueBoneOffset value.
        /// </summary>
        private void Update()
        {
            if (tongueBone != null) tongueBone.transform.localPosition = tongueBoneOffset;
        }

        private void OnApplicationQuit()
        {
            StopLipSync();
        }

        /// <summary>
        ///     This function finds the Head skinned mesh renderer components, if present,
        ///     in the children of the parentTransform using regex.
        /// </summary>
        /// <param name="parentTransform">The parent transform whose children are searched.</param>
        /// <returns>The SkinnedMeshRenderer component of the Head, if found; otherwise, null.</returns>
        private SkinnedMeshRenderer GetHeadSkinnedMeshRendererWithRegex(Transform parentTransform)
        {
            // Initialize a variable to store the found SkinnedMeshRenderer.
            SkinnedMeshRenderer findFaceSkinnedMeshRenderer = null;

            // Define a regular expression pattern for matching child object names.
            Regex regexPattern = new("(.*_Head|CC_Base_Body)");

            // Iterate through each child of the parentTransform.
            foreach (Transform child in parentTransform)
                // Check if the child's name matches the regex pattern.
                if (regexPattern.IsMatch(child.name))
                {
                    // If a match is found, get the SkinnedMeshRenderer component of the child.
                    findFaceSkinnedMeshRenderer = child.GetComponent<SkinnedMeshRenderer>();

                    // If a SkinnedMeshRenderer is found, break out of the loop.
                    if (findFaceSkinnedMeshRenderer != null) break;
                }

            // Return the found SkinnedMeshRenderer (or null if none is found).
            return findFaceSkinnedMeshRenderer;
        }


        /// <summary>
        ///     This function finds the Teeth skinned mesh renderer components, if present,
        ///     in the children of the parentTransform using regex.
        /// </summary>
        /// <param name="parentTransform">The parent transform whose children are searched.</param>
        /// <returns>The SkinnedMeshRenderer component of the Teeth, if found; otherwise, null.</returns>
        private SkinnedMeshRenderer GetTeethSkinnedMeshRendererWithRegex(Transform parentTransform)
        {
            // Initialize a variable to store the found SkinnedMeshRenderer for teeth.
            SkinnedMeshRenderer findTeethSkinnedMeshRenderer = null;

            // Define a regular expression pattern for matching child object names.
            Regex regexPattern = new("(.*_Teeth|CC_Base_Body)");

            // Iterate through each child of the parentTransform.
            foreach (Transform child in parentTransform)
                // Check if the child's name matches the regex pattern.
                if (regexPattern.IsMatch(child.name))
                {
                    // If a match is found, get the SkinnedMeshRenderer component of the child.
                    findTeethSkinnedMeshRenderer = child.GetComponent<SkinnedMeshRenderer>();

                    // If a SkinnedMeshRenderer is found, break out of the loop.
                    if (findTeethSkinnedMeshRenderer != null) break;
                }

            // Return the found SkinnedMeshRenderer for teeth (or null if none is found).
            return findTeethSkinnedMeshRenderer;
        }


        /// <summary>
        ///     This function finds the Tongue skinned mesh renderer components, if present,
        ///     in the children of the parentTransform using regex.
        /// </summary>
        /// <param name="parentTransform">The parent transform whose children are searched.</param>
        /// <returns>The SkinnedMeshRenderer component of the Tongue, if found; otherwise, null.</returns>
        private SkinnedMeshRenderer GetTongueSkinnedMeshRendererWithRegex(Transform parentTransform)
        {
            // Initialize a variable to store the found SkinnedMeshRenderer for the tongue.
            SkinnedMeshRenderer findTongueSkinnedMeshRenderer = null;

            // Define a regular expression pattern for matching child object names.
            Regex regexPattern = new("(.*_Tongue|CC_Base_Body)");

            // Iterate through each child of the parentTransform.
            foreach (Transform child in parentTransform)
                // Check if the child's name matches the regex pattern.
                if (regexPattern.IsMatch(child.name))
                {
                    // If a match is found, get the SkinnedMeshRenderer component of the child.
                    findTongueSkinnedMeshRenderer = child.GetComponent<SkinnedMeshRenderer>();

                    // If a SkinnedMeshRenderer is found, break out of the loop.
                    if (findTongueSkinnedMeshRenderer != null) break;
                }

            // Return the found SkinnedMeshRenderer for the tongue (or null if none is found).
            return findTongueSkinnedMeshRenderer;
        }

        /// <summary>
        ///     This method performs lip sync animation for the character.
        /// </summary>
        public void LipSyncCharacter()
        {
            // Check if there are items in the faceDataList and the character is talking.

            if (FaceDataList.Count > 0 && FaceDataList != null && _convaiNPC.isCharacterTalking)
            {
                // Dequeue the next frame of visemes data from the faceDataList.
                if (FaceDataList[0].Count > 0 && FaceDataList[0] != null)
                {
                    _frame = FaceDataList[0][0].Visemes;
                    FaceDataList[0].RemoveAt(0);
                    Logger.DebugLog(_frame, Logger.LogCategory.LipSync);

                    // Check if the dequeued frame is not null.
                    if (_frame != null)
                        // Check if the frame represents silence (-2 is a placeholder for silence).
                        if (_frame.Sil != -2)
                        {
                            float weight;
                            float alpha = 1.0f;

                            // Check the BlendshapeType to determine the lip sync behavior.
                            if (BlendshapeType == LipSyncBlendshapeType.OVR)
                            {
                                float weightMultiplier = 1f;

                                // Set blend shape weights for various visemes on the HeadSkinnedMeshRenderer.
                                // Each viseme corresponds to a specific blend shape index.
                                // The weight is determined by multiplying the viseme value with a weight multiplier.
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(0 + firstIndex,
                                    _frame.Sil * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex,
                                    _frame.Pp * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex,
                                    _frame.Ff * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex,
                                    _frame.Th * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(4 + firstIndex,
                                    _frame.Dd * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(5 + firstIndex,
                                    _frame.Kk * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(6 + firstIndex,
                                    _frame.Ch * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex,
                                    _frame.Ss * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(8 + firstIndex,
                                    _frame.Nn * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(9 + firstIndex,
                                    _frame.Rr * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(10 + firstIndex,
                                    _frame.Aa * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(11 + firstIndex,
                                    _frame.E * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(12 + firstIndex,
                                    _frame.Ih * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(13 + firstIndex,
                                    _frame.Oh * weightMultiplier);
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(14 + firstIndex,
                                    _frame.Ou * weightMultiplier);

                                // Similar settings for TeethSkinnedMeshRenderer.
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(0 + firstIndex,
                                    _frame.Sil * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex,
                                    _frame.Pp * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex,
                                    _frame.Ff * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex,
                                    _frame.Th * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(4 + firstIndex,
                                    _frame.Dd * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(5 + firstIndex,
                                    _frame.Kk * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(6 + firstIndex,
                                    _frame.Ch * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex,
                                    _frame.Ss * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(8 + firstIndex,
                                    _frame.Nn * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(9 + firstIndex,
                                    _frame.Rr * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(10 + firstIndex,
                                    _frame.Aa * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(11 + firstIndex,
                                    _frame.E * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(12 + firstIndex,
                                    _frame.Ih * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(13 + firstIndex,
                                    _frame.Oh * weightMultiplier);
                                TeethSkinnedMeshRenderer.SetBlendShapeWeight(14 + firstIndex,
                                    _frame.Ou * weightMultiplier);
                            }

                            else if (BlendshapeType == LipSyncBlendshapeType.ReallusionPlus)
                            {
                                float weightMultiplier = 100f;

                                jawBone.transform.localEulerAngles = new Vector3(0.0f, 0.0f, -90.0f);
                                tongueBone.transform.localEulerAngles = new Vector3(0.0f, 0.0f, -5.0f);

                                // Set blend shape weights for various visemes on the HeadSkinnedMeshRenderer.
                                // PP
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex,
                                    _frame.Pp * weight * alpha * weightMultiplier); // V_Explosive

                                // FF
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex,
                                    _frame.Ff * weight * alpha * weightMultiplier); // V_Dental_Lip

                                // TH
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Th * weight * alpha * weightMultiplier); // Mouth_Drop_Lower

                                // DD
                                weight = 0.2f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Dd * weight / 0.7f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Dd * weight / 0.7f * alpha * weightMultiplier); // Mouth_Shrug_Upper

                                // KK
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Kk * weight / 1.5f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Kk * weight / 1.5f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // CH
                                weight = 0.7f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Ch * weight / 2.7f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Ch * weight / 2.7f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex,
                                    _frame.Ch * weight / 2.7f * alpha * weightMultiplier); // V_Lip_Open

                                // SS
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Ss * weight / 1.5f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Ss * weight / 1.5f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // NN
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Nn * weight / 2.0f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Nn * weight / 2.0f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // RR
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Rr * weight / 0.9f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // AA
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Aa * weight / 2.0f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // EE
                                weight = 0.7f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.E * weight * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 0.3f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.E * weight * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // II
                                weight = 0.7f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex,
                                    _frame.Ih * weight / 1.2f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(117)); // Mouth_Drop_Lower
                                weight = 0.5f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex,
                                    _frame.Ih * weight / 1.2f * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(114)); // Mouth_Shrug_Upper

                                // OO
                                weight = 1.2f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex,
                                    _frame.Oh * weight * alpha * weightMultiplier); // V_Tight_O

                                // UU
                                weight = 1.0f;
                                HeadSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex,
                                    _frame.Ou * weight * alpha * weightMultiplier
                                    + HeadSkinnedMeshRenderer.GetBlendShapeWeight(3)); // V_Tight_O

                                // Adjust the jaw and tongue bone rotations based on the specific viseme values.
                                jawBone.transform.localEulerAngles
                                    = new Vector3(0.0f, 0.0f, -90.0f - (
                                            0.2f * _frame.Th
                                            + 0.1f * _frame.Dd
                                            + 0.5f * _frame.Kk
                                            + 0.2f * _frame.Nn
                                            + 0.2f * _frame.Rr
                                            + 1.0f * _frame.Aa
                                            + 0.2f * _frame.E
                                            + 0.3f * _frame.Ih
                                            + 0.8f * _frame.Oh
                                            + 0.3f * _frame.Ou
                                        )
                                        / (0.2f + 0.1f + 0.5f + 0.2f + 0.2f + 1.0f + 0.2f + 0.3f + 0.8f + 0.3f)
                                        * 30f);

                                // Tongue Bone
                                tongueBone.transform.localEulerAngles
                                    = new Vector3(0.0f, 0.0f, (
                                            0.1f * _frame.Th
                                            + 0.2f * _frame.Nn
                                            + 0.15f * _frame.Rr
                                        )
                                        / (0.1f + 0.2f + 0.15f)
                                        * 80f - 5f);
                            }
                        }
                }
                else
                {
                    FaceDataList.RemoveAt(0);
                }
            }
            else
            {
                // Handle the case when there are no items in the faceDataList or the character is not talking.
                // Reset blend shape weights, bone rotations, or any other relevant parameters.

                if (BlendshapeType == LipSyncBlendshapeType.OVR)
                {
                    float weightMultiplier = 0f;

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(0 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(4 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(5 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(6 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(8 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(9 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(10 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(11 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(12 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(13 + firstIndex, weightMultiplier);
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(14 + firstIndex, weightMultiplier);

                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(0 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(4 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(5 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(6 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(8 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(9 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(10 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(11 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(12 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(13 + firstIndex, weightMultiplier);
                    TeethSkinnedMeshRenderer.SetBlendShapeWeight(14 + firstIndex, weightMultiplier);
                }

                else if (BlendshapeType == LipSyncBlendshapeType.ReallusionPlus)
                {
                    jawBone.transform.localEulerAngles = new Vector3(0.0f, 0.0f, -90.0f);
                    tongueBone.transform.localEulerAngles = new Vector3(0.0f, 0.0f, -5.0f);

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(1 + firstIndex, 0f); // V_Explosive

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex, 0f); // V_Dental_Lip

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(117 + firstIndex, 0f); // Mouth_Drop_Lower

                    TongueSkinnedMeshRenderer.SetBlendShapeWeight(2 + firstIndex, 0f); // V_Tongue_Out

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(114 + firstIndex, 0f); // Mouth_Shrug_Upper

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(7 + firstIndex, 0f); // V_Lip_Open

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(76 + firstIndex, 0f); // Mouth_Press_L

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(77 + firstIndex, 0f); // Mouth_Press_R

                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(3 + firstIndex, 0f); // V_Tight_O

                    // Jaw Bone
                    jawBone.transform.localEulerAngles
                        = new Vector3(0.0f, 0.0f, -90.0f);

                    // Tongue Bone
                    tongueBone.transform.localEulerAngles
                        = new Vector3(0.0f, 0.0f, -5f);
                }
            }
        }

        public void StopLipSync()
        {
            // Clear the queue of visemes
            FaceDataList.Clear();

            // Reset any ongoing lip sync animations or processes
            // This will depend on how your lip sync is implemented.
            // For example, if you're using blend shapes, you might set all blend shape weights to 0.
            if (HeadSkinnedMeshRenderer != null)
                for (int i = 0; i < HeadSkinnedMeshRenderer.sharedMesh.blendShapeCount; i++)
                    HeadSkinnedMeshRenderer.SetBlendShapeWeight(i, 0);
        }

        private class ReallusionBlendShapes
        {
            public ReallusionBlendShapes(string name, int index)
            {
                this.name = name;
                this.index = index;
            }

            public string name { get; set; }
            public int index { get; set; }
        }
    }
}