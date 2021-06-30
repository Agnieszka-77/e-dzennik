import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  min-width: 100px;
  background-color: ${({ theme: { color } }) => color.primary};
  color: snow;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  border-radius: 100px;
  transition: 300ms;
  &:hover {
    background-color: ${({ theme: { color } }) => color.background};
    color: ${({ theme: { color } }) => color.primary};
  }
  &:disabled {
    color: grey;
    border: grey;
    background-color: lightgrey;
  }
`;

export default Button;
