// scss
import styles from "./index.module.scss";
// icons
import { GreaterIcon } from "../../assets/svgIcons";

const CategoryBar = ({ category }) => {
  return (
    <div className={styles.categoryBar}>
      <p>
        <span>Deals for you</span>
        {category.map((item) => (
          <span className={styles.categoryItem} key={item}>
            <span>
              <GreaterIcon />
            </span>
            <span>{item}</span>
          </span>
        ))}
      </p>
    </div>
  );
};
export default CategoryBar;
