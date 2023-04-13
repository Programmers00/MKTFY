import { useState, useEffect } from "react";
// router parameter
import { useLocation } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import PickupContent from "./PickupContent";

/** pickup page */
const Pickup = () => {
  /** initialize */
  // parameter from router
  const {
    state: { item },
  } = useLocation();
  return (
    <div className={styles.mainBox}>
      <CategoryBar
        category={["Product Listing", "Checkout", "Pickup information"]}
      />
      {item && <PickupContent item={item} />}
    </div>
  );
};
export default Pickup;
