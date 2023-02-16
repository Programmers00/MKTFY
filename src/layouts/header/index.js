// scss
import styles from "./index.module.scss";
/** components */
// searchbar
import SearchBar from "./searchBar";
// welcome dropdown
import WelcomeDropdown from "./welcomeDropdown";
// notification dropdwon
import NotificationDropdown from "./notificationDropdown";
// Navbar
import { Navbar } from "./navbar";

const Header = () => {
  const userName = "Pearl The Cat";

  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo}>MKTFY</div>
        <SearchBar></SearchBar>
        <WelcomeDropdown userName={userName} />
        <NotificationDropdown />
        <div>Notification</div>
        <div>Create Offer</div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};
export default Header;
