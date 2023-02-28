import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch } from "react-redux";
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
  /** data */
  const [deals, setDeals] = useState(null);
  const [carsVehicles, setCarsVehicles] = useState(null);
  const [furniture, setFurniture] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [realEstate, setRealEstate] = useState(null);

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // deals
  const dealsParams = {
    category: "",
    city: userCity,
  };
  // carsVehicles
  const carsVehiclesParms = {
    category: "carsVehicles",
    city: userCity,
  };
  // furniture
  const furnitureParams = {
    category: "furniture",
    city: userCity,
  };
  // electronics
  const electronicsParms = {
    category: "electronics",
    city: userCity,
  };
  // realEstate
  const realEstateParms = {
    category: "realEstate",
    city: userCity,
  };
  /** get datas from api */
  useEffect(() => {
    const getData = async () => {
      try {
        /** api*/
        const responseDeals = await dispatch(fetchDeals(dealsParams));
        const responseCarsVehicles = await dispatch(
          fetchCarsVehicles(carsVehiclesParms)
        );
        const responseFurniture = await dispatch(
          fetchFurniture(furnitureParams)
        );
        const responseElectronics = await dispatch(
          fetchElectronics(electronicsParms)
        );
        const responseRealEstate = await dispatch(
          fetchRealEstate(realEstateParms)
        );
        /** set response data*/
        setDeals(responseDeals.data);
        setCarsVehicles(responseCarsVehicles.data);
        setFurniture(responseFurniture.data);
        setElectronics(responseElectronics.data);
        setRealEstate(responseRealEstate.data);
      } catch (error) {}
    };
    getData();
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
    </div>
  );
};
export default Deals;
