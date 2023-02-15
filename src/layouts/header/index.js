// scss
import styles from "./index.module.scss";
// searchbar
import SearchBar from "../../components/searchBar";
// Navbar
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <div className={styles.headerMainBox}>
      <div className={styles.headerContentBox}>
        <div className={styles.logo}>MKTFY</div>
        <SearchBar></SearchBar>
        <div>User</div>
        <div>Notification</div>
        <div>Create Offer</div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};
export default Header;
