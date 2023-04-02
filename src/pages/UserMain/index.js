import { useEffect } from "react";

// router dom
import { Outlet } from "react-router-dom";
// layout
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
// scss
import styles from "./index.module.scss";
// webAuth from auth0-js library
import { webAuth } from "../../utils/webAuth";
// navigator
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import { setToken } from "../../store/actions/token";
import { setLoadingTrue } from "../../store/actions/loading";

/** userMain layout with private router */
const UserMain = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // dispatch for
  const dispatch = useDispatch();
  const accessToken = sessionStorage.getItem("accessToken");

  // after login, set access token
  useEffect(() => {
    // no accessToken => show loading
    !accessToken && dispatch(setLoadingTrue());
    // get access token from url by using parseHash function
    webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
      if (err) {
        // console.error("#parseHash err", err);
      } else {
        // console.log("#parseHash res", res);
        if (res === null && !accessToken) {
          // navigate to /auth
          navigate("/auth");
          return;
        }
        if (res !== null) {
          // set token in redux
          dispatch(setToken(res.accessToken));
          // set token in sesstion storage
          sessionStorage.setItem("accessToken", res.accessToken);

          // localStorage.setItem("accessToken", res.accessToken);
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
      <Footer />
    </div>
  );
};

export default UserMain;
