import './App.scss';
import i18n from './translations/i18n';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Registration';
import { BrowserRouter as Router,Route,
  Switch,
  Link
} from "react-router-dom";
import ForgotPassword from './components/ForgotPassword';
import Index from './index';
import AllFeaturedCards from './components/AllFeaturedCards';

function App() {
  return (
    <Router>
      <Link to ="/home"></Link>
      <Link to ="/auth/login"></Link>
      <Link to = "/signup"></Link>
      <Link to = "/forgotpassword"></Link>
      <Link to = "/allfeaturedcards"></Link>
    <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
    </Switch>
    </Router>
  );
}

export default App;
