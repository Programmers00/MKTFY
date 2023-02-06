import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../styles/_variabled.scss";
import styles from "./forgotPassword.module.scss";
// custom api => processApi
import { getForgotPassword } from "../../../api/forgotPassword";
// wrapper component
import Modal from "../../../components/modal";
// navigate
import { useNavigate } from "react-router-dom";
// customed hooks
import { useValidator } from "../../../hooks/useValidator";
// constants
import { regex, validationMessage } from "../../../constants";

/** ForgtPassword */
const ForgtPassword = () => {
  // navigate
  const navigate = useNavigate();
  // email input options
  // -> validation
  const validation = {
    // regex
    regex: regex.email,
    // validation error messagevalidation
    message: validationMessage.email,
  };
  // response data
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  // useValidator hook
  const {
    value: email,
    onChange: onEmailChange,
    validationMessage: emailValidationMessage,
  } = useValidator("", "", validation);

  /** request data for api */
  const requestForgotPasswordApi = {
    url: "https://icanhazdadjoke.com",
    params: { email: email },
    method: "get",
    headers: { Accept: "application/json" },
  };

  /** click submit button => call api*/
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // request submit
    const state = await getForgotPassword(requestForgotPasswordApi);
    // save state
    setState(state);
  };

  // when response success, show lottie icons after 2 seconds go to useMain("/") page
  // submit success => isAuthenticated :true
  useEffect(() => {
    if (!state?.loading && state?.data?.status === 200) {
      // go userMain page
      navigate("/auth/resetPassword");
    }
  }, [state?.data?.status]);

  return (
    <Modal onClickBackButton={() => navigate("/auth/login")}>
      <div className={styles.ForgtPasswordBox}>
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
                  ? { borderColor: variabled.red }
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
                {state?.error ? "Invalid email" : ""}
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

export default ForgtPassword;
