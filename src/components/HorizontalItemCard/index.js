// scss
import styles from "./index.module.scss";

/** horizontal item card: parameter => item
 * item : {id, productName, img, price, date, active}
 */
const HorizontalItemCard = ({
  item,
  onClick = () => {
    console.log("#No function");
  },
}) => {
  /** initialize */
  return (
    <div key={item.id} className={styles.itemBox} onClick={onClick}>
      <img src={require(`../../assets/images/${item.image}.png`)} alt="img" />
      <div className={styles.contentBox}>
        {item.date && <div className={styles.date}>{item.date}</div>}
        <div className={styles.itemTitle}>
          {item.productName.length < 50
            ? item.productName
            : `${item.productName.slice(0, 49)}...`}
        </div>
        <div className={styles.itemPrice}>{`$${item.price}`}</div>
        {!item.active && (
          <div className={styles.tagBox}>
            <div className={styles.tag}>SALE CONFIRMED</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalItemCard;
