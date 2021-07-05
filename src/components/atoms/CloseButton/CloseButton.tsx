import styled from "styled-components";

const CloseButton = styled.span`
  position: relative;
  display: block;
  height: 30px;
  width: 30px;
  margin-left: auto;
  ::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    transform: translateY(-50%) rotate(45deg);
  }
  ::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    transform: translateY(-50%) rotate(-45deg);
  }
  :hover {
    transform: scale(1.1);
  }
`;

export default CloseButton;
