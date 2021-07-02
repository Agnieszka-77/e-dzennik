import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "providers/UserProvider";
import { Routes } from "utils/utils";

type TypeLoggedRoute = (props: { path: string; children: JSX.Element; exact?: boolean }) => JSX.Element;

const LoggedRoute: TypeLoggedRoute = ({ children, path, exact }) => {
  const [{ loggedIn, level }] = useContext(UserContext);

  if (path === Routes.LOGIN) {
    return (
      <Route exact={exact} path={Routes.LOGIN}>
        {loggedIn ? <Redirect to={Routes.DESKTOP} /> : <>{children}</>}
      </Route>
    );
  }

  if (path === Routes.GRADES) {
    return (
      <Route exact={exact} path={path}>
        {level === "0" ? <>{children}</> : <Redirect to={Routes.DESKTOP} />}
      </Route>
    );
  }

  return (
    <Route exact={exact} path={path}>
      {loggedIn ? <>{children}</> : <Redirect to={Routes.LOGIN} />}
    </Route>
  );
};

export default LoggedRoute;
