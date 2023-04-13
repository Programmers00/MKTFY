import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/CategoryBar";
import DetailContent from "./DetailContent";
// get parameter
import { useLocation } from "react-router-dom";
// redux dispatch
import { useDispatch } from "react-redux";
// redux actions
import { fetchDetail } from "../../../store/actions/detail";
/** detail page */
const Detail = () => {
  /** initialize */
  // data from router
  const { state } = useLocation();
  // redux
  const dispatch = useDispatch();
  /** data state */
  const [item, setItem] = useState(null);

  /** get data from api */
  useEffect(() => {
    /** params */
    const params = {
      id: state.id,
    };
    const fetchData = async () => {
      const response = await dispatch(fetchDetail(params));
      if (response.status === 200) {
        setItem(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Product Listing"]} />
      {item && <DetailContent item={item} />}
    </div>
  );
};
export default Detail;
