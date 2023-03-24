// router
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";

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

const Footer = () => {
  return (
    <div className={styles.footerMainBox}>
      <span className={styles.title}>MKTFY</span>
      <div className={styles.content}>
        <div className={styles.detail}>{detail}</div>
        <div className={styles.navigationBox}>
          {navigation.map((element) => (
            <div className={styles.navigation}>
              <span className={styles.title}>{element.title}</span>
              <ul>
                {element.data.map((data) => (
                  <Link key={data.title} to={data.url}>
                    <li onClick={() => {}}>{data.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className={styles.divisionLine} />
      <span className={styles.copyright}>Copyright @Launchpad by Vog 2021</span>
    </div>
  );
};
export default Footer;
