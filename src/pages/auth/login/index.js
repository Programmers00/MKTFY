import { useState } from "react";
// wrapper component
import Modal from "../../../components/modal";
import styles from "./login.module.scss";
// custom api => processApi
import { getLogin } from "../../../api/login";

/** Login */
const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    const { loading, data, error } = await getLogin(requestLoginApi);
    console.log("loading, data, error", loading, data, error);
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
  );
};

export default Login;
