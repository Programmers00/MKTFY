import { Outlet, Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// layout
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
/** userMain layout with private router */
const UserMain = () => {
  // isAuthenticated: true or false from store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //if authenticated ? show the page, if not authenticated ? go to auth page
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
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
