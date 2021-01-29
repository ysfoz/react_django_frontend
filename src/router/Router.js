import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import UpdatePage from "../pages/UpdatePage";
import { AuthContext } from "../context/AuthContext";

function AppRouter(params) {
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  console.log(isLoggedIn);
  console.log(currentUser ? "var" : "yok");
  console.log(localStorage.getItem("Token"));
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/:slug/detail" component={DetailPage} />

        <Route
          exact
          path="/profile"
          component={localStorage.getItem("Token") ? ProfilePage : Login}
        />
        <Route
          exact
          path="/create"
          component={localStorage.getItem("Token") ? PostPage : Login}
        />
        <Route
          exact
          path="/:slug/update"
          component={localStorage.getItem("Token") ? UpdatePage : Login}
        />

        {/* <Route exact path="/forgot-password" component={ForgotPassword} /> */}
        {/* <Route
                  exact
                  path="/user/:id"
                  component={currentUser ? UserDetail : Signin}
              />
              <Route
                  exact
                  path="/user/:id/post"
                  component={currentUser ? UserPost : Signin}
              />
              <Route path="/" component={Main} /> */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
