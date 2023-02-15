import { useState, useEffect, useRef } from "react";
// scss
import styles from "./index.module.scss";

/** Dropdown: must get 2 children from parent, and isLeftTail, isRightTail, closeTrigger */
/** example)
 * speachBubbleTail => "left" or "right",
 *  <div>children1</div>
 *  <div>children2</div>
 */
const Dropdown = ({ children, isLeftTail, isRightTail, closeTrigger }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const contentRef = useRef();

  /** click select box: when click the select box, open or close the menu */
  const handleInputClick = (e) => {
    setIsShowMenu(!isShowMenu);
  };
  // select label in menu: when click the item in menu, close the menu
  useEffect(() => {
    const handler = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
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
  // trigger to close the dropdown
  useEffect(() => {
    setIsShowMenu(false);
  }, [closeTrigger]);

  return (
    <div className={styles.dropdownBox}>
      <div
        ref={contentRef}
        className={styles.contentBox}
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={handleInputClick} className={styles.button}>
          {children[0]}
        </button>
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
    </div>
  );
};

export default Dropdown;
