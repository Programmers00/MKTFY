import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchCategory } from "../../../../store/actions/deals";
// react router dom
import { useLocation } from "react-router-dom";

/** furniture page */
const Furniture = () => {
  /** initialze */
  const dispatch = useDispatch();
  const { state } = useLocation(); // checking isSearch from router(search or not)
  /** data */
  const [isSearch, setIsSearch] = useState(
    state?.isSearch ? state.isSearch : false
  );
  /** set data from redux*/
  const furniture = useSelector((state) => {
    return state.furniture.data;
  });

  /** params */
  // user prefer city from localstorage
  const userCity = localStorage.getItem("userCity");
  // furniture params
  const furnitureParams = {
    category: "furniture",
    search: "",
    city: userCity,
  };

  /** request api with redux */
  useEffect(() => {
    /** api*/
    // when not isSearch
    if (!isSearch) {
      dispatch(fetchCategory(furnitureParams));
    }
    setIsSearch(false);
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {furniture && <ContentCard items={furniture} isExtendable />}
      </div>
    </div>
  );
};
export default Furniture;
