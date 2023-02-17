// router dom
import { Outlet } from "react-router-dom";
// layout
import Header from "../../layouts/header";
// scss
import styles from "./index.module.scss";

/** userMain layout with private router */
const UserMain = () => {
  return (
    <div className={styles.userMainBox}>
      {/* layout header, content(outlet)  */}
      <Header />
      <Outlet />
    </div>
  );
};

export default UserMain;
