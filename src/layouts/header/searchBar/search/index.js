// scss
import styles from "./index.module.scss";
// svg icon
import { MagnifierIcon } from "../../../../assets/svgIcons";

/** search component only for search bar */
const Search = ({ search, setSearch, onSubmit }) => {
  return (
    <div className={styles.searchBox}>
      <input
        placeholder="Search on MTKFY"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button className={styles.magnifier} onClick={onSubmit}>
        <MagnifierIcon />
      </button>
    </div>
  );
};

export default Search;
