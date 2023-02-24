import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import CategoryBar from "../../../components/categoryBar";
import DetailContent from "./detailContent";
// get parameter from parameter
import { useLocation } from "react-router-dom";

import { getDetail } from "../../../api/userMain/detail";
/** detail page */
const Detail = () => {
  /** initialize */
  const [data, setData] = useState(null);
  const { state } = useLocation();
  console.log(state);

  const requestDataOptions = {
    url: "https://jsonplaceholder.typicode.com/posts", //it is possible to send whole url
    // url: "/contents", // baseUrl("http://localhost:3000/") + url("/contents") => "http://localhost:3000/contents"
    params: { id: state.id },
    method: "get",
  };

  useEffect(() => {
    const getData = async () => {
      const responseData = await getDetail(requestDataOptions);
      setData(responseData.data);
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
