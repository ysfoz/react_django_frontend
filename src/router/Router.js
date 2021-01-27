import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Navbar from "../components/Navbar";
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProfilePage from '../pages/ProfilePage'
import PostPage from '../pages/PostPage'
import UpdatePage from '../pages/UpdatePage'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:slug/detail" component={DetailPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/post" component={PostPage} />
        <Route path="/update" component={UpdatePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter
