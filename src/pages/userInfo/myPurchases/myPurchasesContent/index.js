// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/horizontalItemCard";
// useDispatch for sending action to redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMyPurchases } from "../../../../store/actions/myPurchases";

/** my purchases content component */
const MyPurchasesContent = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  /** data */
  const [items, setItems] = useState([]);

  // request data options
  const fetchMyPurchasesOptions = {
    url: "/api/user/myPurchases",
    params: {},
  };
  /** fetch data from api */
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await dispatch(
          fetchMyPurchases(fetchMyPurchasesOptions)
        );
        const { items } = response.data;
        setItems(items);
      } catch (error) {}
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
