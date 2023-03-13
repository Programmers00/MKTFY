import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
import styles from "./index.module.scss";
// wrapper component
import Modal from "../../../../components/Modal";
// navigate
import { useNavigate } from "react-router-dom";

/** ResetPassword */
const ResetPassword = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  /** data */
  /** click button */
  const onClick = (event) => {
    event.preventDefault();
    navigate("/auth/login");
  };

  return (
    <Modal onClickBackButton={() => navigate("/auth/forgotPassword")}>
      <div className={styles.resetPasswordVerificationBox}>
        <span className={styles.title}>Reset Password?</span>
        <span className={styles.subTitle}>
          Please check your email for further instructions and click the button
          below when the process is complete
        </span>
        <div className={styles.buttonBox}>
          <button className={styles.button} type="submit" onClick={onClick}>
            Return to login
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPassword;
