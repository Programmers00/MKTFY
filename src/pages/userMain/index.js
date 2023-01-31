import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import { Outlet } from "react-router-dom";

const UserMain = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserMain;
