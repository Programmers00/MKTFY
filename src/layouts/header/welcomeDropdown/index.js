import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// component
import Dropdown from "../../../components/dropdown";
// svg icon
import { SingOutIcon } from "../../../assets/svgIcons";

const welcomeDropdown = ({ userName }) => {
  console.log("##userName", userName);
  const myListingNotificationCount = 3;
  const settings = [
    { title: "Account Information", url: "/accountInformation" },
    { title: "Change password", url: "/changePassword" },
    { title: "My Purchases", url: "/myPurchases" },
    {
      title: "My listings",
      url: "/myListings",
      notification: myListingNotificationCount,
    },
  ];
  const help = [
    { title: "FAQ", url: "/faq" },
    { title: "Contact us", url: "/contactUs" },
  ];

  const onSignOut = () => {
    console.log("##sign Out");
  };

  return (
    <>
      <Dropdown isLeftTail>
        {/* button */}
        <div className={styles.userTitle}>
          <span className={styles.welcome}>Welcome back</span>
          <span className={styles.userName}>{userName}</span>
        </div>
        {/* content */}
        <div className={styles.userContent}>
          <div className={styles.infoBox}>
            <div className={styles.circle}>{userName?.charAt(0)}</div>
            <span className={styles.userName}>{userName}</span>
          </div>
          <div className={styles.contentBox}>
            <span>Settings</span>
            {settings.map((element) => (
              <Link key={element.title} to={element.url}>
                <p>{element.title}</p>
                {element.notification && (
                  <div className={styles.notification}>
                    {element.notification}
                  </div>
                )}
              </Link>
            ))}
          </div>
          <div className={styles.contentBox}>
            <span>Help</span>
            {help.map((element) => (
              <Link key={element.title} to={element.url}>
                <p>{element.title}</p>
                {element.notification && (
                  <div className={styles.notification}>
                    {element.notification}
                  </div>
                )}
              </Link>
            ))}
          </div>
          <div className={styles.signOutBox} onClick={onSignOut}>
            <a>
              <p>Sign Out</p>
              <SingOutIcon />
            </a>
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default welcomeDropdown;
