import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";

const AuthMain = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.authMainBox}>
      <span className={styles.title}>MKTFY</span>
      <span className={styles.subTitle}> Buy and sell stuff!</span>
      <button
        className={styles.loginButton}
        onClick={() => navigate("/auth/login")}
      >
        Login
      </button>
      <button
        className={styles.createAccountButton}
        onClick={() => navigate("/auth/createAccount")}
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
