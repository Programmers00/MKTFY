// scss
import styles from "./index.module.scss";

/** item card: parameter => item
 * item : {id, title, img, price}
 */
const ItemCard = ({ item, navigate }) => {
  return (
    <div
      key={item.id}
      className={styles.itemBox}
      onClick={() => {
        navigate("/detail", { state: { id: item.id } });
      }}
    >
      <img src={require(`../../assets/images/${item.img}.png`)} alt="img" />
      <div className={styles.contentBox}>
        <div className={styles.itemTitle}>
          {item.title.length < 50
            ? item.title
            : `${item.title.slice(0, 49)}...`}
        </div>
        <div className={styles.itemPrice}>{`$${item.price}`}</div>
      </div>
    </div>
  );
};

export default ItemCard;
