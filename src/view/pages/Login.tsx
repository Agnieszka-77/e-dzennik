import { useContext } from "react";
import { UserContext } from "providers/UserProvider";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <p>{user.level}</p>
      <div>
        <button
          onClick={() => {
            setUser(true, 2);
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("level", "2");
          }}
        >
          Admin
        </button>
        <button
          onClick={() => {
            setUser(true, 1);
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("level", "1");
          }}
        >
          Nauczyciel
        </button>
        <button
          onClick={() => {
            setUser(true, 0);
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("level", "0");
          }}
        >
          Uczeń
        </button>
      </div>
    </div>
  );
};

export default Login;
