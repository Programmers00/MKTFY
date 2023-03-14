import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// css styles
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";
// link to move page
import { Link } from "react-router-dom";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
// webAuth from auth0-js
import { webAuth } from "../../../../utils/webAuth";
// redux actions
import { setLoadingTrue } from "../../../../store/actions/loading";
import { changePassword } from "../../../../store/actions/changePassword";
// component
import TryAgainModal from "./TryAgainModal";

/** change password component */
const ChangePasswordContent = () => {
  /** initialize */
  const [isShowModal, setIsShowModal] = useState(false);
  // redux
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  /** data */
  // current password
  const [currentPassword, setCurrentPassword] = useState("");
  // password
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [currentPasswordInputType, setCurrentPasswordInputType] =
    useState("password");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  // eye icon for password confirm visibility
  const [passwordConfirmInputType, setPasswordConfirmInputType] =
    useState("password");
  // check password = password confirm
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const params = {
    currentPassword,
    password,
  };

  /** functions */
  /** click submit button => webAuth signup try */
  const onClickSubmit = async (event) => {
    event.preventDefault();

    const response = await dispatch(changePassword(params));
    console.log("##response", response);
    // console.log("##response", response.data.code === "SUCCESS");
    if (response.data?.code === "SUCCESS") {
      dispatch(setLoadingTrue("Change Password"));
      navigate("/");
    } else {
      console.log("##show Modal");
      setIsShowModal(true);
    }
    // webAuth sign up try with signup form from redux
    // webAuth.signup(signupForm, (err, res) => {
    //   // signup fail: email duplicate
    //   if (err && err.statusCode === 400 && err.code === "invalid_signup") {
    //     alert("email is duplicated");
    //     // go userMain page
    //     navigate("/auth/createAccount");
    //   }
    //   // signup success
    //   else if (res) {
    //     // dispatch: remove signup form data in redux
    //     dispatch(resetSignup());
    //     // set loading page for 2seconds
    //     dispatch(setLoadingTrue("Account Created!"));
    //     // go login page
    //     navigate("/auth/login");
    //   }
    // });
  };

  /** password toggle: change input type and icon */
  const onToggle = (type) => {
    if (type === "current") {
      // change input type
      setCurrentPasswordInputType((prevPasswordInputType) =>
        prevPasswordInputType === "password" ? "text" : "password"
      );
      return;
    } else if (type === "confirm") {
      // change input type
      setPasswordConfirmInputType((prevPasswordInputType) =>
        prevPasswordInputType === "password" ? "text" : "password"
      );
      return;
    }
    // change input type
    setPasswordInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
  };

  return (
    <div className={styles.changePasswordBox}>
      <span className={styles.title}>Change Password</span>
      <form className={styles.changePasswordForm} onSubmit={onClickSubmit}>
        <label className={styles.passwordLabel}>
          <span>Current Password </span>
          <div className={styles.passwordInputBox}>
            <input
              className={styles.passwordInput}
              type={currentPasswordInputType}
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
              placeholder="Insert your current password"
              autoComplete="password"
            />
            <img
              alt="eye"
              className={styles.eyeIcon}
              src={require(`../../../../assets/icons/${
                currentPasswordInputType === "password" ? "eyeSlash" : "eye"
              }.png`)}
              onClick={() => onToggle("current")}
            />
          </div>
        </label>

        <span className={styles.subTitle}>
          The password must have at least 6 characters and must contain 1
          uppercase and 1 number.
        </span>

        <label
          className={styles.passwordLabel}
          style={
            password.length < 6 ||
            !/[A-Z]/.test(password) ||
            !/\d/.test(password)
              ? { color: variabled.occasionalPurple }
              : {}
          }
        >
          <span>
            Password{" "}
            {password.length === 0 ? (
              ""
            ) : password.length > 10 ? (
              <span style={{ color: variabled.goodGreen }}>Strong</span>
            ) : (
              <span style={{ color: variabled.hoverYellow }}>Weak</span>
            )}
          </span>
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
                  ? { borderColor: variabled.occasionalPurple }
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
        <label
          className={styles.passwordLabel}
          style={
            password !== passwordConfirm
              ? { color: variabled.occasionalPurple }
              : {}
          }
        >
          Confirm Password
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
                  ? { borderColor: variabled.occasionalPurple }
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
            Set password
          </button>
        </div>
      </form>
      {isShowModal && (
        <TryAgainModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          onClickYes={onClickSubmit}
        />
      )}
    </div>
  );
};

export default ChangePasswordContent;
