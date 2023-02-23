// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import MyPurchasesContent from "./myPurchasesContent";

/** my purchases page */
const MyPurchases = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["My Purchases"]} />
      <MyPurchasesContent />
    </div>
  );
};
export default MyPurchases;
