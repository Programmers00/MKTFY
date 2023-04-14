import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// redux actions
import { fetchDeals, fetchCategory } from "../../../../store/actions/deals";

/** deals page */
const Deals = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** flag for api call */
  const accessToken = sessionStorage.getItem("accessToken");
  /** state management */
  const [deals, setDeals] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  /** params */
  const userCity = JSON.parse(localStorage.getItem("userCity")).label; // user prefer city from localstorage
  const categories = ["VEHICLES", "FURNITURE", "ELECTRONICS", "REAL_ESTATE"]; // category parameter
  /** fetch data : deals and categories */
  const fetchData = async () => {
    const response = await dispatch(fetchDeals({ city: userCity }));
    // success
    if (response.status === 200) {
      // console.log("#Fetch Deals Success", response);
      // set data
      setDeals(response.data);
    }
    // fetch categories
    for (const category of categories) {
      const response = await dispatch(
        fetchCategory({ category, city: userCity })
      );
      if (response.status === 200) {
        // console.log("#Fetch Category Success", response);
        switch (category) {
          case "VEHICLES":
            setVehicles(response.data);
            break;
          case "FURNITURE":
            setFurniture(response.data);
            break;
          case "ELECTRONICS":
            setElectronics(response.data);
            break;
          case "REAL_ESTATE":
            setRealEstate(response.data);
            break;
          default:
            break;
        }
      }
    }
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    accessToken && fetchData(); // fetch deals with accessToken(waiting for setting accessToken)
  }, [accessToken]);

  return (
    <div className={styles.mainBox}>
      {deals && <ContentCard items={deals} title="Deals" />}
      <div className={styles.half}>
        {vehicles && (
          <ContentCard
            items={vehicles}
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
