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
  fetchProduct,
  setProduct,
  updateProduct,
  removeProduct,
} from "../../../../../store/actions/product";
import { setLoadingTrue } from "../../../../../store/actions/loading";
// component
import CancelListingModal from "./cancelListingModal";

/** product form  */
const ProductForm = () => {
  const [isShowModal, setIsShowModal] = useState();
  /** initialize */
  // parameter from router
  const { state } = useLocation();
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  /** data */
  const [productId, setProductId] = useState("");

  /** get params */
  const getParams = {
    id: productId,
  };

  /** set data from router parameter */
  useEffect(() => {
    setProductId(state.id);
  }, []);

  /** set data from router parameter */
  useEffect(() => {
    const getData = async () => {
      // when product id is
      if (productId !== "") {
        try {
          // request fetch product
          const response = await dispatch(fetchProduct(getParams));
          // when success, set data
          if (response.data.code === "SUCCESS") {
            const { item } = response.data;
            setProductName(item.productName);
            setDescription(item.description);
            setCategory(item.category);
            setCondition(item.condition);
            onAddressChange(item.address);
            setPrice(item.price);
            setCity(item.city);
          }
        } catch (error) {}
      }
    };
    getData();
  }, [productId]);

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
  const [price, setPrice] = useState(0);
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
  } = useValidator("", "", validationAddress);

  /** data form for redux*/
  // put product offer form
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
    dispatch(setProduct(params));
  }, [productName, description, category, condition, price, address, city]);

  /** functions */

  /** confirm sold */
  // params
  const putParams = {
    id: productId,
    active: false,
  };
  const onConfirm = async () => {
    // active to false => sold out
    const response = await dispatch(updateProduct(putParams));
    if (response.data.code === "SUCCESS") {
      // show loading
      dispatch(setLoadingTrue("Product Sold!"));
      // navigate "myListing"
      navigate("/myListings");
    }
  };

  /** cancel product post */
  // params
  const deleteParams = {
    id: productId,
  };
  const onCancel = async () => {
    const response = await dispatch(removeProduct(deleteParams));
    if (response.data.code === "SUCCESS") {
      // // show loading
      dispatch(setLoadingTrue("Product Canceled!"));
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
      <div className={styles.confirmSoldButtonBox}>
        <button
          className={styles.confirmSoldButton}
          type="button"
          onClick={onConfirm}
        >
          Confirm sold
        </button>
      </div>
      <div className={styles.cancelListingButtonBox}>
        <button
          className={styles.cancelListingButton}
          type="button"
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          Cancel listing
        </button>
      </div>
      {isShowModal && (
        <CancelListingModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          onClickYes={onCancel}
        />
      )}
    </div>
  );
};

export default ProductForm;
