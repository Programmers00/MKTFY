import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// apis
import {
  getDeals,
  getCarsVehicles,
  getFurniture,
  getElectronics,
  getRealEstate,
} from "../../../../api/userMain/contents/deals";

/** deals page */
const Deals = () => {
  /** initialize */
  const [deals, setDeals] = useState(null);
  const [carsVehicles, setCarsVehicles] = useState(null);
  const [furniture, setFurniture] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [realEstate, setRealEstate] = useState(null);

  /** api options */
  const requestDealsOptions = {
    url: "https://jsonplaceholder.typicode.com/posts", //it is possible to send whole url
    // url: "/contents", // baseUrl("http://localhost:3000/") + url("/contents") => "http://localhost:3000/contents"
    // params: {},
    method: "get",
  };
  const requestCarsVehiclesOptions = {
    url: "/contents",
    // params: {carsVehicles},
    method: "get",
  };
  const requestFurnitureOptions = {
    url: "/contents",
    // params: {furniture},
    method: "get",
  };
  const requestElectronicsOptions = {
    url: "/contents",
    // params: {electronics},
    method: "get",
  };
  const requestRealEstateOptions = {
    url: "/contents",
    // params: {realEstate},
    method: "get",
  };
  /** get datas from api */
  useEffect(() => {
    const getData = async () => {
      /** request api*/
      const responseDeals = await getDeals(requestDealsOptions);
      const responseCarsVehicles = await getCarsVehicles(
        requestCarsVehiclesOptions
      );
      const responseFurniture = await getFurniture(requestFurnitureOptions);
      const responseElectronics = await getElectronics(
        requestElectronicsOptions
      );
      const responseRealEstate = await getRealEstate(requestRealEstateOptions);
      /** set response data */
      setDeals(responseDeals.data);
      setCarsVehicles(responseCarsVehicles.data);
      setFurniture(responseFurniture.data);
      setElectronics(responseElectronics.data);
      setRealEstate(responseRealEstate.data);
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
