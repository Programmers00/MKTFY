import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// redux stuffs
import { Provider } from "react-redux";
import store from "./store";
// auth pages
import Auth from "./pages/Auth";
import AuthMain from "./pages/Auth/AuthMain";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/Login/ForgotPassword";
import ResetPasswordVerification from "./pages/Auth/Login/ResetPasswordVerification";
import ResetPasswordComplete from "./pages/Auth/Login/ResetPasswordComplete";
import CreateAccount from "./pages/Auth/CreateAccount";
import CreatePassword from "./pages/Auth/CreateAccount/CreatePassword";
import TermsOfService from "./pages/Auth/CreateAccount/TermsOfService";
import PrivacyPolicy from "./pages/Auth/CreateAccount/PrivacyPolicy";
// userMain pages
import UserMain from "./pages/UserMain";
import Deals from "./pages/UserMain/Contents/Deals";
import CarsVehicles from "./pages/UserMain/Contents/CarsVehicles";
import Electronics from "./pages/UserMain/Contents/Electronics";
import Furniture from "./pages/UserMain/Contents/Furniture";
import RealEstate from "./pages/UserMain/Contents/RealEstate";
// userInfo pages
import AccountInformation from "./pages/UserInfo/AccountInformation";
import ChangePassword from "./pages/UserInfo/ChangePassword";
import MyListings from "./pages/UserInfo/MyListings";
import Product from "./pages/UserInfo/Product";
import MyPurchases from "./pages/UserInfo/MyPurchases";
// help pages
import ContactUs from "./pages/Help/ContactUs";
import FAQ from "./pages/Help/FAQ";
// etc pages
import Checkout from "./pages/UserMain/Checkout";
import Pickup from "./pages/UserMain/Pickup";
import CreateOffer from "./pages/UserMain/CreateOffer";
import Detail from "./pages/UserMain/Detail";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

// app is wrapped app main
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppMain />
      </PersistGate>
    </Provider>
  );
};
// app main is splited for using redux stuff(useSelector)
const AppMain = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
              <Route exact path="termsOfService" element={<TermsOfService />} />
              <Route exact path="privacyPolicy" element={<PrivacyPolicy />} />
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
              <Route exact path="myListings/:id" element={<Product />} />
              <Route exact path="myPurchases" element={<MyPurchases />} />
              {/* help */}
              <Route exact path="contactUs" element={<ContactUs />} />
              <Route exact path="faq" element={<FAQ />} />
              {/* etc */}
              <Route exact path="checkout/:id" element={<Checkout />} />
              <Route exact path="pickup/:id" element={<Pickup />} />
              <Route exact path="createOffer" element={<CreateOffer />} />
              <Route exact path="detail/:id" element={<Detail />} />
              {/* <Route path="*" element={<div>Opps</div>} /> */}
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
};
export default App;
