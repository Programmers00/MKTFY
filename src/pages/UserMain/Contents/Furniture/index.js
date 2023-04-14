import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";

/** furniture page */
const Furniture = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** state management */
  const [furniture, setFurniture] = useState([]);
  /** params */
  const userCity = JSON.parse(localStorage.getItem("userCity")).label; // user prefer city from localstorage
  // params data
  const params = {
    category: "FURNITURE",
    city: userCity,
  };
  /** fetch data : furniture */
  const fetchData = async () => {
    const response = await dispatch(fetchCategory(params));
    // success
    if (response.status === 200) {
      // console.log("#Fetch Furniture Success", response);
      // set data
      setFurniture(response.data);
    }
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    fetchData();
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {furniture && <ContentCard items={furniture} isExtendable />}
      </div>
    </div>
  );
};
export default Furniture;
