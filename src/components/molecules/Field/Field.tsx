import { Wrapper } from "./Field.style";

const Field = ({ name, value }: { name: string; value: string }) => (
  <Wrapper>
    <span>{name}:</span>
    <span>{value}</span>
  </Wrapper>
);

export default Field;
