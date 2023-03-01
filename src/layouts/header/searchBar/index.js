import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import Select from "../../../components/select"; //common
import Search from "./search"; //dependent
// navigate
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux actions
import {
  fetchDeals,
  fetchCarsVehicles,
  fetchFurniture,
  fetchElectronics,
  fetchRealEstate,
} from "../../../store/actions/deals";

import { setSearchParams } from "../../../store/actions/search";

/** search bar component in header */
const SearchBar = () => {
  /** initiailize */
  // redux dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
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
  // navigate path
  const categoryPaths = {
    all: "/",
    carsVehicles: "/carsVehicles",
    furniture: "/furniture",
    electronics: "/electronics",
    realEstate: "/realEstate",
  };
  // user prefer city from local storage
  const userCity = localStorage.getItem("userCity");

  const currentParams = useSelector((state) => {
    return state.search.params;
  });

  // category
  const [category, setCategory] = useState(
    currentParams.category !== ""
      ? categories.find((item) => item.value === currentParams.category)
      : categories[0]
  );
  // search
  const [searchWord, setSearchWord] = useState(
    currentParams.searchWord !== "" ? currentParams.searchWord : ""
  );
  // city: if local sotrage has userCity? set userCity, not? set cities[0]
  const [city, setCity] = useState(
    currentParams.city !== ""
      ? cities.find((item) => item.value === currentParams.city)
      : userCity
      ? cities.find((item) => item.value === userCity)
      : cities[0]
  );
  // trigger to close
  const [closeTrigger, setCloseTrigger] = useState(0);

  /** data form */
  const params = {
    category: category.value,
    searchWord,
    city: city.value,
  };

  /** funcions */
  /** submit form */
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchParams(params));
    // trim: remove whitespace from both ends
    if (searchWord.trim().length === 0) return;
    const path = categoryPaths[params.category] || "/";
    navigate(path);
    switch (params.category) {
      case "deals":
        dispatch(fetchDeals(params));
        dispatch(fetchCarsVehicles(params));
        dispatch(fetchFurniture(params));
        dispatch(fetchElectronics(params));
        dispatch(fetchRealEstate(params));
        break;
      case "carsVehicles":
        dispatch(fetchCarsVehicles(params));
        break;
      case "furniture":
        dispatch(fetchFurniture(params));
        break;
      case "electronics":
        dispatch(fetchElectronics(params));
        break;
      case "realEstate":
        dispatch(fetchRealEstate(params));
        break;
      default:
        break;
    }
  };
  /** change category value and trigger to close select */
  const onChangeCategory = (event) => {
    if (event.value === category) return;
    setCategory(event);
    onCloseTrigger();
  };
  /** change city value and trigger to close select */
  const onChangeCity = (event) => {
    if (event.value === city) return;
    // params
    setCity(event);
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
