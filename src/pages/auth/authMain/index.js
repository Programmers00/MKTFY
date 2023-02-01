import { useState } from "react";
import styles from "./authMain.module.scss";

const AuthMain = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowCreateAccount, setIsShowCreateAccount] = useState(false);

  return (
    <div className={styles.authMainBox}>
      <span className={styles.title}>MKTFY</span>
      <span className={styles.subTitle}> Buy and sell stuff!</span>
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
      <p className={styles.bottomText}>
        <span className={styles.firstText}>Find out more about us! </span>
        <span className={styles.secondText}>Visit our website</span>
      </p>
    </div>
  );
};
export default AuthMain;
