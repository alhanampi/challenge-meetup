import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LoginHome from "./components/Home/LoginHome";
import AdminScreen from "./components/Auth/AdminScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/authContext/AuthState";
import MeetupState from "./context/meetupContext/MeetupState";
import setAuthToken from "./utils/utilSetAuthToken";
import PrivateRoutes from "./utils/utilPrivateRoutes";
import UtilClimate from "./utils/utilClimate";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <MeetupState>
      <AuthState>
        <Router>
          <Navbar />
          <UtilClimate />
          <Switch>
            {/* public routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {/* protected routes: no token, no access! */}
            <PrivateRoutes exact path="/user" component={LoginHome} />
            <PrivateRoutes exact path="/admin" component={AdminScreen} />
          </Switch>
        </Router>
      </AuthState>
    </MeetupState>
  );
}

export default App;
