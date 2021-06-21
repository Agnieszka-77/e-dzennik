import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "view/pages/Login";
import Profile from "view/pages/Profile";
import Pulpit from "view/pages/Pulpit";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/pulpit">pulpit</Link>
            </li>
            <li>
              <Link to="/">logout</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/pulpit">
            <Pulpit />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
