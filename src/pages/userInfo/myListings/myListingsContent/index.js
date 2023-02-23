// react
import { useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/horizontalItemCard";

/** dmy listing content component */
const MyListingsContent = () => {
  const [showItem, setShowItem] = useState("activeItems");
  /** date */
  // active items
  const activeItems = [
    {
      id: "cat3",
      title: "Pearl The cat: Christmas edtion",
      img: "cat3",
      price: "500",
      date: "September 07 2020",
      active: true,
    },
    {
      id: "cat4",
      title: "Pearl The cat: Halloween edtion",
      img: "cat4",
      price: "500",
      date: "September 07 2020",
      active: true,
    },
    {
      id: "cat5",
      title: "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
      img: "cat",
      price: "500",
      date: "September 07 2020",
      active: true,
    },
    {
      id: "cat6",
      title: "Pearl The cat: Donut edtion",
      img: "cat",
      price: "500",
      date: "September 07 2020",
      active: true,
    },
  ];
  // sold items
  const soldItems = [
    {
      id: "cat1",
      title: "Pearl The cat: Donut edtion",
      img: "cat",
      price: "500",
      active: false,
    },
    {
      id: "cat2",
      title: "Pearl The cat: Monster edtion",
      img: "cat2",
      price: "500",
      active: false,
    },
    {
      id: "cat3",
      title: "Pearl The cat: Christmas edtion",
      img: "cat3",
      price: "500",
      active: false,
    },
  ];

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
