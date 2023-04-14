// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/HorizontalItemCard";
// navigate
import { useNavigate } from "react-router-dom";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
import { fetchMyPurchases } from "../../../../store/actions/myPurchases";

/** my purchases content component */
const MyPurchasesContent = () => {
  /** initialize */
  // redux
  const dispatch = useDispatch();
  // router
  const navigate = useNavigate();
  /** data */
  const [items, setItems] = useState([]);

  /** get data from api*/
  useEffect(() => {
    const fetchData = async () => {
      // fetch my purchases
      const response = await dispatch(fetchMyPurchases());
      // if success, set data
      if (response.status === 200) {
        setItems(response.data);
      }
    };
    fetchData();
  }, []);
  /** function */
  const onClick = (item) => {
    item.status !== "COMPLETE" &&
      navigate(`/checkout/${item.id}`, { state: { item } });
  };

  return (
    <div className={styles.myPurchasesContentBox}>
      <span className={styles.myPurchasesTitle}>My Purchases</span>
      <div className={styles.myPurchasesCount}>{`${items.length} items`}</div>
      <div className={styles.contentBox}>
        {items.map((item, index) => {
          return (
            <HorizontalItemCard
              isPurchase
              item={item}
              key={index}
              onClick={() => onClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPurchasesContent;
