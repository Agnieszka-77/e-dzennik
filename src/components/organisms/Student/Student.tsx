import Button from "components/atoms/Button/Button";
import SubjectGardes from "components/molecules/SubjectGardes/SubjectGardes";
import styled from "styled-components";
import UserData from "../UserData/UserData";
import { addGrades } from "utils/utils";
import { PropsStudent } from "types/types";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 20px;
  gap: 10px;
`;

const Student = ({ id, name, subjects, users, setUsers, subject, garde }: PropsStudent) => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <UserData id={id} name={name} />
      <div data-testid={id}>
        {subjects?.map((subject) => {
          return <SubjectGardes key={id + name + subject.name} subject={subject} />;
        })}
      </div>
      <Button margin="0 auto 0 0" onClick={() => setActive(true)}>
        Add grade
      </Button>

      <Modal active={active} setActive={setActive} yesFn={() => addGrades(users, setUsers, id, subject, garde)}>
        <p>Are you sure you want to insert this garde?</p>
        <p>If you are wrong, the change will have to be managed by the administrator!</p>
      </Modal>
    </Wrapper>
  );
};

export default Student;
