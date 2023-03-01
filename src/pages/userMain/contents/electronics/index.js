import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchElectronics } from "../../../../store/actions/deals";

/** electronics page */
const Electroinics = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** set data from redux*/
  const electronics = useSelector((state) => {
    return state.electronics.listings.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // electronics
  const electronicsParams = {
    category: "electronics",
    searchWord: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    dispatch(fetchElectronics(electronicsParams));
  }, []);

  return (
    <div className={styles.mainBox}>
      {/* {deals && <ContentCard content={deals} />} */}
      <div className={styles.half}>
        {electronics && <ContentCard content={electronics} isExtendable />}
      </div>
    </div>
  );
};
export default Electroinics;
