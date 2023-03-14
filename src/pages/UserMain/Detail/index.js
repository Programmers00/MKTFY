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
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  /** params */
  const params = {
    id: state.id,
  };
  /** get data from api */
  useEffect(() => {
    const getData = async () => {
      const response = await dispatch(fetchDetail(params));
      if (response.data.code === "SUCCESS") {
        setData(response.data.item);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.mainBox}>
      <CategoryBar category={["Product Listing"]} />
      {data && <DetailContent data={data} />}
    </div>
  );
};
export default Detail;
