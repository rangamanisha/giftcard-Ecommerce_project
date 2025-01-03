import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Registration";
import AllCards from "./components/AllCards";
import AllOrder from "./components/Orders/AllOrder";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ConfirmOrder from "./components/Orders/confirm_order";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AllFeaturedCards from "./components/AllFeaturedCards";
import SelectCards from "./components/SelectCards";
import GiftiNav from "./components/shared/Navbar/GiftiNav";
import EditProfile from "./components/EditProfile";
import Footer from "./components/shared/Footer";
import RewardPoints from "./components/RewardPoints";
import ConditionsPage from "./components/shared/ConditionsPage/ConditionsPage";
import Contact from "./components/shared/ContactPage/Contact";
import EnquiryPage from "./components/shared/EnquiryPage/EnquiryPage";
import PrivacypolicyPage from "./components/shared/PrivacypolicyPage/PrivacypolicyPage";
import Checkout from "./components/checkout";
import StepsDemo from "./components/stepper";
import EmptyCart from "./components/shared/EmptyCartPage/EmptyCart";
import Cart from "./components/Cart/Cart";
import Idc_Order from "./components/IDC/IdcOrder";
import Idc_Profile from "./components/IDC/idcProfile";
import Idc_Header from "./components/IDC/IdcHeader";
import Idc_Signin from "./components/IDC/IdcSign";
import ProtectedRoute from "./ProtectedRoute";
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";
import PageLoader from "./components/PageLoader";
import ClearPage from "./components/ClearPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <Route path="/idc" component={Idc_Header} />
      <Route path="/idc/signin" component={Idc_Signin} />
      <Route path="/idc/order" component={Idc_Order} />
      <Route path="/idc/profile" component={Idc_Profile} />
      {window.location.pathname === "/idc/order" ||
      window.location.pathname === "/idc/signin" ||
      window.location.pathname === "/idc/profile" ? null : (
        <>
          <GiftiNav />
          <PageLoader />
        </>
      )}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/auth/signup" component={Signup} exact />
        <Route path="/allcards" component={AllCards} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route path="/auth/resetpassword" component={ResetPassword} exact />
        <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
        <Route path="/selectcard" component={SelectCards} exact />
        <ProtectedRoute path="/order/allorder" component={AllOrder} exact />
        <Route path="/emptycart" component={EmptyCart} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/order/confirm_order">
          <ConfirmOrder showOrdersHeading={true} />
        </Route>
        <Route path="/" exact />
        <Route path="/auth/forgotpassword" component={ForgotPassword} exact />
        <ProtectedRoute path="/profile" component={EditProfile} exact />
        <ProtectedRoute path="/reward-points" component={RewardPoints} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/payment" component={StepsDemo} exact />
        <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
        <Route path="/selectcard" component={SelectCards} exact />
        <Route path="/emptycart" component={EmptyCart} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/terms-and-conditions" component={ConditionsPage} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/faq" component={EnquiryPage} exact />
        <Route path="/privacy-policy" component={PrivacypolicyPage} exact />
        <Route path="/failure" component={FailurePage} exact />
        <Route path="/success" component={SuccessPage} exact />
        <Route path="/clear" component={ClearPage} exact />
        <Route path="/" exact>
          <Redirect to={{ pathname: "/" }} />
        </Route>
        <Route path="/allcards" component={AllCards} exact />
        <Route path="/emptycart" component={EmptyCart} exact />
        <Route component={NotFoundPage} />
      </Switch>
      {window.location.pathname === "/idc/order" ||
      window.location.pathname === "/idc/signin" ||
      window.location.pathname === "/idc/profile" ? null : (
        <Footer />
      )}
    </Router>
  );
}

export default App;
