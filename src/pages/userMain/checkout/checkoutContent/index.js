import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";

const CheckoutContent = ({ data }) => {
  /** data */

  return (
    <div className={styles.checkoutContentBox}>
      <span className={styles.checkoutContentTitle}>Confirm</span>
      <div className={styles.checkoutContent}>
        <img
          className={styles.image}
          src={require(`../../../../assets/images/${data.images[0]}.png`)}
          alt="img"
        />
        <div className={styles.content}>
          <span className={styles.title}>{data.title}</span>
          <div className={styles.price}>{`$${data.price}`}</div>
        </div>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.total}>Total</span>
        <div className={styles.price}>{`$${data.price}`}</div>
      </div>
      <div className={styles.buttonBox}>
        <a
          href={`tel:${data.sellerInfo.contact}`}
          className={styles.button}
          type="btton"
        >
          <span>Contact seller to purchase</span>
        </a>
      </div>
    </div>
  );
};

export default CheckoutContent;
