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
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route path="/dashboard" component={Dashboard} exact />
    </Switch>
    </Router>
  );
}

export default App;
