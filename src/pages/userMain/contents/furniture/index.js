import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/contentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchFurniture } from "../../../../store/actions/deals";

/** furniture page */
const Furniture = () => {
  /** initialze */
  const dispatch = useDispatch();
  /** set data from redux*/
  const furniture = useSelector((state) => {
    return state.furniture.listings.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // furniture params
  const furnitureParams = {
    category: "furniture",
    searchWord: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    dispatch(fetchFurniture(furnitureParams));
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {furniture && <ContentCard content={furniture} isExtendable />}
      </div>
    </div>
  );
};
export default Furniture;
