// react
import { useState } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// customed hooks
import { useValidator } from "../../../../hooks/useValidator";
// constants for regex, validationMessage
import { regex, validationMessage } from "../../../../constants";

/** contact us content component */
const ContactUsContent = () => {
  /** initialize */
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // validation data for email
  const validation = {
    // regex
    regex: regex.email,
    // validation error messagevalidation
    message: validationMessage.email,
  };

  /** hooks */
  // useValidator hook for email
  const {
    value: email,
    onChange: onEmailChange,
    validationMessage: emailValidationMessage,
  } = useValidator("", "", validation);
  // contact us from for submit
  const contactUsForm = {
    name,
    email,
    message,
  };
  /**functions */
  /** submit function */
  const onClickSubmit = async (event) => {
    event.preventDefault();
    console.log("#contactUsForm:", contactUsForm);
    setName("");
    setMessage("");
    onEmailChange("");
  };

  return (
    <div className={styles.contentBox}>
      <span className={styles.contentTitle}>Contact us</span>
      <form className={styles.form} onSubmit={onClickSubmit}>
        <label className={styles.label}>
          Name
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            autoFocus
            maxLength={320}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Email
          <br />
          <input
            className={styles.input}
            style={
              emailValidationMessage.length !== 0
                ? { borderColor: variabled.red }
                : {}
            }
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder="Your email"
            autoComplete="email"
            maxLength={320}
          />
          <span className={styles.validationWarningBox}>
            <div className={styles.validationWarning}>
              {error ? "Invalid email" : ""}
            </div>
            <div className={styles.validationWarning}>
              {emailValidationMessage}
            </div>
          </span>
        </label>
        <label className={styles.label}>
          Message
          <textarea
            className={styles.textArea}
            type="text"
            placeholder="Your message"
            maxLength={320}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            type="submit"
            disabled={
              email.length === 0 ||
              emailValidationMessage.length !== 0 ||
              name.length === 0 ||
              message.length === 0
                ? true
                : false
            }
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsContent;
