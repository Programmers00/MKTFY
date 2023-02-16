// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// icons
import { HamburgerIcon } from "../../../assets/svgIcons";
/** navber in header */
export const Navbar = () => {
  /** data */
  // navbar title, url
  const navbar = [
    { title: "Deals", url: "/" },
    { title: "CarsVehiclesurl ", url: "/carsVehicles" },
    { title: "Furniture", url: "/furniture" },
    { title: "Electronics", url: "electronics" },
    { title: "RealEstate", url: "/realEstate" },
  ];
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
            <li>{element.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
