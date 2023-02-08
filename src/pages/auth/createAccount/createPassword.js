import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../styles/_variabled.scss";
// css styles
import styles from "./createPassword.module.scss";
// wrapper component
import Modal from "../../../components/modal";
// navigate
import { useNavigate } from "react-router-dom";
// lottieFile
import LottieIcon from "../../../components/lottieIcon";
import { Link } from "react-router-dom";

/** CreatePassword */
const CreatePassword = () => {
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // eye icon for password confirm visibility
  const [passwordConfirmInputType, setPasswordConfirmInputType] =
    useState("password");
  // lottie show true when login success
  const [showLottie, setShowLottie] = useState(false);
  // check box checked or not
  const [isChecked, setIsChecked] = useState(false);
  // navigate
  const navigate = useNavigate();
  // // response data
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  /** click submit button => call api*/
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // request submit
    // const state = await getCreatePassword(requestCreatePasswordApi);
    // save state
    // setState(state);
  };
  // when response success, go to useMain("/auth/login") page
  // submit success => isAuthenticated :true
  // useEffect(() => {
  //   if (!loading && data?.status === 200) {
  //     // show lottie
  //     setShowLottie(true);
  //     // after 2seconds
  //     setTimeout(() => {
  //       // go userMain page
  //       navigate("/auth/login");
  //       // unshow lottie(return default value:false)
  //       setShowLottie(false);
  //     }, 2000);
  //   }
  // }, [data?.status]);

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

  return !showLottie ? (
    <Modal onClickBackButton={() => navigate("/auth/createAccount")}>
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
                src={require(`../../../assets/icons/${
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
                src={require(`../../../assets/icons/${
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
                src={require(`../../../assets/icons/${
                  password.length > 5 ? "checkConfirm" : "check"
                }.png`)}
              />
              At least 6 characters
            </div>
            <div className={styles.validation}>
              <img
                alt="check"
                className={styles.checkIcon}
                src={require(`../../../assets/icons/${
                  /[A-Z]/.test(password) ? "checkConfirm" : "check"
                }.png`)}
              />
              1 Uppercase
            </div>
            <div className={styles.validation}>
              <img
                alt="check"
                className={styles.checkIcon}
                src={require(`../../../assets/icons/${
                  /\d/.test(password) ? "checkConfirm" : "check"
                }.png`)}
              />
              1 Number
            </div>
          </div>
          <div className={styles.checkBox}>
            <img
              alt="check"
              className={styles.checkBoxIcon}
              src={require(`../../../assets/icons/${
                isChecked ? "checkBox" : "blankBox"
              }.png`)}
              onClick={() => setIsChecked((prev) => !prev)}
            />
            <div className={styles.text}>
              <span>By checking this box, you agree to our</span>{" "}
              <span className={styles.hilightText}>
                <Link to="/auth/termsOfService">Terms of Service</Link>
              </span>{" "}
              and{" "}
              <span className={styles.hilightText}>
                <Link to="/auth/privacyPolicy">our Privacy Policy</Link>
              </span>
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
                /\d/.test(password) &&
                isChecked === true
                  ? false
                  : true
              }
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </Modal>
  ) : (
    <LottieIcon title="Password succesfully reset!" />
  );
};

export default CreatePassword;
