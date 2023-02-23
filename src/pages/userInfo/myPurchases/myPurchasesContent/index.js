// react
import { useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import HorizontalItemCard from "../../../../components/horizontalItemCard";

/** my purchases content component */
const MyPurchasesContent = () => {
  //  items
  const items = [
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
