import './App.scss';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Registration';
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom";
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AllFeaturedCards from './components/AllFeaturedCards';
import SelectCards from './components/SelectCards';
import GiftiNav from './components/shared/Navbar/GiftiNav';
import EditProfile from './components/EditProfile';
import Footer from './components/shared/Footer';
import RewardPoints from './components/RewardPoints';


function App() {
  return (
    <div className="body">
      <Router>
        <GiftiNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/signup" component={Signup} exact />
          <Route path="/auth/forgotpassword" component={ForgotPassword} exact />
          <Route path="/auth/resetpassword" component={ResetPassword} exact />
          <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
          <Route path="/selectcard" component={SelectCards} exact />
          <Route path="/profile" component={EditProfile} exact />
          <Route path="/reward-points" component={RewardPoints} exact />
          <Route path="/" exact>
            <Redirect to={{ pathname: '/' }} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
