import styled from "styled-components";

const Box = styled.article<{ width?: string; borderRadius?: string; backgroundColor?: string; margin?: string }>`
  display: flex;
  width: ${({ width }) => (width ? `${width}` : "auto")};
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "50px")};
  border: solid 2px #23b2ee;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.3);
`;

export default Box;
