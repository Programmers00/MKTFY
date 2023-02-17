// scss
import styles from "./index.module.scss";
// use navigate
import { useNavigate } from "react-router-dom";
// components
import ItemCard from "../itemCard";

/** content card : parameter => isWidthHalf, isNavigate, isExtendable, content
 * content: {id, title, content:[id, title, img, price]}
 */
const ContentCard = ({ isWidthHalf, isNavigate, isExtendable, content }) => {
  /** initialize */
  const navigate = useNavigate();
  return (
    // is width half
    <div className={styles.cardBox} style={isWidthHalf && { width: "46%" }}>
      <span className={styles.cardTitle}>
        {content.title === "Deal" ? `${content.title}...` : content.title}
      </span>
      <div
        className={styles.itemsBox}
        // is extendable
        style={isExtendable && { flexWrap: "wrap" }}
      >
        {content.items.map((item) => {
          return ItemCard(item);
        })}
      </div>
      {/* is navigate */}
      {isNavigate ? (
        <p
          className={styles.navigationButton}
          onClick={() => {
            // navigate to content.title
            navigate(`./${content.title.toLowerCase()}`);
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
