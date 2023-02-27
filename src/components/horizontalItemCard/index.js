// scss
import styles from "./index.module.scss";
// navigate
import { useNavigate } from "react-router-dom";

/** horizontal item card: parameter => item
 * item : {id, title, img, price, date, active}
 */
const HorizontalItemCard = ({ item }) => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      className={styles.itemBox}
      onClick={() => {
        navigate(item.active && "/product", { state: { id: item.id } });
      }}
    >
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
