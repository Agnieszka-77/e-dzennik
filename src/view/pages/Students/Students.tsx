import React, { useContext, useState } from "react";
import { UserContext } from "providers/UserProvider";
import Input from "components/atoms/Input/Input";
import Title from "components/atoms/Title/Title";
import SearchInput from "components/molecules/SearchInput/SearchInput";
import { handleInput } from "utils/utils";
import Student from "components/organisms/Student/Student";
import SelectSubject from "components/molecules/SelectSubject/SelectSubject";
import { ControlPanel, Wrapper } from "./Students.style";

//states of logic have been placed on the view level so as not to create an unnecessary organism that would be just an additional node
const Students = () => {
  const [, , users, setUsers] = useContext(UserContext);
  const [students, setStudents] = useState(users);
  const [garde, setGarde] = useState(2);
  const [subject, setSubject] = useState("english");

  return (
    <Wrapper>
      <Title color="primary">Studends</Title>
      <ControlPanel>
        <SearchInput users={users} setCurrentUsers={setStudents} />
        <Input
          type="number"
          step="0.5"
          min="2"
          max="6"
          placeholder="Garde"
          value={garde}
          onChange={(e) => handleInput(e, garde, setGarde)}
        />
        <SelectSubject subject={subject} setSubject={setSubject} subjects={["english", "c++", "c#"]} />
      </ControlPanel>

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
            garde={garde}
          />
        ) : (
          <React.Fragment key={id}></React.Fragment>
        )
      )}
    </Wrapper>
  );
};

export default Students;
