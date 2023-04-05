import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";
// react router dom
import { useLocation } from "react-router-dom";

/** carsVehicles page */
const CarsVehicles = () => {
  /** initialze */
  const dispatch = useDispatch();
  const { state } = useLocation(); // checking isSearch from router(search or not)
  /** data */
  const [isSearch, setIsSearch] = useState(
    state?.isSearch ? state.isSearch : false
  );
  /** set data from redux*/
  const carsVehicles = useSelector((state) => {
    return state.carsVehicles.data;
  });

  /** params */
  // // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // carsVehicles
  const carsVehiclesParams = {
    category: "carsVehicles",
    search: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    // when not isSearch
    if (!isSearch) {
      dispatch(fetchCategory(carsVehiclesParams));
    }
    setIsSearch(false);
  }, []);

  return (
    <div className={styles.mainBox}>
      {/* {deals && <ContentCard content={deals} />} */}
      <div className={styles.half}>
        {carsVehicles && <ContentCard items={carsVehicles} isExtendable />}
      </div>
    </div>
  );
};
export default CarsVehicles;
