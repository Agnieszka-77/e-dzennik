import styled from "styled-components";

const Button = styled.button<{ color?: "primary" | "secondary" | "thirdary"; margin?: string }>`
  height: 40px;
  min-width: 100px;
  margin: ${({ margin }) => margin};
  background-color: ${({ theme, color }) => (color ? theme.color[color] : theme.color["primary"])};
  color: snow;
  border: 2px solid ${({ theme, color }) => (color ? theme.color[color] : theme.color["primary"])};
  border-radius: 100px;
  transition: 300ms;
  &:hover {
    background-color: ${({ theme: { color } }) => color.background};
    color: ${({ theme, color }) => (color ? theme.color[color] : theme.color["primary"])};
  }
  &:disabled {
    color: grey;
    border: grey;
    background-color: lightgrey;
  }
`;

export default Button;
