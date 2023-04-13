import { useState, useEffect } from "react";
// router parameter
import { useLocation } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import CheckoutContent from "./CheckoutContent";
// redux
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../../store/actions/product";

/** checkout page */
const Checkout = () => {
  /** initialize */
  // parameter from router
  const {
    state: {
      item: { id },
    },
  } = useLocation();
  // redux
  const dispatch = useDispatch();
  /** data state */
  const [item, setItem] = useState(null);

  /** fetch data and set item */
  useEffect(() => {
    // parameter
    const params = {
      id,
    };
    const fetchData = async () => {
      const response = await dispatch(fetchProductById(params));
      response.status === 200 && setItem(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Product Listing", "Checkout"]} />
      {item && <CheckoutContent item={item} />}
    </div>
  );
};
export default Checkout;
