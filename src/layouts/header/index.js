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
import { useSelector } from "react-redux";
/** header in layout */
const Header = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // dispatch
  // use selector
  const accountInformation = useSelector((state) => {
    return state.accountInformation;
  });
  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          MKTFY
        </div>
        <SearchBar></SearchBar>
        <div className={styles.buttons}>
          <WelcomeDropdown
            userName={
              accountInformation.firstName + " " + accountInformation.lastName
            }
          />
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
