import { useState, createContext } from "react";

type TypeValueUserContext = [{ loggedIn: boolean; level: number }, (loggedIn: boolean, level?: number) => void];

export const UserContext = createContext<TypeValueUserContext>([{ loggedIn: false, level: 0 }, () => {}]);

const userIsLogged = () => localStorage.getItem("loggedIn") === "true";

const howIsUserLevel = () => (Number(localStorage.getItem("level")) > 0 ? Number(localStorage.getItem("level")) : 0);

const initValueUser = {
  loggedIn: userIsLogged(),
  level: howIsUserLevel(),
};

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(initValueUser);

  const handlerUser: TypeValueUserContext[1] = (loggedIn, level) => {
    setUser({ loggedIn: loggedIn, level: level || level === 0 ? level : user.level });
  };

  return <UserContext.Provider value={[user, handlerUser]}>{children}</UserContext.Provider>;
};

export default UserProvider;
