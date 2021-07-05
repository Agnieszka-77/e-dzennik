import { useState, createContext } from "react";
import { ICurrentUser, TypeValueUserContext } from "types/types";

let usersData = [
  { id: "0", name: "adam nawacki", level: "1" },
  {
    id: "1",
    name: "wojtek prowacki",
    level: "0",
    subjects: [
      { name: "english", grades: [5, 3, 3] },
      { name: "c#", grades: [3, 4, 5] },
      { name: "c++", grades: [3, 4, 5] },
    ],
  },
  {
    id: "2",
    name: "tomasz hajto",
    level: "0",
    subjects: [
      { name: "english", grades: [2, 2, 3] },
      { name: "c#", grades: [2, 2, 5] },
      { name: "c++", grades: [3, 4, 5] },
    ],
  },
  {
    id: "3",
    name: "Marek sobota",
    level: "0",
    subjects: [
      { name: "english", grades: [2, 2, 3] },
      { name: "c#", grades: [2, 2, 5] },
      { name: "c++", grades: [3, 4, 5] },
    ],
  },
  {
    id: "4",
    name: "agnieszka pawlik",
    level: "0",
    subjects: [
      { name: "english", grades: [2, 2, 3] },
      { name: "c#", grades: [2, 2, 5] },
      { name: "c++", grades: [3, 4, 5] },
    ],
  },
  {
    id: "5",
    name: "kamil kowalski",
    level: "0",
    subjects: [
      { name: "english", grades: [2, 2, 3] },
      { name: "c#", grades: [2, 2, 5] },
      { name: "c++", grades: [3, 4, 5] },
    ],
  },
  {
    id: "6",
    name: "monika kot",
    level: "0",
    subjects: [
      { name: "english", grades: [2, 2, 3] },
      { name: "c#", grades: [2, 2, 5] },
      { name: "c++", grades: [3, 4, 5] },
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
  /*  
problem z mokcy przez to, że nadpisuje wartości zmienione na init ponownie 
useEffect(() => {
      fetch("https://run.mocky.io/v3/c4ee92fd-4594-472f-b2d0-75cf4d204116")
        .then((res) => res.json())
        .then((value) => {
          setUsers(value);
        });
  }, [users]); */

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
