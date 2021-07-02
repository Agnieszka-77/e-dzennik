import WithoutMenuTemplate from "components/templates/WithoutMenuTemplate";
import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "view/pages/Login/Login";
import Profile from "view/pages/Profile/Profile";
import Desktop from "view/pages/Desktop/Desktop";
import LoggedRoute from "components/molecules/LoggedRoute/LoggedRoute";
import UserProvider from "providers/UserProvider";
import Grades from "./pages/Grades/Grades";
import { Routes } from "utils/utils";
import Students from "./pages/Students/Students";

const Root = () => {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <LoggedRoute path={Routes.PROFILE}>
            <MainTemplate>
              <Profile />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path={Routes.DESKTOP}>
            <MainTemplate>
              <Desktop />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path={Routes.GRADES}>
            <MainTemplate>
              <Grades />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path={Routes.STUDENTS}>
            <MainTemplate>
              <Students />
            </MainTemplate>
          </LoggedRoute>
          <LoggedRoute path={Routes.LOGIN}>
            <WithoutMenuTemplate>
              <Login />
            </WithoutMenuTemplate>
          </LoggedRoute>
        </Switch>
      </UserProvider>
    </Router>
  );
};

export default Root;
