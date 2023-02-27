// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/horizontalItemCard";
// useDispatch for sending action to redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMyListings } from "../../../../store/actions/myListings";

/** my listings content component */
const MyListingsContent = () => {
  /** initialize*/
  // redux
  const dispatch = useDispatch();
  /** data */
  const [showItem, setShowItem] = useState("activeItems");
  const [activeItems, setActiveItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);

  /** request data options */
  // active options
  const fetchMyListingsActiveOptions = {
    url: "/api/user/myListings",
    params: { status: "active" },
  };
  // sold options
  const fetchMyListingsSoldOptions = {
    url: "/api/user/myListings",
    params: { status: "sold" },
  };
  /** fetch data from api */
  useEffect(() => {
    const getData = async () => {
      try {
        // request fetch
        const responseActiveItems = await dispatch(
          fetchMyListings(fetchMyListingsActiveOptions)
        );
        const responseSoldItems = await dispatch(
          fetchMyListings(fetchMyListingsSoldOptions)
        );
        // set data
        setActiveItems(responseActiveItems.data.items);
        setSoldItems(responseSoldItems.data.items);
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
            setShowItem("activeItems");
          }}
          style={
            showItem === "activeItems"
              ? { color: "purple", textDecoration: "underline 3px" }
              : {}
          }
        >
          Active itmes
        </li>
        <li
          onClick={() => {
            setShowItem("soldItems");
          }}
          style={
            showItem === "soldItems"
              ? { color: "purple", textDecoration: "underline 3px" }
              : {}
          }
        >
          Sold items
        </li>
      </div>
      <div className={styles.contentBox}>
        {showItem === "activeItems"
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
