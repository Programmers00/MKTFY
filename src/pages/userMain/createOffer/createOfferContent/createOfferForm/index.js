import { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

/** create offer form  */
const CreateOfferForm = () => {
  /** initialize */
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const currentCreateOfferForm = useSelector(
    (state) => state.createOffer.createOfferForm
  );

  /** data */
  // selectbox list data
  const cities = ["Calgary", "Camrose", "Brooks"];
  const categories = ["CarsVehicles", "Furniture", "Electronics", "RealEstate"];
  const conditions = ["new", "used"];
  // form data
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("CarsVehicles");
  const [condition, setCondition] = useState("used");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("calgary");

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
  } = useValidator(
    currentCreateOfferForm.address?.length !== 0
      ? currentCreateOfferForm.address
      : "",
    "",
    validationAddress
  );

  /** data form for redux*/
  // create offer form
  const createOfferForm = {
    productName,
    description,
    category,
    condition,
    price,
    address,
    city,
  };

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
        <input
          className={styles.input}
          type="textArea"
          placeholder="Type the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={256}
        />
      </label>
      <label className={styles.label}>
        Category
        <br />
        <select
          className={styles.input}
          placeholder="Choose the category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
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
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              {conditions.map((condition) => {
                return (
                  <option value={condition} key={condition}>
                    {condition}
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
              ? { borderColor: variabled.red }
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
          onClick={(e) => {
            dispatch({ type: "CREATE_OFFER_FORM", createOfferForm });
          }}
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
            dispatch({ type: "INIT" });
            navigate("/");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateOfferForm;
