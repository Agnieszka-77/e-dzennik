export interface ISubjects {
  name: string;
  grades: number[];
}

export interface IUser {
  id: string;
  name: string;
  level: string;
  subjects?: ISubjects[];
}

export interface ICurrentUser extends IUser {
  loggedIn: boolean;
}

export type TypeValueUserContext = [
  ICurrentUser,
  (loggedIn: boolean, level?: string, id?: string, name?: string) => void,
  IUser[],
  (users: IUser[]) => void
];
