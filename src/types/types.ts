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

export type PropsStudentsList = {
  students: IUser[];
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  subject: string;
  grade: number;
};

export type TypeLoggedRoute = (props: { path: string; children: JSX.Element; exact?: boolean }) => JSX.Element;

export type PropsBox = {
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  border?: string;
};

export type PropsTitle = {
  margin?: string;
  padding?: string;
  color?: "primary" | "secondary" | "thirdary" | "background";
  size?: "xs" | "s" | "m" | "l" | "xl";
};

export type PropsControlPanel = {
  users: IUser[];
  setStudents: React.Dispatch<React.SetStateAction<IUser[]>>;
  grade: number;
  setGrade: React.Dispatch<React.SetStateAction<number>>;
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
};

export type PropsUserData = { id?: string; name?: string; role?: string };

export interface INotification {
  id: string;
  date: string;
  content: string;
  usersId: string[];
}
