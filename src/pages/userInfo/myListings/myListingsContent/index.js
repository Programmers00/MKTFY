// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/horizontalItemCard";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
import { fetchMyListings } from "../../../../store/actions/myListings";

/** my listings content component */
const MyListingsContent = () => {
  /** initialize*/
  // redux
  const dispatch = useDispatch();
  /** data */
  const [showItem, setShowItem] = useState("active");
  const [activeItems, setActiveItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);

  /** params */
  const activeParams = { status: "active" };
  // sold options
  const soldParams = { status: "sold" };
  /** fetch data from api */
  useEffect(() => {
    const getData = async () => {
      try {
        /** api */
        const responseActive = await dispatch(fetchMyListings(activeParams));
        const responseSold = await dispatch(fetchMyListings(soldParams));
        /** set data */
        if (responseActive.data.code === "SUCCESS") {
          setActiveItems(responseActive.data.items);
        }
        if (responseSold.data.code === "SUCCESS") {
          setSoldItems(responseSold.data.items);
        }
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div className={styles.myListingsContentBox}>
      <span className={styles.myListingsTitle}>My Listings</span>
      <div className={styles.myListingsNavbar}>
        <li
          onClick={() => {
            setShowItem("active");
          }}
          style={
            showItem === "active"
              ? { color: "purple", textDecoration: "underline 3px" }
              : {}
          }
        >
          Active itmes
        </li>
        <li
          onClick={() => {
            setShowItem("sold");
          }}
          style={
            showItem === "sold"
              ? { color: "purple", textDecoration: "underline 3px" }
              : {}
          }
        >
          Sold items
        </li>
      </div>
      <div className={styles.contentBox}>
        {showItem === "active"
          ? activeItems.map((item, index) => {
              return <HorizontalItemCard item={item} key={index} />;
            })
          : soldItems.map((item, index) => {
              return <HorizontalItemCard item={item} key={index} />;
            })}
      </div>
    </div>
  );
};

export default MyListingsContent;
