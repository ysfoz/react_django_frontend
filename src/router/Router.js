import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Navbar from "../components/Navbar";
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/detail" component={DetailPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter
