import { UserContext } from "providers/UserProvider";
import { useContext } from "react";

const Profil = () => {
  const [user] = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>
        Imie:
        {user.name}
      </p>
      <p>{user.level === "0" ? "Student" : "Wykładowca"}</p>
      <div>
        <button>Admin</button>
        <button>Nauczyciel</button>
        <button>Uczeń</button>
        <button
          onClick={() => {
            console.log(localStorage.getItem("loggedIn"));
          }}
        >
          check
        </button>
      </div>
    </div>
  );
};

export default Profil;
