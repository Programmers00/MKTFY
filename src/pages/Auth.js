import { useState } from "react";
import styles from "./auth.module.scss";

const Auth = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowCreateAccount, setIsShowCreateAccount] = useState(false);

  return (
    <div className={styles.authBox}>
      <span className={styles.logo}>MKTFY</span>
      <span className={styles.subLogo}> Buy and sell stuff!</span>
      <button
        className={styles.loginButton}
        onClick={() => setIsShowLogin(true)}
      >
        Login
      </button>
      <button
        className={styles.createAccountButton}
        onClick={() => setIsShowCreateAccount(true)}
      >
        Create account
      </button>
    </div>
  );
};
export default Auth;
