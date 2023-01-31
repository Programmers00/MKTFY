import { Outlet } from "react-router-dom";
import styles from "./auth.module.scss";

const Auth = () => {
  return (
    <div className={styles.authBox}>
      <Outlet />
    </div>
  );
};
export default Auth;
