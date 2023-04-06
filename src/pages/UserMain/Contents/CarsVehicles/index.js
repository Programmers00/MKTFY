import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";

/** carsVehicles page */
const CarsVehicles = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** state management */
  const [vehicles, setVehicles] = useState([]);
  /** params */
  const userCity = JSON.parse(localStorage.getItem("userCity")).label; // user prefer city from localstorage
  // params data
  const params = {
    category: "VEHICLES",
    city: userCity,
  };
  /** fetch data : realEstate */
  const fetchData = async () => {
    const response = await dispatch(fetchCategory(params));
    // success
    if (response.status === 200) {
      console.log("#Fetch Vehicles Success", response);
      // set data
      setVehicles(response.data);
    }
  };

  /** request api */
  useEffect(() => {
    /** fetch api */
    fetchData();
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {vehicles && <ContentCard items={vehicles} isExtendable />}
      </div>
    </div>
  );
};
export default CarsVehicles;
