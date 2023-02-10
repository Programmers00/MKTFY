import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const Auth = () => {
  return (
    <div className={styles.authBox}>
      <Outlet />
    </div>
  );
};
export default Auth;
