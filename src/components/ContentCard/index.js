// scss
import styles from "./index.module.scss";
// use navigate
import { useNavigate } from "react-router-dom";
// components
import ItemCard from "../ItemCard";

/** content card : parameter => isWidthHalf, isNavigate, isExtendable, content
 * content: {id, title, content:[id, title, img, price]}
 */
const ContentCard = ({
  isWidthHalf,
  isNavigate,
  isExtendable,
  items,
  title,
  subtitle,
}) => {
  /** initialize */
  const navigate = useNavigate();
  return (
    // is width half
    <div className={styles.cardBox} style={isWidthHalf && { width: "47%" }}>
      <span className={styles.cardTitle}>
        {title === "Deals" ? `${title} for you` : title}
        {subtitle && (
          <span className={styles.cardSubtitle}>&nbsp;"{subtitle}"</span>
        )}
      </span>
      <div
        className={styles.itemsBox}
        // is extendable
        style={isExtendable && { flexWrap: "wrap" }}
      >
        {items.length > 0 ? (
          items.map((item) => {
            return ItemCard({ item, navigate });
          })
        ) : (
          <div className={styles.noItem}>There are no products for sale</div>
        )}
      </div>
      {/* is navigate */}
      {isNavigate ? (
        <p
          className={styles.navigationButton}
          onClick={() => {
            // navigate to content.title
            navigate(`./${title.replace("&", "").toLowerCase()}`);
          }}
        >
          Explore now
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentCard;
