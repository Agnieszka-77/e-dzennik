import WithoutMenuTemplate from "components/templates/WithoutMenuTemplate";
import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "view/pages/Login/Login";
import Profile from "view/pages/Profile/Profile";
import Pulpit from "view/pages/Pulpit/Pulpit";
import LoggedRoute from "components/atoms/LoggedRoute/LoggedRoute";
import UserProvider from "providers/UserProvider";

const Root = () => {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <LoggedRoute exact path="/">
            <WithoutMenuTemplate>
              <Login />
            </WithoutMenuTemplate>
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
