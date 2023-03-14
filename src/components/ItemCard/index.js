// scss
import styles from "./index.module.scss";

/** item card: parameter => item
 * item : {id, productName, image, price}
 */
const ItemCard = ({ item, navigate }) => {
  return (
    <div
      key={item.id}
      className={styles.itemBox}
      onClick={() => {
        navigate(`/detail/${item.id}`, { state: { id: item.id } });
      }}
    >
      <img src={require(`../../assets/images/${item.image}.png`)} alt="img" />
      <div className={styles.contentBox}>
        <div className={styles.itemTitle}>
          {item.productName.length < 50
            ? item.productName
            : `${item.productName.slice(0, 49)}...`}
        </div>
        <div className={styles.itemPrice}>{`$${item.price}`}</div>
      </div>
    </div>
  );
};

export default ItemCard;
