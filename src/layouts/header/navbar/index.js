// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// icons
import { HamburgerIcon } from "../../../assets/svgIcons";
export const Navbar = () => {
  const navbar = [
    { url: "/", title: "Deals" },
    { url: "/carsVehicles", title: "CarsVehicles" },
    { url: "/furniture", title: "Furniture" },
    { url: "electronics", title: "Electronics" },
    { url: "/realEstate", title: "RealEstate" },
  ];
  return (
    <nav className={styles.navbarMainBox}>
      <ul>
        <form
          onClick={() => {
            console.log("#");
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
