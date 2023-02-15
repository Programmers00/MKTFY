// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// searchbar
import SearchBar from "./searchBar";
// Navbar
import { Navbar } from "./navbar";
// import Dropdown from "../../components/dropdown";
// // svg icon
// import { SingOutIcon } from "../../assets/svgIcons";
import WelcomeDropdown from "./welcomeDropdown";

const Header = () => {
  const userName = "Pearl The Cat";

  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo}>MKTFY</div>
        <SearchBar></SearchBar>
        <WelcomeDropdown userName={userName} />
        <div>User</div>
        <div>Notification</div>
        <div>Create Offer</div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};
export default Header;
