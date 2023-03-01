import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchRealEstate } from "../../../../store/actions/deals";

/** realEstate page */
const RealEstate = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** set data from redux*/
  const realEstate = useSelector((state) => {
    return state.realEstate.listings.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // realEstate
  const realEstateParams = {
    category: "realEstate",
    searchWord: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    dispatch(fetchRealEstate(realEstateParams));
  }, []);

  return (
    <div className={styles.mainBox}>
      {/* {deals && <ContentCard content={deals} />} */}
      <div className={styles.half}>
        {realEstate && <ContentCard content={realEstate} isExtendable />}
      </div>
    </div>
  );
};
export default RealEstate;
