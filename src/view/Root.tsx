import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "view/pages/Login";
import Profile from "view/pages/Profile";
import Pulpit from "view/pages/Pulpit";
import LoggedRoute from "components/atoms/LoggedRoute/LoggedRoute";
import UserProvider from "providers/UserProvider";

const Root = () => {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <LoggedRoute exact path="/">
            <Login />
          </LoggedRoute>
          <LoggedRoute path="/profile">
            <MainTemplate>
              <Profile />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path="/pulpit">
            <MainTemplate>
              <Pulpit />
            </MainTemplate>
          </LoggedRoute>
        </Switch>
      </UserProvider>
    </Router>
  );
};

export default Root;
