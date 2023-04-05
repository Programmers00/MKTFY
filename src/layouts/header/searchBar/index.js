import { useState, useEffect } from "react";
// scss
import styles from "./index.module.scss";
// components
import Select from "../../../components/Select"; //common
import Search from "./search"; //dependent
// navigate
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux action
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
    { value: null, label: "All" },
    { value: "VEHICLES", label: "CarsVehicles" },
    { value: "FURNITURE", label: "Furniture" },
    { value: "ELECTRONICS", label: "Electronics" },
    { value: "REAL_ESTATE", label: "Real Estate" },
  ];
  // cities for Select component
  const cities = [
    { value: "calgary", label: "Calgary" },
    { value: "brooks", label: "Brooks" },
    { value: "camrose", label: "Camrose" },
  ];
  // navigate path
  const categoryPaths = {
    REAL_ESTATE: "realEstate",
    VEHICLES: "carsVehcles",
    FURNITURE: "furniture",
    ELECTRONICS: "electronics",
  };
  // user prefer city from local storage
  const userCity = JSON.parse(localStorage.getItem("userCity")).label;

  // current params from redux
  const currentParams = useSelector((state) => {
    return state.search.params;
  });

  /** change data from current params(redux) */
  useEffect(() => {
    // set categry
    onChangeCategory(
      categories.find((item) => item.value === currentParams.category)
    );
    // set earch word
    setSearch(currentParams.search);
  }, [currentParams]);

  // category
  const [category, setCategory] = useState(
    currentParams.category !== null
      ? categories.find((item) => item.value === currentParams.category)
      : categories[0]
  );
  // search
  const [search, setSearch] = useState(
    currentParams.search !== "" ? currentParams.search : ""
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
    search,
    city: city.value,
  };

  /** funcions */
  /** submit form */
  const onSubmit = (event) => {
    event.preventDefault();
    // trim: remove whitespace from both ends
    if (search.trim().length === 0) return;
    dispatch(setSearchParams(params));

    const path = categoryPaths[params.category] || "/";
    navigate(path, { state: { isSearch: true } });
  };
  /** change category value and trigger to close select */
  const onChangeCategory = (event) => {
    if (event.value === category.value) return;
    setCategory(event);
    onCloseTrigger();
  };
  /** change city value and trigger to close select */
  const onChangeCity = (event) => {
    if (event.value === city.value) return;
    // params
    setCity(event);
    // local storage
    localStorage.setItem("userCity", JSON.stringify(event));
    onCloseTrigger();
  };
  /** trigger for close select */
  const onCloseTrigger = () => {
    setCloseTrigger(new Date());
  };
  // intitial city
  useEffect(() => {
    const city = JSON.parse(localStorage.getItem("userCity"));
    setCity(city);
  }, []);

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
          currentSelectedValue={category}
        />
        <span className={styles.borderSeperator}></span>
        <Search search={search} setSearch={setSearch} onSubmit={onSubmit} />
        <span className={styles.borderSeperator}></span>
        <Select
          closeTrigger={closeTrigger}
          isSearchable
          // isMulti
          // placeHolder="plcae holder"
          isLeftArrowIcon
          options={cities}
          onChange={onChangeCity}
          currentSelectedValue={city}
        />
      </form>
    </div>
  );
};

export default SearchBar;
