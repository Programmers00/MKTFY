import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/modal";
// navigate
import { useNavigate } from "react-router-dom";
// customed hooks
import { useValidator } from "../../../../hooks/useValidator";
// constants for regex, validationMessage
import { regex, validationMessage } from "../../../../constants";
// passwordlessStart by auth0-js
import { webAuth } from "../../../../utils/webAuth";
// email for redux
import { useDispatch } from "react-redux";

/** ForgotPassword */
const ForgotPassword = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();

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
  const codeToEmailForm = {
    // is it possible to use client_secret??
    client_secret:
      "bmNX6FBTxSb6Wq9LCqEHrYCxwqpyVsL7FYj2cphbQO2A9KrlQujdwVdFqmW4OcHA",
    connection: "email",
    send: "code",
    email,
  };

  /** functions */
  /** click submit button => seding a code to email */
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // seding a code to email form
    webAuth.passwordlessStart(codeToEmailForm, (err, res) => {
      // seding a code: fail
      if (err) {
        // error => true
        setError(true);
        console.error(err);
      }
      // seding a code: success
      else {
        localStorage.setItem("user_email", email);
        // go to reset password verification page
        navigate("/auth/resetPasswordVerification");
        console.log(res);
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
