import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import { fetchDeals, fetchCategory } from "../../../../store/actions/deals";

/** deals page */
const Deals = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** flag for api call */
  const accessToken = sessionStorage.getItem("accessToken");

  /** set data from redux*/
  const deals = useSelector((state) => {
    return state.deals.listings.data;
  });
  const carsVehicles = useSelector((state) => {
    return state.carsVehicles.listings.data;
  });
  const furniture = useSelector((state) => {
    return state.furniture.listings.data;
  });
  const electronics = useSelector((state) => {
    return state.electronics.listings.data;
  });
  const realEstate = useSelector((state) => {
    return state.realEstate.listings.data;
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
    if (accessToken) {
      // fetch deals
      dispatch(fetchDeals(dealsParams));
      // categories
      const categories = [
        "VEHICLES",
        "FURNITURE",
        "ELECTRONICS",
        "REAL_ESTATE",
      ];
      // fetch categories
      categories.forEach((category) => {
        dispatch(fetchCategory({ category, city: userCity }));
      });
    }
  }, []);

  return (
    <div className={styles.mainBox}>
      {deals && <ContentCard content={deals} title={"Deals"} />}
      <div className={styles.half}>
        {carsVehicles && (
          <ContentCard
            content={carsVehicles}
            isWidthHalf
            isNavigate
            title="Cars&Vehicles"
          />
        )}
        {furniture && (
          <ContentCard
            content={furniture}
            isWidthHalf
            isNavigate
            title="Furniture"
          />
        )}
      </div>
      <div className={styles.half}>
        {electronics && (
          <ContentCard
            content={electronics}
            isWidthHalf
            isNavigate
            title="Electronics"
          />
        )}
        {realEstate && (
          <ContentCard
            content={realEstate}
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
