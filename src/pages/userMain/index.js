import { useEffect } from "react";

// router dom
import { Outlet } from "react-router-dom";
// layout
import Header from "../../layouts/header";
// scss
import styles from "./index.module.scss";
// webAuth from auth0-js library
import { webAuth } from "../../utils/webAuth";
// navigator
import { useNavigate } from "react-router-dom";

/** userMain layout with private router */
const UserMain = () => {
  const navigate = useNavigate();
  // after login, set access token
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    // get access token from url by using parseHash function
    webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
      if (err) {
        // console.error("#parseHash err", err);
      } else {
        // console.log("#parseHash res", res);
        if (res === null && !accessToken) {
          navigate("/auth");
          return;
        }
        if (res !== null) {
          localStorage.setItem("accessToken", res.accessToken);
          // localStorage.setItem("idToken", res.idToken);
          // localStorage.setItem("nonce", res.idTokenPayload.nonce);
        }
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
