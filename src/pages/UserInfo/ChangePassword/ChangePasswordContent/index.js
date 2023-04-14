import { useState } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// css styles
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";
// link to move page
// import { Link } from "react-router-dom";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
// webAuth from auth0-js
// import { webAuth } from "../../../../utils/webAuth";
// redux actions
import { setLoadingTrue } from "../../../../store/actions/loading";
import { updateChangePassword } from "../../../../store/actions/changePassword";
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
  // const [currentPassword, setCurrentPassword] = useState("");
  // new password
  const [newPassword, setNewPassword] = useState("");
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  // eye icon for password visibility
  // const [currentPasswordInputType, setCurrentPasswordInputType] =
  //   useState("password");
  // eye icon for password visibility
  const [newPasswordInputType, setPasswordInputType] = useState("password");
  // eye icon for password confirm visibility
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");
  // check password = password confirm
  // const [confirmPassword, setConfirmPassword] = useState("");

  const params = {
    // currentPassword,
    newPassword,
    confirmPassword,
  };

  /** functions */
  /** click submit button => webAuth signup try */
  const onClickSubmit = async (event) => {
    event.preventDefault();

    const response = await dispatch(updateChangePassword(params));
    if (response.status === 200) {
      dispatch(setLoadingTrue("Change Password"));
      navigate("/");
    } else {
      // console.log("##show Modal");
      setIsShowModal(true);
    }
  };

  /** password toggle: change input type and icon */
  const onToggle = (type) => {
    // if (type === "current") {
    // change input type
    // setCurrentPasswordInputType((prevPasswordInputType) =>
    //   prevPasswordInputType === "password" ? "text" : "password"
    // );
    // return;
    // } else if (type === "confirm") {
    // change input type
    setConfirmPasswordInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
    // return;
    // }
    // change input type
    setPasswordInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
  };

  return (
    <div className={styles.changePasswordBox}>
      <span className={styles.title}>Change Password</span>
      <form className={styles.changePasswordForm} onSubmit={onClickSubmit}>
        {/* <label className={styles.passwordLabel}>
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
        </label> */}

        <span className={styles.subTitle}>
          The password must have at least 6 characters and must contain 1
          uppercase and 1 number.
        </span>

        <label
          className={styles.passwordLabel}
          style={
            newPassword.length < 6 ||
            !/[A-Z]/.test(newPassword) ||
            !/\d/.test(newPassword)
              ? { color: variabled.occasionalPurple }
              : {}
          }
        >
          <span>
            Password{" "}
            {newPassword.length === 0 ? (
              ""
            ) : newPassword.length > 10 ? (
              <span style={{ color: variabled.goodGreen }}>Strong</span>
            ) : (
              <span style={{ color: variabled.hoverYellow }}>Weak</span>
            )}
          </span>
          <div className={styles.passwordInputBox}>
            <input
              className={styles.passwordInput}
              type={newPasswordInputType}
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Insert your new password"
              autoComplete="password"
              style={
                newPassword.length < 6 ||
                !/[A-Z]/.test(newPassword) ||
                !/\d/.test(newPassword)
                  ? { borderColor: variabled.occasionalPurple }
                  : {}
              }
            />
            <img
              alt="eye"
              className={styles.eyeIcon}
              src={require(`../../../../assets/icons/${
                (newPassword.length < 6 ||
                  !/[A-Z]/.test(newPassword) ||
                  !/\d/.test(newPassword)) &&
                newPasswordInputType === "password"
                  ? "eyeSlashPurple"
                  : (newPassword.length < 6 ||
                      !/[A-Z]/.test(newPassword) ||
                      !/\d/.test(newPassword)) &&
                    newPasswordInputType !== "password"
                  ? "eyePurple"
                  : newPassword.length >= 5 &&
                    /[A-Z]/.test(newPassword) &&
                    /\d/.test(newPassword) &&
                    newPasswordInputType === "password"
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
            newPassword !== confirmPassword
              ? { color: variabled.occasionalPurple }
              : {}
          }
        >
          Confirm Password
          <div className={styles.passwordInputBox}>
            <input
              className={styles.passwordInput}
              type={confirmPasswordInputType}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Insert your password Confirm"
              autoComplete="password"
              style={
                newPassword !== confirmPassword
                  ? { borderColor: variabled.occasionalPurple }
                  : {}
              }
            />
            <img
              alt="eye"
              className={styles.eyeIcon}
              src={require(`../../../../assets/icons/${
                newPassword !== confirmPassword &&
                confirmPasswordInputType === "password"
                  ? "eyeSlashPurple"
                  : newPassword !== confirmPassword &&
                    confirmPasswordInputType !== "password"
                  ? "eyePurple"
                  : newPassword === confirmPassword &&
                    confirmPasswordInputType === "password"
                  ? "eyeSlash"
                  : "eye"
              }.png`)}
              onClick={() => onToggle("confirm")}
            />
          </div>
          <span className={styles.passwordMatchWarningBox}>
            <div className={styles.passwordMatchWarning}>
              {newPassword !== confirmPassword ? "Password does not match" : ""}
            </div>
          </span>
        </label>
        <div className={styles.validationBox}>
          <div className={styles.validation}>
            <img
              alt="check"
              className={styles.checkIcon}
              src={require(`../../../../assets/icons/${
                newPassword.length > 5 ? "checkConfirm" : "check"
              }.png`)}
            />
            At least 6 characters
          </div>
          <div className={styles.validation}>
            <img
              alt="check"
              className={styles.checkIcon}
              src={require(`../../../../assets/icons/${
                /[A-Z]/.test(newPassword) ? "checkConfirm" : "check"
              }.png`)}
            />
            1 Uppercase
          </div>
          <div className={styles.validation}>
            <img
              alt="check"
              className={styles.checkIcon}
              src={require(`../../../../assets/icons/${
                /\d/.test(newPassword) ? "checkConfirm" : "check"
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
              newPassword === confirmPassword &&
              newPassword.length > 5 &&
              /[A-Z]/.test(newPassword) &&
              /\d/.test(newPassword)
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
