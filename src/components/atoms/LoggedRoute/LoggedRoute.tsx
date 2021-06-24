import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "providers/UserProvider";

type TypeLoggedRoute = (props: { path: string; children: JSX.Element; exact?: boolean }) => JSX.Element;

const LoggedRoute: TypeLoggedRoute = ({ children, path, exact }) => {
  const [{ loggedIn }] = useContext(UserContext);

  if (path === "/") {
    return (
      <Route exact={exact} path="/">
        {loggedIn ? <Redirect to="/profile" /> : <>{children}</>}
      </Route>
    );
  }
  return (
    <Route exact={exact} path={path}>
      {loggedIn ? <>{children}</> : <Redirect to="/" />}
    </Route>
  );
};

export default LoggedRoute;
