// react
import { useRef, useEffect } from "react";
// scss
import styles from "./index.module.scss";
/** cancel listing modal*/
const ProductModal = ({ setIsShowModal, onClickYes, contentText }) => {
  /** initialize */
  const modalRef = useRef();
  /** functions */
  // modal closer handler
  const modalCloseHandler = ({ target }) => {
    if (modalRef.current && !modalRef.current.contains(target)) {
      setIsShowModal(false);
    }
  };
  /** uesEffect */
  // detect mousedown
  useEffect(() => {
    window.addEventListener("mousedown", modalCloseHandler);
    return () => {
      window.removeEventListener("mousedown", modalCloseHandler);
    };
  });

  return (
    <div ref={modalRef} className={styles.modalBox}>
      <span className={styles.modalTitle}>Heads up!</span>
      <p className={styles.content}>{contentText}</p>
      <div className={styles.buttonsBox}>
        <div className={styles.buttons}>
          <div className={styles.cancelButtonBox}>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={() => {
                setIsShowModal(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className={styles.yesButtonBox}>
            <button
              className={styles.yesButton}
              type="button"
              onClick={onClickYes}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;
