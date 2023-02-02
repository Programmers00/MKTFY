// lottie library
import Lottie from "lottie-react";
import lottieCheck from "../../assets/lottieIcons/lottieCheck.json";
import styles from "./lottieIcon.module.scss";

/** lottie icon library => props:title */
const LottieIcon = ({ title = "" }) => (
  <div className={styles.lottieBox}>
    <span className={styles.title}>{title}</span>
    <Lottie className={styles.lottie} animationData={lottieCheck} />
  </div>
);

export default LottieIcon;
