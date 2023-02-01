import { useState } from "react";
import styles from "./modal.module.scss";
import { useNavigate } from "react-router-dom";
const Modal = ({ children, onClickBackButton }) => {
  const [
    isShowBackButton,
    setIsShowBackButton = () => {
      console.log("##backButton");
    },
  ] = useState(false);
  const navigate = useNavigate();

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
