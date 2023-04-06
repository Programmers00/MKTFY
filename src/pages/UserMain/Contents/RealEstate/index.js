import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";

/** realEstate page */
const RealEstate = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** state management */
  const [realEstate, setRealEstate] = useState([]);
  /** params */
  const userCity = JSON.parse(localStorage.getItem("userCity")).label; // user prefer city from localstorage
  // params data
  const params = {
    category: "REAL_ESTATE",
    city: userCity,
  };
  /** fetch data : realEstate */
  const fetchData = async () => {
    const response = await dispatch(fetchCategory(params));
    // success
    if (response.status === 200) {
      console.log("#Fetch RealEstate Success", response);
      // set data
      setRealEstate(response.data);
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
        {realEstate && <ContentCard items={realEstate} isExtendable />}
      </div>
    </div>
  );
};
export default RealEstate;
