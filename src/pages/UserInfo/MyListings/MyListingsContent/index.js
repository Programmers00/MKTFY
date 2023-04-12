// react
import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color occasionalPurple
import variabled from "../../../../styles/_variabled.scss";
// components
import HorizontalItemCard from "../../../../components/HorizontalItemCard";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
import { fetchMyListings } from "../../../../store/actions/myListings";
// navigate
import { useNavigate } from "react-router-dom";

/** my listings content component */
const MyListingsContent = () => {
  /** initialize*/
  // redux
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  /** data */
  const [showItem, setShowItem] = useState("active");
  const [activeItems, setActiveItems] = useState([]);
  const [pendingItems, setPendingItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);

  /** functions */
  const onClickItem = (item) => {
    navigate(`/myListings/${item.id}`, { state: { item } });
  };

  /** fetch data from api */
  useEffect(() => {
    const fetchData = async () => {
      /** temporary data */
      const tempActiveItems = [];
      const tempPendingItems = [];
      const tempSoldItems = [];
      /** api */
      // fetch my listings
      const response = await dispatch(fetchMyListings());
      // filtering ACTIVE, PENDING, SOLD
      response.data.forEach((item) => {
        if (item.status === "ACTIVE") tempActiveItems.push(item);
        else if (item.status === "PENDING") tempPendingItems.push(item);
        else tempSoldItems.push(item);
      });
      // set data
      setActiveItems(tempActiveItems);
      setPendingItems(tempPendingItems);
      setSoldItems(tempSoldItems);
    };
    fetchData();
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
              ? {
                  color: variabled.occasionalPurple,
                  textDecoration: "underline 3px",
                }
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
              ? {
                  color: variabled.occasionalPurple,
                  textDecoration: "underline 3px",
                }
              : {}
          }
        >
          Sold items
        </li>
      </div>
      <div className={styles.contentBox}>
        {/* active */}
        {showItem === "active" ? (
          <>
            {/* Pending -> need action*/}
            {pendingItems.length > 0 && (
              <>
                <span className={styles.contentTitle}>Pending</span>
                {pendingItems.map((item, index) => {
                  return (
                    <HorizontalItemCard
                      item={item}
                      key={index}
                      onClick={() => onClickItem(item)}
                    />
                  );
                })}
              </>
            )}
            {/* Available */}
            {activeItems.length > 0 && (
              <>
                <span className={styles.contentTitle}>Available</span>
                {activeItems.map((item, index) => {
                  return (
                    <HorizontalItemCard
                      item={item}
                      key={index}
                      onClick={() => onClickItem(item)}
                    />
                  );
                })}
              </>
            )}
          </>
        ) : (
          // sold
          soldItems.map((item, index) => {
            return (
              <HorizontalItemCard
                item={item}
                key={index}
                onClick={() => onClickItem(item)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyListingsContent;
