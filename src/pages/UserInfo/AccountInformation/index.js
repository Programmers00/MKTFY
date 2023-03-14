// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import AccountInfomationContent from "./AccountInformationContent";

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
