import styled from "styled-components";

const Input = styled.input`
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
`;

export default Input;
