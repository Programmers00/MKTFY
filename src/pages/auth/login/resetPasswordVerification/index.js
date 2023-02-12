import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/modal";
// input code compoenent
import InputCode from "../../../../components/inputCode";
// navigate
import { useNavigate } from "react-router-dom";
// passwordlesslogin by auth0-js
import { webAuth } from "../../../../utils/webAuth";
// email for redux

/** ResetPasswordVerification */
const ResetPasswordVerification = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // redux
  const email = localStorage.getItem("user_email");

  /** data */
  // verification code
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  /** parameter data */
  const codeVerificationForm = {
    connection: "email",
    email,
    verificationCode,
    redirectUri: "http://localhost:3000/auth/resetPasswordComplete",
  };

  /** click submit button => verify the code, if success go to reset password complete page */
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // err.code => "invalid_request", "access_denied"
    webAuth.passwordlessLogin(codeVerificationForm, (err) => {
      if (err.code === "access_denied")
        console.log(
          "#err.code",
          err.code,
          "#err.error_description",
          err.error_description
        );
      setError(err.code);
    });
  };

  return (
    <Modal onClickBackButton={() => navigate("/auth/forgotPassword")}>
      <div className={styles.resetPasswordVerificationBox}>
        <span className={styles.title}>Reset Password?</span>
        <span className={styles.subTitle}>
          A code has been sent to your email {email}, Please enter the
          verification code below.
        </span>
        <form className={styles.verificationCodeForm} onSubmit={onClickSubmit}>
          <label className={styles.verificationCodeLabel}>
            Verification code
            <br />
            <div className={styles.verificationCodeInputBox}>
              {/* input code component: number only, auto curser */}
              <InputCode
                length={6}
                setVerificationCode={setVerificationCode}
                verificationCode={verificationCode}
              />
            </div>
            <span className={styles.verificationWarningBox}>
              <div className={styles.verificationWarning}>
                {error === ""
                  ? ""
                  : error === "invalid_request"
                  ? "Invalid request "
                  : "Invalid email/password"}
              </div>
            </span>
          </label>
          <br />
          <div className={styles.resendCodeBox}>
            <p
              className={styles.resendCode}
              onClick={() => navigate("/auth/forgotPassword")}
            >
              I didn’t receive the code, please send it again
            </p>
          </div>
          <br />
          <div className={styles.submitButtonBox}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={verificationCode.length !== 6 ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ResetPasswordVerification;
