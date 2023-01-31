import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// redux stuffs
import { Provider } from "react-redux";
import store from "./store";
// auth pages
import Auth from "./pages/auth";
import AuthMain from "./pages/auth/authMain";
import Login from "./pages/auth/login";
import ForgotPasswordSubmitEmail from "./pages/auth/login/forgotPasswordSubmitEmail";
import ForgotPasswordSubmitCode from "./pages/auth/login/forgotPasswordSubmitCode";
import ResetPassword from "./pages/auth/login/resetPassword";
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
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <PrivateRoute>
            <Routes>
              {/* auth */}
              <Route path="/auth/*" element={<Auth />}>
                <Route index element={<AuthMain />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="forgotPasswordSubmitEmail"
                  element={<ForgotPasswordSubmitEmail />}
                />
                <Route
                  path="forgotPasswordSubmitCode"
                  element={<ForgotPasswordSubmitCode />}
                />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="createAccount" element={<CreateAccount />} />
                <Route path="createPassword" element={<CreatePassword />} />
                <Route index element={<AuthMain />} />
                <Route path="*" element={<div>Opps</div>} />
              </Route>
              {/* user main */}
              <Route path="/*" element={<UserMain />}>
                {/* contents */}
                <Route index element={<Deals />} />
                <Route path="carsVehicles" element={<CarsVehicles />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="furniture" element={<Furniture />} />
                <Route path="realEstate" element={<RealEstate />} />
                {/* userInfo */}
                <Route
                  path="accountInformation"
                  element={<AccountInformation />}
                />
                <Route path="changePassword" element={<ChangePassword />} />
                <Route path="myListings" element={<MyListings />} />
                <Route path="myPurchases" element={<MyPurchases />} />
                {/* help */}
                <Route path="contactUs" element={<ContactUs />} />
                <Route path="faq" element={<FAQ />} />
                {/* etc */}
                <Route path="checkout" element={<Checkout />} />
                <Route path="createOffer" element={<CreateOffer />} />
                <Route path="detail" element={<Detail />} />
                <Route path="*" element={<div>Opps</div>} />
              </Route>
            </Routes>
          </PrivateRoute>
        </Router>
      </Provider>
    </>
  );
};
export default App;
