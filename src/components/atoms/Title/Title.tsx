import styled from "styled-components";

interface PropsTitle {
  margin?: string;
  padding?: string;
  color?: "primary" | "secondary" | "thirdary" | "background";
  size?: "xs" | "s" | "m" | "l" | "xl";
}

const Title = styled.h2<PropsTitle>`
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0 0 10px 0")};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.text)};
  font-size: ${({ theme, size }) => (size ? theme.font.size[size] : theme.font.size.l)};
`;

export default Title;
