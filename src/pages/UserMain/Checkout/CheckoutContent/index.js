// scss
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";

const CheckoutContent = ({ data }) => {
  /** data */
  const navigate = useNavigate();

  return (
    <div className={styles.checkoutContentBox}>
      <span className={styles.checkoutContentTitle}>Confirm</span>
      <div className={styles.checkoutContent}>
        <img className={styles.image} src={data.images[0]} alt="img" />
        <div className={styles.content}>
          <span className={styles.title}>{data.productName}</span>
          <div className={styles.price}>{`$${data.price}`}</div>
        </div>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.total}>Total</span>
        <div className={styles.price}>{`$${data.price}`}</div>
      </div>
      <div className={styles.buttonBox}>
        <a
          // href={`tel:${data.sellerInfo.contact}`}
          onClick={() => {
            navigate(`/pickup/${data.id}`, { state: { data } });
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
