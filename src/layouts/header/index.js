import { useEffect, useState } from "react";
// scss
import styles from "./index.module.scss";
// naviagate
import { useNavigate } from "react-router-dom";
/** components */
// searchbar
import SearchBar from "./searchBar";
// welcome dropdown
import WelcomeDropdown from "./welcomeDropdown";
// notification dropdwon
import NotificationDropdown from "./notificationDropdown";
// navbar
import { Navbar } from "./navbar";
// button
import { PlusIcon } from "../../assets/svgIcons";
// user name from redux
import { useDispatch } from "react-redux";
import { getAccountInformation } from "../../store/actions/accountInformation";
/** header in layout */
const Header = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  /** data */
  // welcome back user name
  const [userName, setUserName] = useState("");
  /** request options */
  // get account information options for user name
  const getAccountInformationOptions = {
    url: "/api/user/accountInformation",
    params: {},
  };

  useEffect(() => {
    const getData = async () => {
      try {
        /** redux request api*/
        // request account information for user name
        const responseAccountInformation = await dispatch(
          getAccountInformation(getAccountInformationOptions)
        );

        /** set response data*/
        // set user name from account information
        setUserName(
          responseAccountInformation.data.accountInformation.firstName +
            " " +
            responseAccountInformation.data.accountInformation.lastName
        );
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo}>MKTFY</div>
        <SearchBar></SearchBar>
        <div className={styles.buttons}>
          <WelcomeDropdown userName={userName} />
          <NotificationDropdown />
          <div className={styles.buttonBox}>
            <button
              className={styles.button}
              type="btton"
              // go to create lising page
              onClick={() => navigate("/createOffer")}
            >
              <PlusIcon />
              <span>Create Offer</span>
            </button>
          </div>
        </div>
      </div>

      <Navbar></Navbar>
    </div>
  );
};
export default Header;
