import { Outlet, Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// layout
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

import jwt_decode from "jwt-decode";

/** userMain layout with private router */
const UserMain = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log("document.location.hash", document.location.hash);
  let access_token = new URLSearchParams(document.location.hash.substr(1)).get(
    "access_token"
  );
  let decode;
  if (access_token) {
    sessionStorage.setItem("access_token", access_token);
    decode = jwt_decode(access_token);
    console.log("decode", decode);
  }

  // isAuthenticated: true or false from store

  //if authenticated ? show the page, if not authenticated ? go to auth page
  // if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return (
    <>
      {/* layout header, content(outlet), footer  */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserMain;
