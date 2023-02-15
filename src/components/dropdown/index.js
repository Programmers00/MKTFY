import { useState, useEffect, useRef } from "react";
// scss
import styles from "./index.module.scss";

/** Dropdown: must get 2 children from parent, and speach buble tail */
/** example)
 * speachBubbleTail => "left" or "right",
 *  <div>children1</div>
 *  <div>children2</div>
 */
const Dropdown = ({ children, isLeftTail, isRightTail }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const buttonRef = useRef();

  /** click select box: when click the select box, open or close the menu */
  const handleInputClick = (e) => {
    console.log("###input");
    setIsShowMenu(!isShowMenu);
  };
  // select label in menu: when click the item in menu, close the menu
  useEffect(() => {
    const handler = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsShowMenu(false);
      }
    };
    // add click event
    window.addEventListener("click", handler);
    return () => {
      // remove click event
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className={styles.dropdownBox}>
      <div ref={buttonRef} className={styles.buttonBox}>
        <button onClick={handleInputClick} className={styles.button}>
          {children[0]}
        </button>
      </div>
      {/* first children is for button */}
      {/* tail left */}
      {isShowMenu && isLeftTail && (
        <div className={styles.menu}>
          <div className={styles.menuContentTailLeft}>
            {/* second children is for content */}
            {children[1]}
          </div>
        </div>
      )}
      {/* tail right */}
      {isShowMenu && isRightTail && (
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
