import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import { fetchDeals, fetchCategory } from "../../../../store/actions/deals";
// react router dom
import { useLocation } from "react-router-dom";

/** deals page */
const Deals = () => {
  /** initialze */
  const dispatch = useDispatch();
  const { state } = useLocation(); // checking isSearch from router(search or not)
  /** data */
  const [isSearch, setIsSearch] = useState(
    state?.isSearch ? state.isSearch : false
  );
  // categories
  const categories = ["VEHICLES", "FURNITURE", "ELECTRONICS", "REAL_ESTATE"];
  /** flag for api call */
  const accessToken = sessionStorage.getItem("accessToken");

  /** set data from redux*/
  const deals = useSelector((state) => {
    return state.deals.data;
  });
  const carsVehicles = useSelector((state) => {
    return state.carsVehicles.data;
  });
  const furniture = useSelector((state) => {
    return state.furniture.data;
  });
  const electronics = useSelector((state) => {
    return state.electronics.data;
  });
  const realEstate = useSelector((state) => {
    return state.realEstate.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = JSON.parse(localStorage.getItem("userCity")).label;
  // deals from my search history
  const dealsParams = {
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    // when accessToken has, not isSearch
    if (accessToken && !isSearch) {
      // fetch deals
      dispatch(fetchDeals(dealsParams));
      // fetch categories
      categories.forEach((category) => {
        dispatch(fetchCategory({ category, city: userCity }));
      });
    }
    setIsSearch(false);
  }, [accessToken]);

  return (
    <div className={styles.mainBox}>
      {deals && <ContentCard items={deals} title="Deals" />}
      <div className={styles.half}>
        {carsVehicles && (
          <ContentCard
            items={carsVehicles}
            isWidthHalf
            isNavigate
            title="Cars&Vehicles"
          />
        )}
        {furniture && (
          <ContentCard
            items={furniture}
            isWidthHalf
            isNavigate
            title="Furniture"
          />
        )}
      </div>
      <div className={styles.half}>
        {electronics && (
          <ContentCard
            items={electronics}
            isWidthHalf
            isNavigate
            title="Electronics"
          />
        )}
        {realEstate && (
          <ContentCard
            items={realEstate}
            isWidthHalf
            isNavigate
            title="RealEstate"
          />
        )}
      </div>
      <div
        className={styles.banner}
        // download url
        onClick={() => console.log("#download")}
      ></div>
    </div>
  );
};
export default Deals;
