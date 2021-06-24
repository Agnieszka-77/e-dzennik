import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "providers/UserProvider";

const Navigation: React.FC = () => {
  const [, setUser] = useContext(UserContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/pulpit">pulpit</Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              setUser(false, 0);
              localStorage.setItem("loggedIn", "false");
              localStorage.setItem("level", "0");
            }}
          >
            logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
