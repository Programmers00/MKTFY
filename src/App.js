import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// redux stuffs
import { Provider } from "react-redux";
import store from "./store";
// auth pages
import Auth from "./pages/auth";
import AuthMain from "./pages/auth/authMain";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/login/forgotPassword";
import ResetPasswordVerification from "./pages/auth/login/resetPasswordVerification";
import ResetPasswordComplete from "./pages/auth/login/resetPasswordComplete";
import CreateAccount from "./pages/auth/createAccount";
import CreatePassword from "./pages/auth/createAccount/createPassword";
// userMain pages
import UserMain from "./pages/userMain";
import Deals from "./pages/userMain/contents/deals";
import CarsVehicles from "./pages/userMain/contents/carsVehicles";
import Electronics from "./pages/userMain/contents/electronics";
import Furniture from "./pages/userMain/contents/furniture";
import RealEstate from "./pages/userMain/contents/realEstate";
// userInfo pages
import AccountInformation from "./pages/userInfo/accountInformation";
import ChangePassword from "./pages/userInfo/changePassword";
import MyListings from "./pages/userInfo/myListings";
import MyPurchases from "./pages/userInfo/myPurchases";
// help pages
import ContactUs from "./pages/help/contactUs";
import FAQ from "./pages/help/faq";
// etc pages
import Checkout from "./pages/userMain/checkout";
import CreateOffer from "./pages/userMain/createOffer";
import Detail from "./pages/userMain/detail";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          {/* auth */}
          <Routes>
            <Route exact path="/auth/*" element={<Auth />}>
              <Route index element={<AuthMain />} />
              <Route exact path="login" element={<Login />} />
              <Route exact path="forgotPassword" element={<ForgotPassword />} />
              <Route
                exact
                path="resetPasswordVerification"
                element={<ResetPasswordVerification />}
              />
              <Route
                exact
                path="resetPasswordComplete"
                element={<ResetPasswordComplete />}
              />
              <Route exact path="createAccount" element={<CreateAccount />} />
              <Route exact path="createPassword" element={<CreatePassword />} />
              {/* <Route path="*" element={<div>Opps</div>} /> */}
            </Route>
            {/* user main with private router logic */}
            <Route exact path="/*" element={<UserMain />}>
              {/* contents */}
              <Route exact index element={<Deals />} />
              <Route exact path="carsVehicles" element={<CarsVehicles />} />
              <Route exact path="electronics" element={<Electronics />} />
              <Route exact path="furniture" element={<Furniture />} />
              <Route exact path="realEstate" element={<RealEstate />} />
              {/* userInfo */}
              <Route
                exact
                path="accountInformation"
                element={<AccountInformation />}
              />
              <Route exact path="changePassword" element={<ChangePassword />} />
              <Route exact path="myListings" element={<MyListings />} />
              <Route exact path="myPurchases" element={<MyPurchases />} />
              {/* help */}
              <Route exact path="contactUs" element={<ContactUs />} />
              <Route exact path="faq" element={<FAQ />} />
              {/* etc */}
              <Route exact path="checkout" element={<Checkout />} />
              <Route exact path="createOffer" element={<CreateOffer />} />
              <Route exact path="detail" element={<Detail />} />
              {/* <Route path="*" element={<div>Opps</div>} /> */}
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
};
export default App;
