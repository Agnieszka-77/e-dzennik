import { TypeValueUserContext, IUser } from "types/types";

export const handlerCurrentUser = (currentUser: IUser, setCurrentUser: TypeValueUserContext[1]) => {
  setCurrentUser(false, currentUser.level, currentUser.id, currentUser.name);
  localStorage.setItem("id", currentUser.id);
  localStorage.setItem("level", currentUser.level);
  localStorage.setItem("name", currentUser.name);
};

export const getUserById = (users: IUser[], id: string) => {
  return users.filter((testUser) => {
    return testUser.id === id;
  })[0];
};
