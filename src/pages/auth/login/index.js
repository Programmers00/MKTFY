import { useState } from "react";
// scss style variabled for color red
import variabled from "../../../styles/_variabled.scss";
// wrapper component
import Modal from "../../../components/modal";
// scss styles
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";
// useDispatch for sending action to redux
// customed hooks
import { useValidator } from "../../../hooks/useValidator";
// constants for regex, validations
import { regex, validationMessage } from "../../../constants";
// webAuth from auth0-js
import { webAuth } from "../../../utils/webAuth";

/** Login */
const Login = () => {
  /** initilzie */
  // navigate
  const navigate = useNavigate();

  /** data */
  // password
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  // error for checking login fail
  const [error, setError] = useState(0);
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
  // login form
  const loginForm = {
    realm: "Username-Password-Authentication",
    email,
    password,
  };

  /** functions */
  /** click login button => if login success, go to userMain page(redirect) if not, error occur*/
  const onClickLogin = async (event) => {
    event.preventDefault();
    webAuth.login(loginForm, (err) => {
      // err.code => "too_many_attempts" , "access_denied"
      console.log(
        "#err.code",
        err.code,
        "#err.error_description",
        err.error_description
      );
      setError(err.code);
    });
  };

  /** password toggle: change input type and icon */
  const onToggle = () => {
    // change input type and "eye", "eyeSlash" icon
    setPasswordInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
  };

  return (
    <Modal>
      <div className={styles.loginBox}>
        <span className={styles.loginTitle}>Welcome back!</span>
        <form className={styles.loginForm} onSubmit={onClickLogin}>
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
            <span className={styles.validationWarning}>
              {emailValidationMessage}
            </span>
          </label>
          <br />
          <label className={styles.passwordLabel}>
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
              />
              <img
                alt="eye"
                className={styles.eyeIcon}
                src={require(`../../../assets/icons/${
                  passwordInputType === "text" ? "eye" : "eyeSlash"
                }.png`)}
                onClick={() => onToggle()}
              />
            </div>
            <span className={styles.validationWarning}>
              {error === ""
                ? ""
                : error === "too_many_attempts"
                ? "too many attempts"
                : "Invalid email/password"}
            </span>
          </label>
          <br />
          <div className={styles.forgotPasswordBox}>
            <p
              className={styles.forgotPassword}
              onClick={() => navigate("/auth/forgotPassword")}
            >
              Forgot password
            </p>
          </div>
          <br />
          <div className={styles.loginButtonBox}>
            <button
              className={styles.loginButton}
              type="submit"
              // disabled when email, password are empty or email validation message exist
              disabled={
                email.length === 0 ||
                password.length === 0 ||
                emailValidationMessage.length !== 0
                  ? true
                  : false
              }
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
