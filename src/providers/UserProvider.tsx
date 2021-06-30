import { useState, createContext } from "react";
import { ICurrentUser, TypeValueUserContext } from "types/types";

const usersData = [
  {
    id: "0",
    name: "adam",
    level: "1",
  },
  {
    id: "1",
    name: "wojtek",
    level: "0",
    subjects: [
      {
        name: "english",
        grades: [5, 3, 3],
      },
      {
        name: "c#",
        grades: [3, 4, 5],
      },
    ],
  },
];

const initUser: ICurrentUser = {
  loggedIn: localStorage.getItem("loggedIn") === "true",
  id: localStorage.getItem("id") || "",
  name: localStorage.getItem("name") || "",
  level: localStorage.getItem("level") || "",
};

export const UserContext = createContext<TypeValueUserContext>([initUser, () => {}, usersData, () => {}]);

const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initUser);
  const [users, setUsers] = useState(usersData);

  const handlerCurrentUser: TypeValueUserContext[1] = (loggedIn, level, id, name) => {
    setCurrentUser({
      loggedIn,
      level: level || localStorage.getItem("level") || "",
      id: id || localStorage.getItem("id") || "",
      name: name || localStorage.getItem("name") || "",
    });
  };

  const hendlerUsers: TypeValueUserContext[3] = (users) => {
    setUsers(users);
  };

  return (
    <UserContext.Provider value={[currentUser, handlerCurrentUser, users, hendlerUsers]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
