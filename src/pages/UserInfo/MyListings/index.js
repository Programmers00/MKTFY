// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import MyListingsContent from "./MyListingsContent";

/** my listing page */
const MyListings = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["My listings"]} />
      <MyListingsContent />
    </div>
  );
};
export default MyListings;
