import React from 'react';
import './App.scss';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Registration';
import AllCards from './components/AllCards';
import AllOrder from './components/Orders/AllOrder';
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom";
// import Cart from './components/Cart';

import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AllFeaturedCards from './components/AllFeaturedCards';
import SelectCards from './components/SelectCards';
import GiftiNav from './components/shared/Navbar/GiftiNav';
import EditProfile from './components/EditProfile';
import Footer from './components/shared/Footer';
import RewardPoints from './components/RewardPoints';

// import ConditionsPage from './components/shared/ConditionsPage/ConditionsPage';
// import Contact from './components/shared/ContactPage/Contact';
// import EnquiryPage from './components/shared/EnquiryPage/EnquiryPage';
// import PrivacypolicyPage from './components/shared/PrivacypolicyPage/PrivacypolicyPage';
import EmptyCart from './components/shared/EmptyCartPage/EmptyCart';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="body">
      <Router>
        <GiftiNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/signup" component={Signup} exact />
          <Route path="/allcards" component={AllCards} exact/>
          <Route path="/forgotpassword" component={ForgotPassword} exact />
          <Route path="/cart" component ={Cart} exact/>
          <Route path="/auth/resetpassword" component={ResetPassword} exact />
          <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
          <Route path="/selectcard" component={SelectCards} exact />
          <Route path="/order/allorder" component ={AllOrder} exact/>
          <Route path="/emptycart" component={EmptyCart} exact />
          <Route path="/cart" component={Cart} exact />
          {/* <Route path="/conditionsPage" component={ConditionsPage} exact />
          <Route path="/contact" component={Contact} exact /> */}
          {/* <Route path="/enquiryPage" component={EnquiryPage} exact />
          <Route path="/privacypolicyPage" component={PrivacypolicyPage} exact /> */}
  
          {/* <Route path="/" exact>
          <Route path="/auth/forgotpassword" component={ForgotPassword} exact />
          <Route path="/auth/resetpassword" component={ResetPassword} exact />
          <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
          <Route path="/selectcard" component={SelectCards} exact />
          <Route path="/profile" component={EditProfile} exact />
          <Route path="/reward-points" component={RewardPoints} exact />
          <Route path="/" exact>
            <Redirect to={{ pathname: '/' }} />
          </Route> */}
          <Route render={() => <Redirect to={{ pathName: '/' }} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
