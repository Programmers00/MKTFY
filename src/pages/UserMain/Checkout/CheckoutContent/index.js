// scss
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";
/** checkout content */
const CheckoutContent = ({ item }) => {
  /** data */
  const navigate = useNavigate();

  return (
    <div className={styles.checkoutContentBox}>
      <span className={styles.checkoutContentTitle}>Confirm</span>
      <div className={styles.checkoutContent}>
        <img className={styles.image} src={item.images[0]} alt="img" />
        <div className={styles.content}>
          <span className={styles.title}>{item.productName}</span>
          <div className={styles.price}>{`$${item.price}`}</div>
        </div>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.total}>Total</span>
        <div className={styles.price}>{`$${item.price}`}</div>
      </div>
      <div className={styles.buttonBox}>
        <a
          onClick={() => {
            navigate(`/pickup/${item.id}`, { state: { item } });
          }}
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
