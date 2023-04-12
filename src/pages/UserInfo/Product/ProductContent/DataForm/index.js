import { useState, useEffect } from "react";
// use navigate
import { useNavigate, useLocation } from "react-router-dom";
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
import {
  // fetchProduct,
  setProduct,
  updateProductComplete,
  updateProductCancel,
  updateProductCancelsale,
} from "../../../../../store/actions/product";
import { setLoadingTrue } from "../../../../../store/actions/loading";
// component
import ProductModal from "./ProductModal";

/** product form  */
const ProductForm = () => {
  const [isShowModal, setIsShowModal] = useState();
  /** initialize */
  // parameter from router
  const {
    state: { item },
  } = useLocation();
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  /** data */
  const [productId, setProductId] = useState("");

  /** set data from router parameter */
  useEffect(() => {
    setProductName(item.productName);
    setDescription(item.description);
    setCategory(item.category);
    setCondition(item.condition);
    onAddressChange(item.address);
    setPrice(item.price);
    setCity(item.city);
  }, []);

  /** data */
  // selectbox list data
  const cities = ["Calgary", "Camrose", "Brooks"];
  // key for ui, value for param
  const categories = [
    { key: "Cars & Vehicles", value: "VEHICLES" },
    { key: "Furniture", value: "FURNITURE" },
    { key: "Electoronics", value: "ELECTORNICS" },
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
  // put product offer form
  const putParams = {
    id: item.id,
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
    dispatch(setProduct(putParams));
  }, [productName, description, category, condition, price, address, city]);

  /** functions */

  /** confirm sold */
  // params
  const params = {
    id: item.id,
  };
  const onConfirm = async () => {
    // active to false => sold out
    const response = await dispatch(updateProductComplete(params));
    if (response.status === 200) {
      // show loading
      dispatch(setLoadingTrue("Product Sold!"));
      // navigate "myListing"
      navigate("/myListings");
    }
  };

  /** cancel product post */
  const onCancel = async () => {
    const response = await dispatch(updateProductCancel(params));
    if (response.status === 200) {
      // // show loading
      dispatch(setLoadingTrue("Product Canceled!"));
      // navigate "myListings"
      navigate("/myListings");
    }
  };
  /** cancel sale */
  const onCancelsale = async () => {
    const response = await dispatch(updateProductCancelsale(params));
    if (response.status === 200) {
      // // show loading
      dispatch(setLoadingTrue("Product Sale Canceled!"));
      // navigate "myListings"
      navigate("/myListings");
    }
  };

  return (
    <div className={styles.contentBox}>
      <label className={styles.label}>
        Product name
        <br />
        <input
          disabled={item.status !== "ACTIVE"}
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
          disabled={item.status !== "ACTIVE"}
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
          disabled={item.status !== "ACTIVE"}
          className={styles.input}
          placeholder="Choose the category"
          value={category}
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
              disabled={item.status !== "ACTIVE"}
              className={styles.input}
              placeholder="Choose the condition"
              value={condition}
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
              disabled={item.status !== "ACTIVE"}
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
          disabled={item.status !== "ACTIVE"}
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
          disabled={item.status !== "ACTIVE"}
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
      {item.status === "ACTIVE" && (
        <div className={styles.postYourOfferButtonBox}>
          <button
            className={styles.postYourOfferButton}
            type="submit"
            disabled={
              productName.length === 0 ||
              description.length === 0 ||
              price.length === 0 ||
              address.length === 0
                ? true
                : false
            }
          >
            Save changes
          </button>
        </div>
      )}
      {item.status === "PENDING" && (
        <div className={styles.confirmSoldButtonBox}>
          <button
            className={styles.confirmSoldButton}
            type="button"
            onClick={onConfirm}
          >
            Confirm sold
          </button>
        </div>
      )}
      {item.status !== "COMPLETE" && (
        <div className={styles.cancelListingButtonBox}>
          <button
            className={styles.cancelListingButton}
            type="button"
            onClick={() => {
              setIsShowModal(true);
            }}
          >
            {item.status === "ACTIVE" ? "Cancel listing" : "Cancel sale"}
          </button>
        </div>
      )}
      {isShowModal && (
        <ProductModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          onClickYes={item.status === "ACTIVE" ? onCancel : onCancelsale}
          contentText={
            item.status === "ACTIVE"
              ? "You are about to cancel your listing. Are you sure?"
              : "You are about to cancel your sale. Are you sure?"
          }
        />
      )}
    </div>
  );
};

export default ProductForm;
