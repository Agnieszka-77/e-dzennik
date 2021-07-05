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

export type PropsSerchInput = {
  users: IUser[];
  setCurrentUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
};

export type PropsStudent = {
  id: string;
  name: string;
  subjects: ISubjects[] | undefined;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  subject: string;
  garde: number;
};

export type PropsSelectSubject = {
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  subjects: string[];
};
