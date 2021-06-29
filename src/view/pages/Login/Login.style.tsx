import styled from "styled-components";
import ImageBackgroundLeftBar from "assets/images/backgroundLeftBar.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    min-height: 100%;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${({ theme: { color } }) => color.primary};
    z-index: -1;
    opacity: 0.7;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    background-image: url(${ImageBackgroundLeftBar});
    z-index: -2;
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 10px 5px;
    box-shadow: 3px 0px 6px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: snow;
  padding: 10px;
`;

export const ButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-bottom: 35px;
  gap: 10px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 10px 0px;
`;

export const HighlightedText = styled.p`
  margin: 0 0 5px 0;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.primary};
`;

export const Title = styled.h2`
  margin: 0px auto 30px 20px;
  font-size: 36px;
  color: ${({ theme: { color } }) => color.background};
  letter-spacing: 2px;
`;
