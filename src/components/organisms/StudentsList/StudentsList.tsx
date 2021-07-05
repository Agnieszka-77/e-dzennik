import React from "react";
import { PropsStudentsList } from "types/types";
import Student from "../Student/Student";

const StudentsList = ({ students, subject, users, setUsers, grade }: PropsStudentsList) => (
  <>
    {students.map(({ id, name, level, subjects }) =>
      level === "0" ? (
        <Student
          key={id}
          id={id}
          name={name}
          subjects={subjects}
          subject={subject}
          users={users}
          setUsers={setUsers}
          garde={grade}
        />
      ) : (
        <React.Fragment key={id}></React.Fragment>
      )
    )}
  </>
);

export default StudentsList;
