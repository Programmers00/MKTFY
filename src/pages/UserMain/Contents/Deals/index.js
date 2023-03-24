import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  fetchDeals,
  fetchCarsVehicles,
  fetchFurniture,
  fetchElectronics,
  fetchRealEstate,
} from "../../../../store/actions/deals";

/** deals page */
const Deals = () => {
  /** initialze */
  const dispatch = useDispatch();

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
  const userCity = localStorage.getItem("userCity");
  // deals
  const dealsParams = {
    category: "",
    searchWord: "",
    city: userCity,
  };
  // carsVehicles
  const carsVehiclesParams = {
    category: "carsVehicles",
    searchWord: "",
    city: userCity,
  };
  // furniture
  const furnitureParams = {
    category: "furniture",
    searchWord: "",
    city: userCity,
  };
  // electronics
  const electronicsParams = {
    category: "electronics",
    searchWord: "",
    city: userCity,
  };
  // realEstate
  const realEstateParams = {
    category: "realEstate",
    searchWord: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    dispatch(fetchDeals(dealsParams));
    dispatch(fetchCarsVehicles(carsVehiclesParams));
    dispatch(fetchFurniture(furnitureParams));
    dispatch(fetchElectronics(electronicsParams));
    dispatch(fetchRealEstate(realEstateParams));
  }, []);

  return (
    <div className={styles.mainBox}>
      {deals && <ContentCard content={deals} />}
      <div className={styles.half}>
        {carsVehicles && (
          <ContentCard content={carsVehicles} isWidthHalf isNavigate />
        )}
        {furniture && (
          <ContentCard content={furniture} isWidthHalf isNavigate />
        )}
      </div>
      <div className={styles.half}>
        {electronics && (
          <ContentCard content={electronics} isWidthHalf isNavigate />
        )}
        {realEstate && (
          <ContentCard content={realEstate} isWidthHalf isNavigate />
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
