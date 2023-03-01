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
import { fetchAccountInformation } from "../../store/actions/accountInformation";
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

  /** options */
  // get account information options for user name
  const params = {};

  /** get data from api */
  useEffect(() => {
    const getData = async () => {
      /** api */
      const response = await dispatch(fetchAccountInformation(params));
      /** if success, set data */
      if (response.data.code === "SUCCESS") {
        const { firstName, lastName } = response.data.accountInformation;
        setUserName(firstName + " " + lastName);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          MKTFY
        </div>
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
