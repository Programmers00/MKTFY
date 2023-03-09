import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// scss
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";
// customed hooks
import { useValidator } from "../../../../hooks/useValidator";
// constants for regex, validationMessage
import { regex, validationMessage } from "../../../../constants";
// passwordlessStart by auth0-js
import { webAuth } from "../../../../utils/webAuth";

/** change password component */
const ChangePasswordContent = () => {
  /** initialize */
  const [showItem, setShowItem] = useState(0);
  // navigate
  const navigate = useNavigate();

  /** data */
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

  /** parameter data */
  // seding a code to email form
  const changePasswordForm = {
    connection: "Username-Password-Authentication", //"Username-Password-Authentication"
    email: email,
  };

  /** functions */
  /** click submit button => seding a code to email */
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // seding a code to email form
    webAuth.changePassword(changePasswordForm, (error, response) => {
      if (response) {
        console.log("#Success:", response);
        setShowItem(1);
      } else {
        console.log("#Fail:", error);
      }
    });
  };

  return (
    <div className={styles.ChangePasswordBox}>
      <span className={styles.title}>Change Password</span>
      {showItem === 0 ? (
        <>
          <span className={styles.subTitle}>
            Please enter your email in the field below. We will send you an
            email to reset your password.
          </span>
          <form className={styles.emailForm} onSubmit={onClickSubmit}>
            <label className={styles.emailLabel}>
              Email
              <br />
              <input
                className={styles.emailInput}
                style={
                  emailValidationMessage.length !== 0
                    ? { borderColor: variabled.mistakeRed }
                    : {}
                }
                type="text"
                value={email}
                onChange={onEmailChange}
                placeholder="Insert your email"
                autoComplete="email"
                autoFocus
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
            <br />
            <div className={styles.submitButtonBox}>
              <button
                className={styles.submitButton}
                type="submit"
                disabled={
                  email.length === 0 || emailValidationMessage.length !== 0
                    ? true
                    : false
                }
              >
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <span className={styles.subTitle}>
            A link has been sent to your email ({email}), Please check your
            email.
          </span>
          <form className={styles.emailForm} onSubmit={onClickSubmit}>
            <div className={styles.resendCodeBox}>
              <p className={styles.resendCode} onClick={() => setShowItem(0)}>
                I didn't receive the link, please send it again
              </p>
            </div>
            <div className={styles.submitButtonBox}>
              <button
                className={styles.submitButton}
                onClick={() => navigate("/")}
              >
                Confirm
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ChangePasswordContent;
