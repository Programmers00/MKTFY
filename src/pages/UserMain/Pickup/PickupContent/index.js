// scss
import styles from "./index.module.scss";

const PickupContent = ({ data }) => {
  console.log("##data", data);
  return (
    <div className={styles.pickupContentBox}>
      <span className={styles.pickupContentTitle}>Pick up</span>
      <div className={styles.userContent}>
        <div className={styles.infoBox}>
          <div className={styles.circle}>
            {data.sellerProfile?.lastName?.charAt(0)}
          </div>
          <span className={styles.userName}>
            {data.sellerProfile?.lastName + data.sellerProfile?.firstName}
          </span>
        </div>
        <span>
          {" "}
          Please pick up your purchase at {data.sellerProfile?.address}
        </span>
      </div>

      <div className={styles.buttonBox}>
        <a
          href={`tel:${data.sellerProfile.phone}`}
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
