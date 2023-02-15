import { useState } from "react";
import { Link } from "react-router-dom";
// scss
import styles from "./index.module.scss";
// component
import Dropdown from "../../../components/dropdown";
// svg icon
import { SingOutIcon } from "../../../assets/svgIcons";

const WelcomeDropdown = ({ userName }) => {
  /** data */
  // trigger to close dropdown
  const [closeTrigger, setCloseTrigger] = useState(0);
  // notification
  const myListingCount = 3;
  // settings
  const settings = [
    { title: "Account Information", url: "/accountInformation" },
    { title: "Change password", url: "/changePassword" },
    { title: "My Purchases", url: "/myPurchases" },
    {
      title: "My listings",
      url: "/myListings",
      notification: myListingCount,
    },
  ];
  // helps
  const help = [
    { title: "FAQ", url: "/faq" },
    { title: "Contact us", url: "/contactUs" },
  ];
  /** sign out: signout and close trigger */
  const onSignOut = () => {
    console.log("##sign Out");
    onCloseTrigger();
  };

  /** triger for close dropdown */
  const onCloseTrigger = () => {
    // always make new value=> trigger
    setCloseTrigger(new Date());
  };

  return (
    <Dropdown isLeftTail closeTrigger={closeTrigger}>
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
            <Link onClick={onCloseTrigger} key={element.title} to={element.url}>
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
            <Link onClick={onCloseTrigger} key={element.title} to={element.url}>
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
  );
};

export default WelcomeDropdown;
