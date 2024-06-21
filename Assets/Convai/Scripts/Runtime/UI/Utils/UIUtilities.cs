using TMPro;
using UnityEngine.UI;

namespace Convai.Scripts.Utils
{
    public class UIUtilities
    {
        /// <summary>
        ///         Checks and return if any input field is focused or not
        /// </summary>
        /// <returns></returns>
        public static bool IsAnyInputFieldFocused()
        {
            foreach (Selectable selectable in Selectable.allSelectablesArray)
            {
                switch (selectable)
                {
                    case InputField { isFocused: true }:
                    case TMP_InputField { isFocused: true }:
                        return true;
                }
            }
            return false;
        }
    }
}
