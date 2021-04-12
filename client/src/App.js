import './App.scss';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Registration';
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom";
import ForgotPassword from './components/ForgotPassword';
import AllFeaturedCards from './components/AllFeaturedCards';
import SelectCards from './components/SelectCards';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/auth/signup" component={Signup} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route path="/allfeaturedcards" component={AllFeaturedCards} exact />
        <Route path="/selectcard" component={SelectCards} exact />
        <Route path="/" exact>
          <Redirect to={{ pathname: '/' }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
