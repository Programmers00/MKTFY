// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// icons
import { HamburgerIcon } from "../../../assets/svgIcons";
// redux
import { useDispatch, useSelector } from "react-redux";
import { resetSearchParams } from "../../../store/actions/navbar";
/** navber in header */
export const Navbar = () => {
  // redux dispatch
  const dispatch = useDispatch();
  /** data */
  // navbar title, url
  const navbar = [
    { title: "Deals", url: "/" },
    { title: "CarsVehicles ", url: "/carsVehicles" },
    { title: "Furniture", url: "/furniture" },
    { title: "Electronics", url: "electronics" },
    { title: "RealEstate", url: "/realEstate" },
  ];
  /** functions */
  /** click navigation: reset search params(redux) */
  const onClick = () => {
    dispatch(resetSearchParams());
  };

  return (
    <nav className={styles.navbarMainBox}>
      <ul>
        <form
          onClick={() => {
            console.log("#clicked category");
          }}
        >
          <label>
            <HamburgerIcon />
          </label>
          <input value="Category" type="button" />
        </form>
        {navbar.map((element) => (
          <Link key={element.title} to={element.url}>
            <li onClick={onClick}>{element.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
