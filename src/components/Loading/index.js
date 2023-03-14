// scss
import styles from "./index.module.scss";
import Lottie from "lottie-react";
import lottieCheck from "../../assets/lottieIcons/lottieCheck.json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoadingFalse } from "../../store/actions/loading";
/** loading */
const Loading = () => {
  const loadingTitle = useSelector((state) => state.loading.title);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingFalse());
    }, 2000);
  }, []);
  return (
    <div className={styles.loadingBackground}>
      <div className={styles.lottieBox}>
        <span className={styles.title}>{loadingTitle}</span>
        <Lottie className={styles.lottie} animationData={lottieCheck} />
      </div>
    </div>
  );
};

export default Loading;
