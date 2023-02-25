import { useState, useEffect } from "react";
// router parameter
import { useLocation } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import CheckoutContent from "./checkoutContent";

/** checkout page */
const Checkout = () => {
  /** initialize */
  // parameter from router
  const { state } = useLocation();
  /** data */
  const [data, setData] = useState(null);
  /** set data from router parameter */
  useEffect(() => {
    setData(state.data);
  }, [state]);

  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Product Listing", "Checkout"]} />
      {data && <CheckoutContent data={data} />}
    </div>
  );
};
export default Checkout;
