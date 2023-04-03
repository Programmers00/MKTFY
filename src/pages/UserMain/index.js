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
import { useDispatch } from "react-redux";
// actions
import { setToken } from "../../store/actions/token";
import { setLoadingTrue } from "../../store/actions/loading";
import {
  createAccountInformation,
  fetchAccountInformation,
} from "../../store/actions/accountInformation";

/** userMain layout with private router */
const UserMain = () => {
  /** initialize */
  // navigate
  const navigate = useNavigate();
  // dispatch for
  const dispatch = useDispatch();
  const accessToken = sessionStorage.getItem("accessToken");

  const signupFormFromSessionStorage = JSON.parse(
    sessionStorage.getItem("signupForm")
  );

  /** function: signup api */
  const singup = async () => {
    // signup form
    const signupForm = {
      id: `auth0|${signupFormFromSessionStorage.Id}`,
      email: signupFormFromSessionStorage.email,
      city: signupFormFromSessionStorage.userMetadata.city,
      firstName: signupFormFromSessionStorage.userMetadata.firstName,
      lastName: signupFormFromSessionStorage.userMetadata.lastName,
      phone: signupFormFromSessionStorage.userMetadata.phone,
      address: signupFormFromSessionStorage.userMetadata.streetAddress,
    };
    // create account informatio api
    dispatch(createAccountInformation(signupForm));
  };

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

          const userId = res.idTokenPayload.sub; // user id -> ex) auth0|123a456e789bfd01a234efba
          // fetch account Information and set account information in redux
          dispatch(fetchAccountInformation(userId));

          // if auto login(signup), there is signupForm => flag(signup or not)
          // after login, call create account information api
          const isAutoLogin =
            signupFormFromSessionStorage &&
            typeof signupFormFromSessionStorage === "object";
          isAutoLogin && singup();
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
