import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/Modal";
// navigate
import { useNavigate } from "react-router-dom";
// customed hooks
import { useValidator } from "../../../../hooks/useValidator";
// constants for regex, validationMessage
import { regex, validationMessage } from "../../../../constants";
// passwordlessStart by auth0-js
import { webAuth } from "../../../../utils/webAuth";

/** ForgotPassword */
const ForgotPassword = () => {
  /** initialize */
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
  // change password form to change email
  const changePasswordForm = {
    connection: "Username-Password-Authentication", //"Username-Password-Authentication"
    email,
  };

  /** functions */
  /** click submit button => seding change password link to email */
  const onClickSubmit = (event) => {
    event.preventDefault();
    // seding email by auth0-js
    webAuth.changePassword(changePasswordForm, (error, response) => {
      if (response) {
        // console.log("#Success:", response);
        navigate("/auth/resetPassword");
      } else {
        console.log("#Fail:", error);
      }
    });
  };

  return (
    <Modal onClickBackButton={() => navigate("/auth/login")}>
      <div className={styles.ForgotPasswordBox}>
        <span className={styles.title}>Forgot Password?</span>
        <span className={styles.subTitle}>
          It’s okay, these things happen. Please enter your email in the field
          below. We will send you an email to reset your password.
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
      </div>
    </Modal>
  );
};

export default ForgotPassword;
