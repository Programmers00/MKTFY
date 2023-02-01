import { useState } from "react";
// wrapper component
import Modal from "../../../components/modal";
import styles from "./login.module.scss";
// useAxios
import { useAxios } from "../../../hooks/useAxios";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  /** call api */
  // don't add url when create api from.
  // if no url makes error
  const options = {
    url: url,
    params: { email: email, password: password },
    method: "get",
    headers: { Accept: "application/json" },
  };

  const { loading, data, error, fetch } = useAxios(options);
  // console.log("response", loading, data, error);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl("https://icanhazdadjoke.com");
    fetch();
  };
  // api success
  if (data?.status === 200) {
    // console.log("SUCCESS", data);
  }
  // api fail
  else if (error) {
    // console.log("FAIL", error);
  }

  return (
    <Modal>
      <div className={styles.loginBox}>
        <span className={styles.loginTitle}>Welcome back!</span>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
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
