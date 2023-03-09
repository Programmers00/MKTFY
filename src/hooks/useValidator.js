import { useState } from "react";

/** use validator: param(inintialVaue, limitator, validation(regex, message) return value, onChange, error */
export const useValidator = (initialValue, limitator, { regex, message }) => {
  const [value, setValue] = useState(initialValue);
  const [validationMessage, setValidationMessage] = useState("");
  const onChange = (e) => {
    // initialize when e is not object
    if (typeof e !== "object") {
      setValue(e);
      return;
    }
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    // limit function
    if (typeof limitator === "function") {
      willUpdate = limitator(value);
    }
    // validation not ok => set validation message
    if (!regex.test(value)) {
      setTimeout(() => setValidationMessage(message), 800);
    }
    // validation ok or input value length is 0 => no validation message
    if (regex.test(value) || value.length === 0) {
      setTimeout(() => setValidationMessage(""), 800);
    }
    // will update when set value is true(limitator is true)
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange, validationMessage };
};
