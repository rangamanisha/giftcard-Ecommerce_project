import React from 'react';
import './App.scss';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Registration';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AllFeaturedCards from './components/AllFeaturedCards';
import SelectCards from './components/SelectCards';
import GiftiNav from './components/shared/Navbar/GiftiNav';

import ConditionsPage from './components/shared/ConditionsPage/ConditionsPage';
import Contact from './components/shared/Contact/Contact';
import EnquiryPage from './components/shared/EnquiryPage/EnquiryPage';
import PrivacypolicyPage from './components/shared/PrivacypolicyPage/PrivacypolicyPage';

function App() {
  return (
    <div className="body">
      <Router>
        <GiftiNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/signup" component={Signup} exact />
          <Route path="/forgotpassword" component={ForgotPassword} exact />
          <Route path="/auth/resetpassword" component={ResetPassword} exact />
          <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
          <Route path="/selectcard" component={SelectCards} exact />
          <Route path="/ConditionsPage" component={ConditionsPage} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/EnquiryPage" component={EnquiryPage} exact />
          <Route path="/PrivacypolicyPage" component={PrivacypolicyPage} exact />
          <Route path="/" exact>
            <Redirect to={{ pathname: '/' }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
