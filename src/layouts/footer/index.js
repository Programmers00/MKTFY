// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";

/** data */
const detail =
  "Here at MKTFY we are human centric. We believe the stuff we buy, share and give are the backbone of our society — and we hope to ensure that we do this in a conscious way.";
const navigation = [
  {
    title: "Settings",
    data: [
      { title: "Account information", url: "/accountInformation" },
      { title: "Change password", url: "/changePassword" },
      { title: "My purchases", url: "/myPurchases" },
      { title: "My listings", url: "/myListings" },
    ],
  },
  {
    title: "Help",
    data: [
      { title: "FAQ", url: "/faq" },
      { title: "Contact us", url: "contactUs" },
    ],
  },
];

/** Footer */
const Footer = () => {
  return (
    <div className={styles.footerMainBox}>
      {/* title */}
      <span className={styles.title}>MKTFY</span>
      {/* content */}
      <div className={styles.content}>
        {/* left detail */}
        <div className={styles.detail}>{detail}</div>
        {/* right navigation */}
        <div className={styles.navigationBox}>
          {navigation.map((element) => (
            <div key={element.title} className={styles.navigation}>
              <span className={styles.title}>{element.title}</span>
              <ul>
                {element.data.map((data) => (
                  <Link key={data.title} to={data.url}>
                    <li>{data.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* divistion line */}
      <hr className={styles.divisionLine} />
      {/* copyright */}
      <span className={styles.copyright}>
        Copyright @NOhBUG @Launchpad by Vog 2023
      </span>
    </div>
  );
};
export default Footer;
