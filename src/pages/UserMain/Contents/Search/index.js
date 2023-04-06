import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// components
import ContentCard from "../../../../components/ContentCard";
// redux stuff
import { useDispatch } from "react-redux";
// actions
// import { fetchSearch } from "../../../../store/actions/deals";
import { fetchSearch } from "../../../../store/actions/search";
// router dom
import { useLocation } from "react-router-dom";

/** realEstate page */
const Search = () => {
  /** initialze */
  const dispatch = useDispatch();
  const {
    state: { params },
  } = useLocation();
  /** state management */
  const [searchItems, setSearchItems] = useState([]);
  /** fetch data : search items */
  const fetchData = async () => {
    const response = await dispatch(fetchSearch(params));
    // success
    if (response.status === 200) {
      console.log("#Fetch Search Success", response);
      // set data
      setSearchItems(response.data);
    }
  };
  /** request api */
  useEffect(() => {
    /** api*/
    fetchData();
  }, [params]);
  return (
    <div className={styles.mainBox}>
      <div className={styles.half}>
        {searchItems && <ContentCard items={searchItems} isExtendable />}
      </div>
    </div>
  );
};
export default Search;
