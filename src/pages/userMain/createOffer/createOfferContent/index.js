import { useEffect, useState, useRef } from "react";
// scss
import styles from "./index.module.scss";
// scss style variabled for color
import variabled from "../../../../styles/_variabled.scss";
// svg icons
import { CameraIcon, XIcon } from "../../../../assets/svgIcons";

import ImageUploader from "./imageUploader";
const CreateOfferContent = ({
  images,
  setProductName,
  setDescription,
  setCategory,
  setCondition,
  setPrice,
  setAddress,
  setCity,
  setImages,
}) => {
  /** data */

  // select box cities list
  const cityList = ["Calgary", "Camrose", "Brooks"];
  // drag state

  return (
    <div className={styles.createOfferContentBox}>
      <form
        className={styles.createOfferContentForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ImageUploader images={images} setImages={setImages} />

        <div className={styles.formContent}>
          <label className={styles.label}>
            Product name
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="Product name"
              autoFocus
              // value={productName}
              // onChange={onProductNameChange}
              autoComplete="given-name"
              maxLength={256}
              // style={
              //   firstNameValidationMessage.length !== 0
              //     ? { borderColor: variabled.red }
              //     : {}
              // }
            />
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {/* {firstNameValidationMessage} */}
              </div>
            </span>
          </label>
          <label className={styles.label}>
            Description
            <br />
            <input
              className={styles.input}
              type="textArea"
              placeholder="Description"
              // value={lastName}
              // onChange={onLastNameChange}
              autoComplete="family-name"
              maxLength={256}
              // style={
              //   lastNameValidationMessage.length !== 0
              //     ? { borderColor: variabled.red }
              //     : {}
              // }
            />
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {/* {lastNameValidationMessage} */}
              </div>
            </span>
          </label>
          <label className={styles.label}>
            Category
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="Choose category"
              // value={streetAddress}
              // onChange={onStreetAddressChange}
              // style={
              //   streetAddressValidationMessage.length !== 0
              //     ? { borderColor: variabled.red }
              //     : {}
              // }
            />
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {/* {streetAddressValidationMessage} */}
              </div>
            </span>
          </label>
          <div>
            <label className={styles.label}>
              Condition
              <br />
              <select
                className={styles.input}
                placeholder="Choose condition"
                // value={city}
                // onChange={onCityChange}
                // style={
                //   cityValidationMessage.length !== 0
                //     ? { borderColor: variabled.red }
                //     : {}
                // }
              >
                {cityList.map((condition) => {
                  return (
                    <option value={condition} key={condition}>
                      {condition}
                    </option>
                  );
                })}
              </select>
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {/* {cityValidationMessage} */}
                </div>
              </span>
            </label>
            <label className={styles.label}>
              Price
              <br />
              <input
                className={styles.input}
                type="text"
                placeholder="Type your price"
                // value={streetAddress}
                // onChange={onStreetAddressChange}
                maxLength={60}
                // style={
                //   streetAddressValidationMessage.length !== 0
                //     ? { borderColor: variabled.red }
                //     : {}
                // }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {/* {streetAddressValidationMessage} */}
                </div>
              </span>
            </label>
          </div>
          <label className={styles.label}>
            Address
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="Type your address"
              autoComplete="street-address"
              // value={firstName}
              // onChange={onFirstNameChange}
              maxLength={256}
              // style={
              //   firstNameValidationMessage.length !== 0
              //     ? { borderColor: variabled.red }
              //     : {}
              // }
            />
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {/* {firstNameValidationMessage} */}
              </div>
            </span>
          </label>
          <label className={styles.label}>
            City
            <br />
            <select
              className={styles.input}
              placeholder="City name"
              // value={city}
              // onChange={onCityChange}
              autoComplete="address-level2"
              maxLength={50}
              // style={
              //   cityValidationMessage.length !== 0
              //     ? { borderColor: variabled.red }
              //     : {}
              // }
            >
              {cityList.map((city) => {
                return (
                  <option value={city} key={city}>
                    {city}
                  </option>
                );
              })}
            </select>
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {/* {cityValidationMessage} */}
              </div>
            </span>
          </label>
          <div className={styles.nextButtonBox}>
            <button
              className={styles.nextButton}
              type="submit"
              // disabled={
              // firstName.length === 0 ||
              // lastName.length === 0 ||
              // email.length === 0 ||
              // phone.length === 0 ||
              // streetAddress.length === 0 ||
              // city.length === 0 ||
              // province.length === 0 ||
              // country.length === 0 ||
              // firstNameValidationMessage.length !== 0 ||
              // lastNameValidationMessage.length !== 0 ||
              // emailValidationMessage.length !== 0 ||
              // phoneValidationMessage.length !== 0 ||
              // streetAddressValidationMessage.length !== 0 ||
              // cityValidationMessage.length !== 0 ||
              // provinceValidationMessage.length !== 0 ||
              // countryValidationMessage.length !== 0
              //   ? true
              //   : false
              // }
            >
              Next
            </button>
          </div>
          <div className={styles.nextButtonBox}>
            <button
              className={styles.nextButton}
              type="submit"
              // disabled={
              // firstName.length === 0 ||
              // lastName.length === 0 ||
              // email.length === 0 ||
              // phone.length === 0 ||
              // streetAddress.length === 0 ||
              // city.length === 0 ||
              // province.length === 0 ||
              // country.length === 0 ||
              // firstNameValidationMessage.length !== 0 ||
              // lastNameValidationMessage.length !== 0 ||
              // emailValidationMessage.length !== 0 ||
              // phoneValidationMessage.length !== 0 ||
              // streetAddressValidationMessage.length !== 0 ||
              // cityValidationMessage.length !== 0 ||
              // provinceValidationMessage.length !== 0 ||
              // countryValidationMessage.length !== 0
              //   ? true
              //   : false
              // }
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateOfferContent;
