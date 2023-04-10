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
  const { state } = useLocation();

  return (
    <div className={styles.mainBox}>
      <CategoryBar
        category={["Product Listing", "Checkout", "Pickup information"]}
      />
      {state.data && <PickupContent data={state.data} />}
    </div>
  );
};
export default Pickup;
