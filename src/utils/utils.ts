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

export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  value: any,
  setValue: React.Dispatch<React.SetStateAction<any>>
): void => {
  if (typeof value === "string") {
    setValue(e.target.value);
  } else if (typeof value === "number") {
    setValue(Number(e.target.value));
  }
};

export const addGrades = (
  users: IUser[],
  setUsers: (users: IUser[]) => void,
  id: string,
  choosedSubject: string,
  garde: number
) => {
  const editUsers = users.map((user) => {
    if (id === user.id) {
      user.subjects = user.subjects?.map((subject) => {
        if (choosedSubject === subject.name) {
          subject.grades.push(garde);
        }
        return subject;
      });
    }
    return user;
  });
  setUsers(editUsers);
};
