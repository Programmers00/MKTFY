// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/HorizontalItemCard";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
import { fetchMyPurchases } from "../../../../store/actions/myPurchases";

/** my purchases content component */
const MyPurchasesContent = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  /** data */
  const [items, setItems] = useState([]);

  /** params */
  const params = {};
  /** get data from api*/
  useEffect(() => {
    const getData = async () => {
      // fetch my purchases
      const response = await dispatch(fetchMyPurchases(params));
      // if success, set data
      if (response.data.code === "SUCCESS") {
        const { items } = response.data;
        setItems(items);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.myPurchasesContentBox}>
      <span className={styles.myPurchasesTitle}>My Purchases</span>
      <div className={styles.myPurchasesCount}>{`${items.length} items`}</div>
      <div className={styles.contentBox}>
        {items.map((item, index) => {
          return <HorizontalItemCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MyPurchasesContent;
