import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchCarsVehicles } from "../../../../store/actions/deals";

/** carsVehicles page */
const CarsVehicles = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** set data from redux*/
  const carsVehicles = useSelector((state) => {
    return state.carsVehicles.listings.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // carsVehicles
  const carsVehiclesParams = {
    category: "carsVehicles",
    searchWord: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    dispatch(fetchCarsVehicles(carsVehiclesParams));
  }, []);

  return (
    <div className={styles.mainBox}>
      {/* {deals && <ContentCard content={deals} />} */}
      <div className={styles.half}>
        {carsVehicles && <ContentCard content={carsVehicles} isExtendable />}
      </div>
    </div>
  );
};
export default CarsVehicles;
