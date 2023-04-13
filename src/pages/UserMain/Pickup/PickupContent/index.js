// scss
import styles from "./index.module.scss";

const PickupContent = ({ item }) => {
  return (
    <div className={styles.pickupContentBox}>
      <span className={styles.pickupContentTitle}>Pick up</span>
      <div className={styles.userContent}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            {item.sellerProfile?.lastName?.charAt(0)}
          </div>
          <span className={styles.userName}>
            {item.sellerProfile?.lastName + item.sellerProfile?.firstName}
          </span>
        </div>
        <span>
          {" "}
          Please pick up your purchase at {item.sellerProfile?.address}
        </span>
      </div>

      <div className={styles.buttonBox}>
        <a
          href={`tel:${item.sellerProfile?.phone}`}
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
