// styles
import styles from "./modal.module.scss";
// navigate
import { useNavigate } from "react-router-dom";

/** Modal: params => children, onClickBackButton(implement in parents) */
const Modal = ({ children, onClickBackButton }) => {
  // navigate
  const navigate = useNavigate();
  // backButton show: true or false(default)
  let isShowBackButton = false;
  // onClickBackButton is function => show back button
  if (typeof onClickBackButton === "function") {
    isShowBackButton = true;
  }
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalContent}>
        <div className={styles.modalButtons}>
          {isShowBackButton && (
            <img
              className={styles.modalBackButton}
              alt="<"
              src={"/assets/icons/Arrow.png"}
              onClick={() => onClickBackButton()}
            ></img>
          )}
          <img
            className={styles.modalCloseButton}
            alt="X"
            src={"/assets/icons/closeButton.png"}
            onClick={() => navigate("/auth")}
          ></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
