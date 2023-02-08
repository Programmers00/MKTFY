import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../styles/_variabled.scss";
// scss styles
import styles from "./createAccount.module.scss";
// Modal Component
import Modal from "../../../components/modal";
// use validator hook
import { useValidator } from "../../../hooks/useValidator";
// constants
import { regex, validationMessage } from "../../../constants";
// options for regex, validations
import { useNavigate } from "react-router-dom";

/** CreateAccount */
const CreateAccount = () => {
  // navigate
  const navigate = useNavigate();
  // validations
  // 1. first name
  const validationFirstName = {
    // regex
    regex: regex.firstName,
    // validation error messagevalidation
    message: validationMessage.firstName,
  };
  // 2. last name
  const validationLastName = {
    // regex
    regex: regex.lastName,
    // validation error messagevalidation
    message: validationMessage.lastName,
  };
  // 3. email
  const validationEmail = {
    // regex
    regex: regex.email,
    // validation error messagevalidation
    message: validationMessage.email,
  };
  // 4. phone
  const validationPhone = {
    // regex
    regex: regex.phone,
    // validation error messagevalidation
    message: validationMessage.phone,
  };
  // 5. street address
  const validationStreetAddress = {
    // regex
    regex: regex.streetAddress,
    // validation error messagevalidation
    message: validationMessage.streetAddress,
  };
  // 6. city
  const validationCity = {
    // regex
    regex: regex.city,
    // validation error messagevalidation
    message: validationMessage.city,
  };
  // 7. province
  const validationProvince = {
    // regex
    regex: regex.province,
    // validation error messagevalidation
    message: validationMessage.province,
  };
  // 8. country
  const validationCountry = {
    // regex
    regex: regex.country,
    // validation error messagevalidation
    message: validationMessage.country,
  };

  // useValidator hooks
  // 1. first name
  const {
    value: firstName,
    onChange: onFirstNameChange,
    validationMessage: firstNameValidationMessage,
  } = useValidator("", "", validationFirstName);
  // 2. last name
  const {
    value: lastName,
    onChange: onLastNameChange,
    validationMessage: lastNameValidationMessage,
  } = useValidator("", "", validationLastName);
  // 3. email
  const {
    value: email,
    onChange: onEmailChange,
    validationMessage: emailValidationMessage,
  } = useValidator("", "", validationEmail);
  // 4. phone
  const {
    value: phone,
    onChange: onPhoneChange,
    validationMessage: phoneValidationMessage,
  } = useValidator("", "", validationPhone);
  // 5. street address
  const {
    value: streetAddress,
    onChange: onStreetAddressChange,
    validationMessage: streetAddressValidationMessage,
  } = useValidator("", "", validationStreetAddress);
  // 6. city
  const {
    value: city,
    onChange: onCityChange,
    validationMessage: cityValidationMessage,
  } = useValidator("", "", validationCity);
  // 7. province
  const {
    value: province,
    onChange: onProvinceChange,
    validationMessage: provinceValidationMessage,
  } = useValidator("", "", validationProvince);
  // 8. country
  const {
    value: country,
    onChange: onCountryChange,
    validationMessage: countryValidationMessage,
  } = useValidator("", "", validationCountry);

  /** click submit button => call api*/
  const onClickSubmit = async (event) => {
    event.preventDefault();
    console.log("##submit", registerForm);
    navigate("/auth/createPassword");
  };
  // register form
  const registerForm = {
    firstName,
    lastName,
    email,
    phone,
    streetAddress,
    city,
  };

  return (
    <Modal>
      <div className={styles.createAccountBox}>
        <span className={styles.title}>Welcome to MKTFY!</span>
        <span className={styles.subTitle}>
          It’s nice to meet you. At MKTFY you are able to buy, sell and donate
          awesome stuff to a community of awesome people. Please fill out the
          form below to get started.
        </span>
        <form className={styles.registerForm} onSubmit={onClickSubmit}>
          <div className={styles.leftBox}>
            <label className={styles.label}>
              First Name
              <br />
              <input
                className={styles.input}
                type="text"
                placeholder="Your first name"
                autoFocus
                value={firstName}
                onChange={onFirstNameChange}
                autoComplete="given-name"
                maxLength={20}
                style={
                  firstNameValidationMessage.length !== 0
                    ? { borderColor: variabled.red }
                    : {}
                }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {firstNameValidationMessage}
                </div>
              </span>
            </label>
            <label className={styles.label}>
              Last Name
              <br />
              <input
                className={styles.input}
                type="text"
                placeholder="Your last name"
                value={lastName}
                onChange={onLastNameChange}
                autoComplete="family-name"
                maxLength={20}
                style={
                  lastNameValidationMessage.length !== 0
                    ? { borderColor: variabled.red }
                    : {}
                }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {lastNameValidationMessage}
                </div>
              </span>
            </label>
            <label className={styles.label}>
              Email
              <br />
              <input
                className={styles.input}
                style={
                  emailValidationMessage.length !== 0
                    ? { borderColor: variabled.red }
                    : {}
                }
                type="text"
                value={email}
                onChange={onEmailChange}
                placeholder="Insert your email"
                autoComplete="email"
                maxLength={320}
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {emailValidationMessage}
                </div>
              </span>
            </label>
            <label className={styles.label}>
              Phone
              <br />
              <input
                className={styles.input}
                type="tel"
                placeholder="+1(000)000-0000"
                value={phone}
                onChange={onPhoneChange}
                autoComplete="tel"
                maxLength={15}
                style={
                  phoneValidationMessage.length !== 0
                    ? { borderColor: variabled.red }
                    : {}
                }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {phoneValidationMessage}
                </div>
              </span>
            </label>
          </div>
          <div className={styles.rightBox}>
            <label className={styles.label}>
              Street address
              <br />
              <input
                className={styles.input}
                type="text"
                placeholder="Insert your address"
                value={streetAddress}
                onChange={onStreetAddressChange}
                autoComplete="street-address"
                maxLength={50}
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
            <div className={styles.cityProvinceBox}>
              <label className={styles.label}>
                City
                <br />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="City name"
                  value={city}
                  onChange={onCityChange}
                  autoComplete="address-level2"
                  maxLength={50}
                  style={
                    cityValidationMessage.length !== 0
                      ? { borderColor: variabled.red }
                      : {}
                  }
                />
                <span className={styles.validationWarningBox}>
                  <div className={styles.validationWarning}>
                    {cityValidationMessage}
                  </div>
                </span>
              </label>
              <label className={styles.label}>
                Province
                <br />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your province"
                  value={province}
                  onChange={onProvinceChange}
                  autoComplete="address-level1"
                  maxLength={50}
                  style={
                    provinceValidationMessage.length !== 0
                      ? { borderColor: variabled.red }
                      : {}
                  }
                />
                <span className={styles.validationWarningBox}>
                  <div className={styles.validationWarning}>
                    {provinceValidationMessage}
                  </div>
                </span>
              </label>
            </div>
            <label className={styles.countryLabel}>
              Country
              <br />
              <input
                className={styles.input}
                type="text"
                placeholder="Country name"
                value={country}
                onChange={onCountryChange}
                autoComplete="country"
                maxLength={50}
                style={
                  countryValidationMessage.length !== 0
                    ? { borderColor: variabled.red }
                    : {}
                }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {countryValidationMessage}
                </div>
              </span>
            </label>
            <div className={styles.nextButtonBox}>
              <button
                className={styles.nextButton}
                type="submit"
                disabled={
                  firstName.length === 0 ||
                  lastName.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  streetAddress.length === 0 ||
                  city.length === 0 ||
                  province.length === 0 ||
                  country.length === 0 ||
                  firstNameValidationMessage.length !== 0 ||
                  lastNameValidationMessage.length !== 0 ||
                  emailValidationMessage.length !== 0 ||
                  phoneValidationMessage.length !== 0 ||
                  streetAddressValidationMessage.length !== 0 ||
                  cityValidationMessage.length !== 0 ||
                  provinceValidationMessage.length !== 0 ||
                  countryValidationMessage.length !== 0
                    ? true
                    : false
                }
              >
                Next
              </button>
            </div>
          </div>
        </form>
        <span className={styles.footTitle}>
          At MKTFY we respect your privacy and do not tolerate spam, and will
          never sell, rent, lease or give away your information. We only buy,
          sell or donate your stuff here at MKTFY.
        </span>
      </div>
    </Modal>
  );
};
export default CreateAccount;
