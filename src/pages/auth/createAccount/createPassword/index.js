import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// css styles
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/modal";
// navigate
import { useNavigate } from "react-router-dom";
// lottieFile
import LottieIcon from "../../../../components/lottieIcon";
// link to move page
import { Link } from "react-router-dom";
// useDispatch for sending action to redux
import { useSelector, useDispatch } from "react-redux";
// webAuth from auth0-js
import { webAuth } from "../../../../utils/webAuth";
// redux actions
import { createPassword, resetSignup } from "../../../../store/actions/signup";

/** CreatePassword */
const CreatePassword = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  const signupForm = useSelector((state) => state.signup.signupForm);
  // navigate
  const navigate = useNavigate();

  /** data */
  // password
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  // eye icon for password confirm visibility
  const [passwordConfirmInputType, setPasswordConfirmInputType] =
    useState("password");
  // check password = password confirm
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // lottie show true when login success
  const [isShowLottie, setIsShowLottie] = useState(false);
  // check box checked or not
  const [isChecked, setIsChecked] = useState(false);

  /** useEffect */
  // detect password and realtime update in redux
  useEffect(() => {
    dispatch(createPassword(password));
  }, [password]);

  /** functions */
  /** click submit button => webAuth signup try */
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // webAuth sign up try with signup form from redux
    webAuth.signup(signupForm, (err, res) => {
      // signup fail: email duplicate
      if (err && err.statusCode === 400 && err.code === "invalid_signup") {
        alert("email is duplicated");
        // go userMain page
        navigate("/auth/createAccount");
      }
      // signup success
      else if (res) {
        // show lottie
        setIsShowLottie(true);
        // dispatch: remove signup form data in redux
        dispatch(resetSignup());
        // after 2seconds
        setTimeout(() => {
          // go login page
          navigate("/auth/login");
          // unshow lottie(return default value:false)
          setIsShowLottie(false);
        }, 2000);
      }
    });
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

  return !isShowLottie ? (
    <Modal onClickBackButton={() => navigate("/auth/createAccount")}>
      <div className={styles.resetPasswordCompleteBox}>
        <span className={styles.title}>Create Password</span>
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
            <span>
              Password{" "}
              {password.length === 0 ? (
                ""
              ) : password.length > 10 ? (
                <span style={{ color: variabled.green }}>Strong</span>
              ) : (
                <span style={{ color: variabled.hoverYellow }}>Weak</span>
              )}
            </span>

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
            Confirm Password
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
                {password !== passwordConfirm ? "Password does not match" : ""}
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
          <div
            className={styles.checkBox}
            onClick={() => setIsChecked((prev) => !prev)}
          >
            <img
              alt="check"
              className={styles.checkBoxIcon}
              src={require(`../../../../assets/icons/${
                isChecked ? "checkBox" : "blankBox"
              }.png`)}
            />
            <div className={styles.text}>
              <span>By checking this box, you agree to our</span>{" "}
              <span className={styles.hilightText}>
                <Link to="/auth/termsOfService" target="_blank">
                  Terms of Service
                </Link>
              </span>{" "}
              and{" "}
              <span className={styles.hilightText}>
                <Link to="/auth/privacyPolicy" target="_blank">
                  our Privacy Policy
                </Link>
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
    <LottieIcon title="Account Created!" />
  );
};

export default CreatePassword;
