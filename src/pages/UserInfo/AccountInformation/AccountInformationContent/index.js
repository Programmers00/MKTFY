import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
// scss styles
import styles from "./index.module.scss";
// use validator hook
import { useValidator } from "../../../../hooks/useValidator";
// constants for regex, validations
import { regex, validationMessage } from "../../../../constants";
// naviagate
import { useNavigate } from "react-router-dom";
// useDispatch for sending action to redux
import { useDispatch, useSelector } from "react-redux";
import { updateAccountInformation } from "../../../../store/actions/accountInformation";
import { setLoadingTrue } from "../../../../store/actions/loading";

/** AccountInformation */
const AccountInformation = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const accountInformation = useSelector((state) => {
    return state.accountInformation;
  });

  /** data */
  // formattedPhoneNumber
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  // select box cities list
  const cityList = ["Calgary", "Camrose", "Brooks"];
  // validations data
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
  // const validationProvince = {
  //   // regex
  //   regex: regex.province,
  //   // validation error messagevalidation
  //   message: validationMessage.province,
  // };
  // 8. country
  // const validationCountry = {
  //   // regex
  //   regex: regex.country,
  //   // validation error messagevalidation
  //   message: validationMessage.country,
  // };

  /** hooks */
  // useValidator hooks
  // 1. first name
  const {
    value: firstName,
    onChange: onFirstNameChange,
    validationMessage: firstNameValidationMessage,
  } = useValidator(
    accountInformation.firstName?.length !== 0
      ? accountInformation.firstName
      : "",
    "",
    validationFirstName
  );
  // 2. last name
  const {
    value: lastName,
    onChange: onLastNameChange,
    validationMessage: lastNameValidationMessage,
  } = useValidator(
    accountInformation.lastName?.length !== 0
      ? accountInformation.lastName
      : "",
    "",
    validationLastName
  );
  // 3. email
  const {
    value: email,
    onChange: onEmailChange,
    validationMessage: emailValidationMessage,
  } = useValidator(
    accountInformation.email.length !== 0 ? accountInformation.email : "",
    "",
    validationEmail
  );
  // 4. phone
  const {
    value: phone,
    onChange: onPhoneChange,
    validationMessage: phoneValidationMessage,
  } = useValidator(
    accountInformation.phone?.length !== 0 ? accountInformation.phone : "",
    "",
    validationPhone
  );
  // 5. street address
  const {
    value: streetAddress,
    onChange: onStreetAddressChange,
    validationMessage: streetAddressValidationMessage,
  } = useValidator(
    accountInformation.streetAddress?.length !== 0
      ? accountInformation.streetAddress
      : "",
    "",
    validationStreetAddress
  );
  // 6. city
  const {
    value: city,
    onChange: onCityChange,
    validationMessage: cityValidationMessage,
  } = useValidator(
    accountInformation.city?.length !== 0 ? accountInformation.city : "Calgary",
    "",
    validationCity
  );
  // 7. province
  // const {
  //   value: province,
  //   onChange: onProvinceChange,
  //   validationMessage: provinceValidationMessage,
  // } = useValidator(
  //   accountInformation.province?.length !== 0
  //     ? accountInformation.province
  //     : "",
  //   "",
  //   validationProvince
  // );
  // 8. country
  // const {
  //   value: country,
  //   onChange: onCountryChange,
  //   validationMessage: countryValidationMessage,
  // } = useValidator(
  //   accountInformation.country?.length !== 0 ? accountInformation.country : "",
  //   "",
  //   validationCountry
  // );
  /** update params form for redux*/
  const updateParams = {
    id: accountInformation.id,
    email,
    firstName,
    lastName,
    phone,
    address: streetAddress,
    city,
    // province,
    // country,
  };

  /** get data from api */
  useEffect(() => {
    onFirstNameChange(accountInformation.firstName);
    onLastNameChange(accountInformation.lastName);
    onEmailChange(accountInformation.email);
    onPhoneChange(accountInformation.phone);
    onStreetAddressChange(accountInformation.streetAddress);
    onCityChange(accountInformation.city);
    // onProvinceChange(accountInformation.province);
    // onCountryChange(accountInformation.country);
  }, []);

  /** functions */
  /** click submit button => save sinup form in redux and go userMain page*/
  const onClickSubmit = async (event) => {
    event.preventDefault();
    /** api: update account information */
    const response = await dispatch(updateAccountInformation(updateParams));
    if (response.status === 200) {
      // set loading page for 2seconds
      dispatch(setLoadingTrue("Account Information Changed!"));
      // need success page
      navigate("/");
    }
  };

  /** formatter for phone number */
  const formatterPhoneNumber = (value) => {
    // if input value is nothing, default return +1
    if (!value) return `+1${value}`;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // if phoneNumberLength is less than 2, return +1
    if (phoneNumberLength < 2) {
      return `+1`;
    }
    // if phoneNumberLength is less than 5, return +1 (000
    if (phoneNumberLength < 5) {
      return `+1 (${phoneNumber.slice(1, 4)}`;
    }
    // if phoneNumberLength is less than 8, return +1 (000) 000
    if (phoneNumberLength < 8) {
      return `+1 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
    // finally, return +1 (000) 000-0000
    return `+1 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7)}`;
  };

  /** uesEffect */
  // realtime set formatted phone number
  useEffect(() => {
    setFormattedPhoneNumber(formatterPhoneNumber(phone));
  }, [phone]);

  return (
    <div className={styles.accountInformationBox}>
      <form className={styles.registerForm} onSubmit={onClickSubmit}>
        <div className={styles.leftBox}>
          <span className={styles.leftBoxTitle}>Personal information</span>
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
              maxLength={256}
              style={
                firstNameValidationMessage.length !== 0
                  ? { borderColor: variabled.mistakeRed }
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
              maxLength={256}
              style={
                lastNameValidationMessage.length !== 0
                  ? { borderColor: variabled.mistakeRed }
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
                  ? { borderColor: variabled.mistakeRed }
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
              value={formattedPhoneNumber}
              onChange={onPhoneChange}
              autoComplete="tel"
              maxLength={17}
              style={
                phoneValidationMessage.length !== 0
                  ? { borderColor: variabled.mistakeRed }
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
          <span className={styles.rightBoxTitle}>Address information</span>
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
              maxLength={60}
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
              placeholder="City name"
              value={city}
              onChange={onCityChange}
              autoComplete="address-level2"
              maxLength={50}
              style={
                cityValidationMessage.length !== 0
                  ? { borderColor: variabled.mistakeRed }
                  : {}
              }
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
                {cityValidationMessage}
              </div>
            </span>
          </label>
          {/* <div className={styles.cityProvinceBox}>
            <label className={styles.label}>
              City
              <br />
              <select
                className={styles.input}
                placeholder="City name"
                value={city}
                onChange={onCityChange}
                autoComplete="address-level2"
                maxLength={50}
                style={
                  cityValidationMessage.length !== 0
                    ? { borderColor: variabled.mistakeRed }
                    : {}
                }
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
                    ? { borderColor: variabled.mistakeRed }
                    : {}
                }
              />
              <span className={styles.validationWarningBox}>
                <div className={styles.validationWarning}>
                  {provinceValidationMessage}
                </div>
              </span>
            </label>
          </div> */}
          {/* <label className={styles.countryLabel}>
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
                  ? { borderColor: variabled.mistakeRed }
                  : {}
              }
            />
            <span className={styles.validationWarningBox}>
              <div className={styles.validationWarning}>
                {countryValidationMessage}
              </div>
            </span>
          </label> */}
          <div className={styles.saveButtonBox}>
            <button
              className={styles.saveButton}
              type="submit"
              disabled={
                firstName.length === 0 ||
                lastName.length === 0 ||
                email.length === 0 ||
                phone.length === 0 ||
                streetAddress.length === 0 ||
                city.length === 0 ||
                // province.length === 0 ||
                // country.length === 0 ||
                firstNameValidationMessage.length !== 0 ||
                lastNameValidationMessage.length !== 0 ||
                emailValidationMessage.length !== 0 ||
                phoneValidationMessage.length !== 0 ||
                streetAddressValidationMessage.length !== 0 ||
                cityValidationMessage.length !== 0
                  ? //   ||
                    // provinceValidationMessage.length !== 0 ||
                    // countryValidationMessage.length !== 0
                    true
                  : false
              }
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AccountInformation;
