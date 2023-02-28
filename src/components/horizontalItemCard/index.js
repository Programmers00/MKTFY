// scss
import styles from "./index.module.scss";

/** horizontal item card: parameter => item
 * item : {id, title, img, price, date, active}
 */
const HorizontalItemCard = ({
  item,
  onClick = () => {
    console.log("#No function");
  },
}) => {
  /** initialize */
  // navigate
  return (
    <div key={item.id} className={styles.itemBox} onClick={onClick}>
      <img src={require(`../../assets/images/${item.img}.png`)} alt="img" />
      <div className={styles.contentBox}>
        {item.date && <div className={styles.date}>{item.date}</div>}
        <div className={styles.itemTitle}>
          {item.title.length < 50
            ? item.title
            : `${item.title.slice(0, 49)}...`}
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
