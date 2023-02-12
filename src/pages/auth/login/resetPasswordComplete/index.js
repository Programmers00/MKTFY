import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// css styles
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/modal";
// navigate
import { useNavigate } from "react-router-dom";
// passwordlesslogin by auth0-js
import { webAuth } from "../../../../utils/webAuth";
// isAuthenticated for redux
// lottieFile
// import LottieIcon from "../../../../components/lottieIcon";

/** ResetPasswordComplete */
const ResetPasswordComplete = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // email for redux
  const email = localStorage.getItem("user_email");

  /** data */
  // password
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  // eye icon for password confirm visibility
  const [passwordConfirmInputType, setPasswordConfirmInputType] =
    useState("password");
  // checking password error message
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // lottie show true when login success
  // const [showLottie, setShowLottie] = useState(false);

  /** useEffect */
  // get and save access token
  useEffect(() => {
    //
    webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
      if (err) {
        console.error("##err", err);
      } else {
        console.log("##res", res);
        sessionStorage.setItem("id_token", res.idToken);
        sessionStorage.setItem("access_token", res.accessToken);
        sessionStorage.setItem("nonce", res.idTokenPayload.nonce);
      }
    });
  }, []);

  const changePasswordForm = {
    connection: "Username-Password-Authentication", //"Username-Password-Authentication"
    email: email,
    // accessToken: sessionStorage.getItem("access_token"),
    // password,
  };

  /** functions */
  /********************** need to change... it is for sending a new password page to email*/
  /** click submit button =>*/
  const onClickSubmit = async (event) => {
    console.log("changePasswordForm", changePasswordForm);
    event.preventDefault();
    webAuth.changePassword(changePasswordForm, (err, res) => {
      if (err) {
        console.error("##err", err);
      } else {
        console.log("res", res);
      }
    });
    webAuth.passwordlessVerify();
  };

  /** password toggle: change input type and icon */
  const onToggle = (type) => {
    if (type !== "confirm") {
      // change input type
      setPasswordInputType((prevPasswordInputType) =>
        prevPasswordInputType === "password" ? "text" : "password"
      );
      return;
    }
    // change input type
    setPasswordConfirmInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
  };

  return (
    <Modal
      onClickBackButton={() => navigate("/auth/resetPasswordVerification")}
    >
      <div className={styles.resetPasswordCompleteBox}>
        <span className={styles.title}>Reset Password?</span>
        <span className={styles.subTitle}>
          The password must have at least 6 characters and must contain 1
          uppercase and 1 number.
        </span>
        <form className={styles.resetPasswordForm} onSubmit={onClickSubmit}>
          <label
            className={styles.passwordLabel}
            style={
              password.length < 6 ||
              !/[A-Z]/.test(password) ||
              !/\d/.test(password)
                ? { color: variabled.purple }
                : {}
            }
          >
            Password
            <br />
            <div className={styles.passwordInputBox}>
              <input
                className={styles.passwordInput}
                type={passwordInputType}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Insert your password"
                autoComplete="password"
                style={
                  password.length < 6 ||
                  !/[A-Z]/.test(password) ||
                  !/\d/.test(password)
                    ? { borderColor: variabled.purple }
                    : {}
                }
              />
              <img
                alt="eye"
                className={styles.eyeIcon}
                src={require(`../../../../assets/icons/${
                  (password.length < 6 ||
                    !/[A-Z]/.test(password) ||
                    !/\d/.test(password)) &&
                  passwordInputType === "password"
                    ? "eyeSlashPurple"
                    : (password.length < 6 ||
                        !/[A-Z]/.test(password) ||
                        !/\d/.test(password)) &&
                      passwordInputType !== "password"
                    ? "eyePurple"
                    : password.length >= 5 &&
                      /[A-Z]/.test(password) &&
                      /\d/.test(password) &&
                      passwordInputType === "password"
                    ? "eyeSlash"
                    : "eye"
                }.png`)}
                onClick={() => onToggle()}
              />
            </div>
          </label>
          <br />
          <label
            className={styles.passwordLabel}
            style={
              password !== passwordConfirm ? { color: variabled.purple } : {}
            }
          >
            Password Confirm
            <br />
            <div className={styles.passwordInputBox}>
              <input
                className={styles.passwordInput}
                type={passwordConfirmInputType}
                value={passwordConfirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                placeholder="Insert your password Confirm"
                autoComplete="password"
                style={
                  password !== passwordConfirm
                    ? { borderColor: variabled.purple }
                    : {}
                }
              />
              <img
                alt="eye"
                className={styles.eyeIcon}
                src={require(`../../../../assets/icons/${
                  password !== passwordConfirm &&
                  passwordConfirmInputType === "password"
                    ? "eyeSlashPurple"
                    : password !== passwordConfirm &&
                      passwordConfirmInputType !== "password"
                    ? "eyePurple"
                    : password === passwordConfirm &&
                      passwordConfirmInputType === "password"
                    ? "eyeSlash"
                    : "eye"
                }.png`)}
                onClick={() => onToggle("confirm")}
              />
            </div>
            <span className={styles.passwordMatchWarningBox}>
              <div className={styles.passwordMatchWarning}>
                {password !== passwordConfirm ? "Password does NOT match" : ""}
              </div>
            </span>
          </label>
          <br />
          <div className={styles.validationBox}>
            <div className={styles.validation}>
              <img
                alt="check"
                className={styles.checkIcon}
                src={require(`../../../../assets/icons/${
                  password.length > 5 ? "checkConfirm" : "check"
                }.png`)}
              />
              At least 6 characters
            </div>
            <div className={styles.validation}>
              <img
                alt="check"
                className={styles.checkIcon}
                src={require(`../../../../assets/icons/${
                  /[A-Z]/.test(password) ? "checkConfirm" : "check"
                }.png`)}
              />
              1 Uppercase
            </div>
            <div className={styles.validation}>
              <img
                alt="check"
                className={styles.checkIcon}
                src={require(`../../../../assets/icons/${
                  /\d/.test(password) ? "checkConfirm" : "check"
                }.png`)}
              />
              1 Number
            </div>
          </div>
          <div className={styles.submitButtonBox}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={
                password === passwordConfirm &&
                password.length > 5 &&
                /[A-Z]/.test(password) &&
                /\d/.test(password)
                  ? false
                  : true
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

export default ResetPasswordComplete;
