import { useEffect, useState } from "react";
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
/** Login */
const Login = () => {
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  // params data
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // response data
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
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
  // distribute updated state
  const { loading, data, error } = { ...state };
  // when response success, show lottie icons after 2 seconds go to useMain("/") page
  // login success => isAuthenticated :true
  useEffect(() => {
    if (!loading && data?.status === 200) {
      // update isAuthenticated
      dispatch({ type: "authenticated", isAuthenticated: true });
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
  }, [data?.status]);

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
              type="text"
              value={email}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Insert your email"
              autoComplete="email"
            />
            <span className={styles.validationWarning}>Validation</span>
          </label>
          <br />
          <label className={styles.passwordLabel}>
            Password
            <br />
            <input
              className={styles.passwordInput}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Insert your password"
              autoComplete="password"
            />
          </label>
          <br />
          <p className={styles.forgetPassword}>Forget password</p>
          <br />
          <div className={styles.loginButtonBox}>
            <button className={styles.loginButton} type="submit">
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
