import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import Select from "../../../components/select"; //common
import Search from "./search"; //dependent

/** search bar component in header */
const SearchBar = () => {
  /** data */
  // categories for Select component
  const categories = [
    { value: "all", label: "All" },
    { value: "carsVehicles", label: "CarsVehicles" },
    { value: "furniture", label: "Furniture" },
    { value: "electronics", label: "Electronics" },
    { value: "realEstate", label: "Real Estate" },
  ];
  // cities for Select component
  const cities = [
    { value: "calgary", label: "Calgary" },
    { value: "brooks", label: "Brooks" },
    { value: "camrose", label: "Camrose" },
  ];

  // user prefer city
  const userCity = localStorage.getItem("userCity");
  const [category, setCategory] = useState(categories[0]);
  const [searchWord, setSearchWord] = useState("");
  const [city, setCity] = useState(
    userCity ? cities.find((item) => item.value === userCity) : cities[0]
  );
  const [closeTrigger, setCloseTrigger] = useState(0);

  /** data form */
  const searchForm = {
    category: category.value,
    searchWord,
    city: city.value,
  };
  /** funcions */
  /** submit form */
  const onSubmit = (event) => {
    event.preventDefault();
    if (searchWord.length === 0) return;
    console.log("##send api", searchForm);
  };
  /** change category value and trigger to close select */
  const onChangeCategory = (event) => {
    if (event.value === category) return;
    setCategory(event.value);
    onCloseTrigger();
  };
  /** change city value and trigger to close select */
  const onChangeCity = (event) => {
    if (event.value === city) return;
    // params
    setCity(event.value);
    // local storage
    localStorage.setItem("userCity", event.value);
    onCloseTrigger();
  };
  /** trigger for close select */
  const onCloseTrigger = () => {
    setCloseTrigger(new Date());
  };

  return (
    <div className={styles.searchBarBox}>
      <form className={styles.formBox} onSubmit={onSubmit}>
        <Select
          closeTrigger={closeTrigger}
          // isSearchable
          // isMulti
          // placeHolder="plcae holder"
          // isIcon
          options={categories}
          onChange={onChangeCategory}
          initSelectedValue={category}
        />
        <span className={styles.borderSeperator}></span>
        <Search
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          onSubmit={onSubmit}
        />
        <span className={styles.borderSeperator}></span>
        <Select
          closeTrigger={closeTrigger}
          isSearchable
          // isMulti
          // placeHolder="plcae holder"
          isLeftArrowIcon
          options={cities}
          onChange={onChangeCity}
          initSelectedValue={city}
        />
      </form>
    </div>
  );
};

export default SearchBar;
