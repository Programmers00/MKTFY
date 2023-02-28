import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import DetailContent from "./detailContent";
// get parameter
import { useLocation } from "react-router-dom";
// redux dispatch
import { useDispatch } from "react-redux";
// redux actions
import { getDetail } from "../../../store/actions/detail";
/** detail page */
const Detail = () => {
  /** initialize */
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  // request data options
  const requestOptions = {
    url: "/detail", // baseUrl("http://localhost:3000/") + url("/detail") => "http://localhost:3000/detail"
    params: { id: state.id },
    method: "get",
  };
  /** get data from api */
  useEffect(() => {
    const getData = async () => {
      const response = await dispatch(getDetail(requestOptions));
      if (response.data.code === "SUCCESS") {
        console.log("response", response.data.item);
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
