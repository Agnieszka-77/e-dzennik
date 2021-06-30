import WithoutMenuTemplate from "components/templates/WithoutMenuTemplate";
import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "view/pages/Login/Login";
import Profile from "view/pages/Profile/Profile";
import Desktop from "view/pages/Desktop/Desktop";
import LoggedRoute from "components/atoms/LoggedRoute/LoggedRoute";
import UserProvider from "providers/UserProvider";
import Grades from "./pages/Grades/Grades";

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
          <LoggedRoute path="/desktop">
            <MainTemplate>
              <Desktop />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path="/grades">
            <MainTemplate>
              <Grades />
            </MainTemplate>
          </LoggedRoute>
        </Switch>
      </UserProvider>
    </Router>
  );
};

export default Root;
