import { useState, useRef, useEffect } from "react";
// styles
import styles from "./inputCode.module.scss";

/** input verificatio code: parameter: length, setVerificationCode*/
const InputCode = ({ length, setVerificationCode }) => {
  // code
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  // lastCode
  const [isLastCode, setIsLastCode] = useState(false);
  // input tags refs
  const inputs = useRef([]);

  /** work when input number: number only */
  const processInput = (e, slot) => {
    const num = e.target.value;
    //   reg
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode((prevCode) => newCode);
    //   move next focus when fill the number
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    // when slot is 5 => isLastCode is true, else false,
    if (slot === 5) {
      setIsLastCode(true);
    } else {
      setIsLastCode(false);
    }
  };
  // parent function when code changes
  useEffect(() => {
    setVerificationCode((prevCode) => code.join(""));
  }, [code]);
  /** when delete number */
  const onKeyUp = (e, slot) => {
    if (e.keyCode !== 8) return;
    if (slot === 0) return;
    const newCode = [...code];
    //   slot is not 5
    if (slot !== 5 || code[slot]) {
      newCode[slot - 1] = "";
      inputs.current[slot - 1].focus();
    }
    // slot is 5, last code is empty
    else if (slot === 5 && isLastCode === false) {
      newCode[slot - 1] = "";
      inputs.current[slot - 1].focus();
      setIsLastCode(true);
    }
    // slot is 5, last code is not empty
    else if (slot === 5 && isLastCode === true) {
      newCode[slot] = "";
      inputs.current[slot].focus();
      setIsLastCode(false);
    }
    setCode((prevCode) => newCode);
  };

  return (
    <div className={styles.codeInputs}>
      {code.map((num, idx) => {
        return (
          <div key={idx} className={styles.codeInputBox}>
            {idx !== 0 && idx % 2 === 0 && "\u00a0-\u00a0"}
            <input
              className={styles.codeInput}
              placeholder="0"
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputCode;
