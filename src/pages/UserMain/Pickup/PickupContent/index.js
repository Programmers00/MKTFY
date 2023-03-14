// scss
import styles from "./index.module.scss";

const PickupContent = ({ data }) => {
  return (
    <div className={styles.pickupContentBox}>
      <span className={styles.pickupContentTitle}>Pick up</span>
      <div className={styles.userContent}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            {data.sellerInfo?.userName?.charAt(0)}
          </div>
          <span className={styles.userName}>{data.sellerInfo?.userName}</span>
        </div>
        <span> Please pick up your purchase at {data.sellerInfo?.address}</span>
      </div>

      <div className={styles.buttonBox}>
        <a
          href={`tel:${data.sellerInfo.contact}`}
          className={styles.button}
          type="btton"
        >
          <span>Contact seller</span>
        </a>
      </div>
    </div>
  );
};

export default PickupContent;
