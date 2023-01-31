import { useState } from "react";
import styles from "./authMain.module.scss";

const AuthMain = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowCreateAccount, setIsShowCreateAccount] = useState(false);

  return (
    <div className={styles.authMainBox}>
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
export default AuthMain;
