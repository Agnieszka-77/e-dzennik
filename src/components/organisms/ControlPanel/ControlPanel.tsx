import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import SearchInput from "components/molecules/SearchInput/SearchInput";
import { handleInput } from "utils/utils";
import SelectSubject from "components/molecules/SelectSubject/SelectSubject";
import { PropsControlPanel } from "types/types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ControlPanel = ({ users, setStudents, grade, setGrade, subject, setSubject }: PropsControlPanel) => {
  return (
    <Wrapper>
      <SearchInput users={users} setCurrentUsers={setStudents} />
      <Input
        type="number"
        step="0.5"
        min="2"
        max="6"
        placeholder="Garde"
        value={grade}
        onChange={(e) => handleInput(e, grade, setGrade)}
      />
      <SelectSubject subject={subject} setSubject={setSubject} subjects={["english", "c++", "c#"]} />
    </Wrapper>
  );
};

export default ControlPanel;
