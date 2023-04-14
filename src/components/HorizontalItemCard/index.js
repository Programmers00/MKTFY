// scss
import styles from "./index.module.scss";

/** horizontal item card: parameter => item
 * item : {id, productName, img, price, date, active}
 */
const HorizontalItemCard = ({
  isPurchase,
  item,
  onClick = () => {
    console.log("#No function");
  },
}) => {
  /** initialize */
  /** date converter */
  const dateConverter = (date) => {
    const convertedDate = new Date(date);
    const month = convertedDate.toLocaleString("default", { month: "long" }); //month short to long
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);
    return month + " " + day + " " + year;
  };
  return (
    <div key={item.id} className={styles.itemBox} onClick={onClick}>
      {item.images[0] ? (
        <img src={item.images[0]} alt="img" />
      ) : (
        <div className={styles.noImage}>No Image</div>
      )}
      <div className={styles.contentBox}>
        {item.created && (
          <div className={styles.date}>{dateConverter(item.created)}</div>
        )}
        <div className={styles.itemTitle}>
          {item.productName.length < 50
            ? item.productName
            : `${item.productName.slice(0, 49)}...`}
        </div>
        <div className={styles.itemPrice}>{`$${item.price}`}</div>
        {item.status === "COMPLETE" && (
          <div className={styles.tagBox}>
            <div className={styles.tag}>
              {isPurchase ? "PURCHASED" : "SALE CONFIRMED"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalItemCard;
