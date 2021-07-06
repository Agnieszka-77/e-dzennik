import styled from "styled-components";
import { PropsSelectSubject } from "types/types";
import { handleInput } from "utils/utils";

const Wrapper = styled.select`
  padding: 5px 10px;
  border: solid 2px ${({ theme }) => theme.color.primary};
  border-radius: 10px;
`;

const SelectSubject = ({ subject, setSubject, subjects }: PropsSelectSubject) => (
  <Wrapper
    name="select-subject"
    data-testid="select-subject"
    value={subject}
    onChange={(e) => handleInput(e, subject, setSubject)}
  >
    {subjects.map((subjectName) => (
      <option value={subjectName} key={subjectName}>
        {subjectName}
      </option>
    ))}
  </Wrapper>
);

export default SelectSubject;
