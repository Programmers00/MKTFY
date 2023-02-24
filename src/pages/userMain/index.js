import { useEffect } from "react";

// router dom
import { Outlet } from "react-router-dom";
// layout
import Header from "../../layouts/header";
// scss
import styles from "./index.module.scss";
// webAuth from auth0-js
import { webAuth } from "../../utils/webAuth";

/** userMain layout with private router */
const UserMain = () => {
  // after login, set access token
  useEffect(() => {
    webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
      if (err) {
        console.error("#parseHash err", err);
      } else {
        console.log("#parseHash res", res);
        sessionStorage.setItem("access_token", res.accessToken);
        // sessionStorage.setItem("id_token", res.idToken);
        // sessionStorage.setItem("nonce", res.idTokenPayload.nonce);
      }
    });
  }, []);

  return (
    <div className={styles.userMainBox}>
      {/* layout header, content(outlet)  */}
      <Header />
      <Outlet />
    </div>
  );
};

export default UserMain;
