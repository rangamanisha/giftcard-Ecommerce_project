import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Registration";
import AllCards from "./components/AllCards";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AllFeaturedCards from "./components/AllFeaturedCards";
import SelectCards from "./components/SelectCards";
import GiftiNav from "./components/shared/Navbar/GiftiNav";
import Footer from "./components/shared/Footer";
import EmptyCart from './components/shared/EmptyCartPage/EmptyCart';
import Cart from './components/Cart/Cart';

function App() {
  return (
      <Router>
        <GiftiNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/signup" component={Signup} exact />
          <Route path="/allcards" component={AllCards} exact />
          <Route path="/forgotpassword" component={ForgotPassword} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/auth/resetpassword" component={ResetPassword} exact />
          <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
          <Route path="/selectcard" component={SelectCards} exact />
          <Route path="/emptycart" component={EmptyCart} exact />
          <Route path="/cart" component={Cart} exact />
          <Route render={() => <Redirect to={{ pathName: "/" }} />} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
