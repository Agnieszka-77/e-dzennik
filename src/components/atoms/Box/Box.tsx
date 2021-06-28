import styled from "styled-components";

type PropsBox = { width?: string; borderRadius?: string; backgroundColor?: string; margin?: string; border?: string };

const Box = styled.article<PropsBox>`
  display: flex;
  width: ${({ width }) => (width ? `${width}` : "auto")};
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "50px")};
  border: ${({ border, theme }) => (border ? border : `solid 2px ${theme.color.primary}`)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.3);
`;

export default Box;
