import { ISubjects } from "types/types";
import { Garde, GardesBox, Name, Wrapper } from "./SubjectGardes.style";

const SubjectGardes = ({ subject: { name, grades } }: { subject: ISubjects }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <GardesBox>
        {grades.map((garde) => (
          <Garde key={`${garde}garde${Math.random()}`}>{garde}</Garde>
        ))}
      </GardesBox>
    </Wrapper>
  );
};

export default SubjectGardes;
