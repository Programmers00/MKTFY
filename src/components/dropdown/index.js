import { useState } from "react";
// scss
import styles from "./index.module.scss";

/** Dropdown: must get 2 children from parent, and speach buble tail */
const Dropdown = ({ children, tail = "left" }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className={styles.dropdownBox}>
      <div
        className={styles.button}
        onClick={() => setIsShowMenu((prev) => !prev)}
      >
        {/* first children is for button */}
        {children[0]}
      </div>
      {isShowMenu && tail === "left" && (
        <div className={styles.menu}>
          <div className={styles.menuContentTailLeft}>
            {/* second children is for content */}
            {children[1]}
          </div>
        </div>
      )}
      {isShowMenu && tail === "right" && (
        <div className={styles.menu}>
          <div className={styles.menuContentTailRight}>
            {/* second children is for content */}
            {children[1]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
