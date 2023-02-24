// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import AccountInfomationContent from "./accountInformationContent";

/** account information page */
const AccountInformation = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Account information"]} />
      <AccountInfomationContent />
    </div>
  );
};
export default AccountInformation;
