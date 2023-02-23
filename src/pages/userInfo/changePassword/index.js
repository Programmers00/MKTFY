// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import ChangePasswordContent from "./changePasswordContent";

/** change password page */
const ChangePassword = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Change password"]} />
      <ChangePasswordContent />
    </div>
  );
};
export default ChangePassword;
