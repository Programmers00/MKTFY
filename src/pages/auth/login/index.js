import { useEffect, useState } from "react";
// scss style variabled for color red
import variabled from "../../../styles/_variabled.scss";
// wrapper component
import Modal from "../../../components/modal";
import styles from "./login.module.scss";
// custom api => processApi
import { getLogin } from "../../../api/login";
// navigate
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
// lottieFile
import LottieIcon from "../../../components/lottieIcon";
// customed hooks
import { useValidator } from "../../../hooks/useValidator";
// constants
import { regex, validationMessage } from "../../../constants";

/** Login */
const Login = () => {
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  // params data
  const [password, setPassword] = useState("");
  // eye icon for password visibility
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("eyeSlash");
  // response data
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  // email input options
  // -> max length limitator
  // const maxLengthLimitator = (value) => {
  //   return value.length <= 320;
  // };
  // -> validation
  const validation = {
    // regex
    regex: regex.email,
    // validation error messagevalidation
    message: validationMessage.email,
  };
  // useValidator hook
  const {
    value: email,
    onChange: onEmailChange,
    validationMessage: emailValidationMessage,
  } = useValidator("", "", validation);

  // lottie show true when login success
  const [showLottie, setShowLottie] = useState(false);

  /** request data for api */
  const requestLoginApi = {
    url: "https://icanhazdadjoke.com",
    params: { email: email, password: password },
    method: "get",
    headers: { Accept: "application/json" },
  };

  /** click login button => call api*/
  const onClickLogin = async (event) => {
    event.preventDefault();
    // request login
    const state = await getLogin(requestLoginApi);
    // save state
    setState(state);
  };

  // when response success, show lottie icons after 2 seconds go to useMain("/") page
  // login success => isAuthenticated :true
  useEffect(() => {
    if (!state?.loading && state?.data?.status === 200) {
      // update isAuthenticated
      dispatch({ type: "AUTHENTICATED", isAuthenticated: true });
      // show lottie
      setShowLottie(true);
      // after 2seconds
      setTimeout(() => {
        // go userMain page
        navigate("/");
        // unshow lottie(return default value:false)
        setShowLottie(false);
      }, 2000);
    }
  }, [state?.data?.status]);

  /** password toggle: change input type and icon */
  const onToggle = () => {
    // change icon
    setEyeIcon((prevEyeIcon) =>
      prevEyeIcon === "eyeSlash" ? "eye" : "eyeSlash"
    );
    // change input type
    setPasswordInputType((prevPasswordInputType) =>
      prevPasswordInputType === "password" ? "text" : "password"
    );
  };

  return !showLottie ? (
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
                src={require(`../../../assets/icons/${eyeIcon}.png`)}
                onClick={() => onToggle()}
              />
            </div>
            <span className={styles.validationWarning}>
              {state?.error ? "Invalid email/password" : ""}
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
  ) : (
    <LottieIcon />
  );
};

export default Login;
