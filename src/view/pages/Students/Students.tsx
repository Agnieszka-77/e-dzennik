import { useContext, useState } from "react";
import { UserContext } from "providers/UserProvider";
import Title from "components/atoms/Title/Title";
import { Wrapper } from "./Students.style";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import ControlPanel from "components/organisms/ControlPanel/ControlPanel";

//states of logic have been placed on the view level so as not to create an unnecessary organism that would be just an additional node
const Students = () => {
  const [, , users, setUsers] = useContext(UserContext);
  const [students, setStudents] = useState(users);
  const [grade, setGrade] = useState(2);
  const [subject, setSubject] = useState("english");

  return (
    <Wrapper>
      <Title color="primary">Studends</Title>
      <ControlPanel
        users={users}
        setStudents={setStudents}
        grade={grade}
        setGrade={setGrade}
        subject={subject}
        setSubject={setSubject}
      />
      <StudentsList students={students} users={users} setUsers={setUsers} subject={subject} grade={grade} />
    </Wrapper>
  );
};

export default Students;
