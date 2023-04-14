import { useState, useEffect } from "react";
// use navigate
import { useNavigate } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// scss style variabled for color red
import variabled from "../../../../../styles/_variabled.scss";
// use validator hook
import { useValidator } from "../../../../../hooks/useValidator";
// constants for regex, validations
import { regex, validationMessage } from "../../../../../constants";
// useDispatch for sending action to redux
import { useDispatch } from "react-redux";
// redux actions
import { setCreateOffer } from "../../../../../store/actions/createOffer";

/** data from  */
const DataForm = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();

  /** data */
  // selectbox list data
  const cities = ["Calgary", "Camrose", "Brooks"]; // for ui, params
  // key for ui, value for param
  const categories = [
    { key: "Cars & Vehicles", value: "VEHICLES" },
    { key: "Furniture", value: "FURNITURE" },
    { key: "Electronics", value: "ELECTRONICS" },
    { key: "Real estate", value: "REAL_ESTATE" },
  ];
  // key for ui, value for param
  const conditions = [
    { key: "New", value: "NEW" },
    { key: "Used", value: "USED" },
  ];
  // form data
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0].value);
  const [condition, setCondition] = useState(conditions[0].value);
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState(cities[0]);

  /** regex and validation message */
  const validationAddress = {
    // regex
    regex: regex.streetAddress,
    // validation error messagevalidation
    message: validationMessage.streetAddress,
  };

  /** custom hooks */
  // address validator hook
  const {
    value: address,
    onChange: onAddressChange,
    validationMessage: streetAddressValidationMessage,
  } = useValidator("", "", validationAddress);

  /** data form for redux*/
  // create offer form
  const params = {
    productName,
    description,
    category,
    condition,
    price,
    address,
    city,
  };

  /** update data in redux */
  useEffect(() => {
    dispatch(setCreateOffer(params));
  }, [productName, description, category, condition, price, address, city]);

  return (
    <div className={styles.contentBox}>
      <label className={styles.label}>
        Product name
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="Type the product name"
          autoFocus
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          maxLength={256}
        />
      </label>
      <label className={styles.label}>
        Description
        <br />
        <textarea
          className={styles.textArea}
          placeholder="Type the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={1024}
        />
      </label>
      <label className={styles.label}>
        Category
        <br />
        <select
          className={styles.input}
          placeholder="Choose the category"
          value={category.value}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => {
            return (
              <option value={category.value} key={category.value}>
                {category.key}
              </option>
            );
          })}
        </select>
      </label>
      <div className={styles.dividedContentBox}>
        <div className={styles.halfContentBox}>
          <label className={styles.label}>
            Condition
            <br />
            <select
              className={styles.input}
              placeholder="Choose the condition"
              value={condition.value}
              onChange={(e) => setCondition(e.target.value)}
            >
              {conditions.map((condition) => {
                return (
                  <option value={condition.value} key={condition.value}>
                    {condition.key}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className={styles.halfContentBox}>
          <label className={styles.label}>
            Price
            <br />
            <input
              className={styles.input}
              pattern="[0-9]*"
              type="number"
              placeholder="Type the price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              maxLength={25}
              minLength={0}
            />
          </label>
        </div>
      </div>
      <label className={styles.label}>
        Address
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="Type your address"
          autoComplete="street-address"
          value={address}
          onChange={onAddressChange}
          maxLength={256}
        />
        <div
          style={
            streetAddressValidationMessage.length !== 0
              ? { borderColor: variabled.mistakeRed }
              : {}
          }
        />
        <span className={styles.validationWarningBox}>
          <div className={styles.validationWarning}>
            {streetAddressValidationMessage}
          </div>
        </span>
      </label>
      <label className={styles.label}>
        City
        <br />
        <select
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="address-level2"
          maxLength={50}
        >
          {cities.map((city) => {
            return (
              <option value={city} key={city}>
                {city}
              </option>
            );
          })}
        </select>
      </label>
      <div className={styles.postYourOfferButtonBox}>
        <button
          className={styles.postYourOfferButton}
          type="submit"
          // onClick={(e) => {
          //   dispatch(setCreateOffer(params));
          // }}
          disabled={
            productName.length === 0 ||
            description.length === 0 ||
            price.length === 0 ||
            address.length === 0
              ? true
              : false
          }
        >
          Post your offer
        </button>
      </div>
      <div className={styles.cancelButtonBox}>
        <button
          className={styles.cancelButton}
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DataForm;
