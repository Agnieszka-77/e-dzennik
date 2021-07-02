import { TypeValueUserContext, IUser } from "types/types";

export enum UserKeys {
  ID = "id",
  LEVEL = "level",
  NAME = "name",
}

export enum Routes {
  STUDENTS = "/students",
  DESKTOP = "/desktop",
  PROFILE = "/profile",
  GRADES = "/grades",
  LOGIN = "/",
}

export const handlerCurrentUser = ({ id, level, name }: IUser, setCurrentUser: TypeValueUserContext[1]) => {
  setCurrentUser(false, level, id, name);
  localStorage.setItem(UserKeys.ID, id);
  localStorage.setItem(UserKeys.LEVEL, level);
  localStorage.setItem(UserKeys.NAME, name);
};

export const getUserById = (users: IUser[], id: string) => {
  return users.filter((testUser) => {
    return testUser.id === id;
  })[0];
};
