import { useState, useRef } from "react";
import styles from "./index.module.scss";
import Select from "../select";

const SearchBar = () => {
  const [category, setCategory] = useState({ value: "all", label: "All" });
  const [searchWord, setSearchWord] = useState("");

  const searchForm = {
    category,
  };

  const categoryList = [
    { value: "all", label: "All" },
    { value: "carsVehicles", label: "CarsVehicles" },
    { value: "furniture", label: "Furniture" },
    { value: "electronics", label: "Electronics" },
    { value: "realEstate", label: "Real Estate" },
  ];

  return (
    <div className={styles.searchBarBox}>
      <form className={styles.formBox}>
        <Select
          // isSearchable
          // isMulti
          // placeHolder="plcae holder"
          // isIcon
          options={categoryList}
          onChange={(event) => {
            setCategory(event.value);
          }}
        />
        <span className={styles.borderSeperator}></span>
        <input type="text"></input>
      </form>
    </div>
  );
};

export default SearchBar;
