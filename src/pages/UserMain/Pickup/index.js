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
  /** data */
  const [data, setData] = useState(null);
  /** set data from router parameter */
  useEffect(() => {
    setData(state.data);
  }, [state]);
  console.log("##state", state.data);

  return (
    <div className={styles.mainBox}>
      <CategoryBar
        category={["Product Listing", "Checkout", "Pickup information"]}
      />
      {data && <PickupContent data={data} />}
    </div>
  );
};
export default Pickup;
