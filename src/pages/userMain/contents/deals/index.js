import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch } from "react-redux";
// redux actions
import { getDeals } from "../../../../store/actions/deals";

/** deals page */
const Deals = () => {
  const dispatch = useDispatch();
  /** initialize */
  const [deals, setDeals] = useState(null);
  const [carsVehicles, setCarsVehicles] = useState(null);
  const [furniture, setFurniture] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [realEstate, setRealEstate] = useState(null);

  /** api options */
  const requestDealsOptions = {
    url: "/contents",
    params: {},
  };
  const requestCarsVehiclesOptions = {
    url: "/contents",
    params: { id: "carsVehicles" },
  };
  const requestFurnitureOptions = {
    url: "/contents",
    params: { id: "furniture" },
  };
  const requestElectronicsOptions = {
    url: "/contents",
    params: { id: "electronics" },
  };
  const requestRealEstateOptions = {
    url: "/contents",
    params: { id: "realEstate" },
  };
  /** get datas from api */
  useEffect(() => {
    const getData = async () => {
      try {
        /** redux request api*/
        const responseDeals = await dispatch(getDeals(requestDealsOptions));
        const responseCarsVehicles = await dispatch(
          getDeals(requestCarsVehiclesOptions)
        );
        const responseFurniture = await dispatch(
          getDeals(requestFurnitureOptions)
        );
        const responseElectronics = await dispatch(
          getDeals(requestElectronicsOptions)
        );
        const responseRealEstate = await dispatch(
          getDeals(requestRealEstateOptions)
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
