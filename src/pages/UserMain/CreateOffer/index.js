// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import CreateOfferContent from "./CreateOfferContent";

/** create offer page */
const CreateOffer = () => {
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Create offer"]} />
      <CreateOfferContent />
    </div>
  );
};
export default CreateOffer;
