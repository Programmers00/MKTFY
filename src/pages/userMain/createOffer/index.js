import { useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import CreateOfferContent from "./createOfferContent";

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
