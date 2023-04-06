import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";

/** electronics page */
const Electroinics = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** state management */
  const [electronics, setElectronics] = useState([]);
  /** params */
  const userCity = JSON.parse(localStorage.getItem("userCity")).label; // user prefer city from localstorage
  // params data
  const params = {
    category: "ELECTRONICS",
    city: userCity,
  };
  /** fetch data : realEstate */
  const fetchData = async () => {
    const response = await dispatch(fetchCategory(params));
    // success
    if (response.status === 200) {
      console.log("#Fetch Electronics Success", response);
      // set data
      setElectronics(response.data);
    }
  };

  /** request api */
  useEffect(() => {
    /** api*/
    fetchData();
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {electronics && <ContentCard items={electronics} isExtendable />}
      </div>
    </div>
  );
};
export default Electroinics;
