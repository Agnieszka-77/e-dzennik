import styled, { css } from "styled-components";

export const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 30px;
  height: 100%;
  width: clamp(300px, 100%, 30%);
  background-color: ${({ theme: { color } }) => color.background};
  border-right: solid 4px ${({ theme }) => theme.color.primary};
  z-index: 10;
  transition: 300ms;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100%;
    transform: translateX(${({ active }) => (active ? "0" : "-100%")});
  }
`;

export const Hamburger = styled.button<{ active: boolean }>`
  position: absolute;
  height: 5px;
  width: 40px;
  top: 20px;
  right: 10px;
  background: ${({ theme }) => theme.color.primary};
  border: none;
  z-index: 11;

  ::after {
    content: " ";
    position: absolute;
    top: 10px;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    transition: 300ms;
  }
  ::before {
    content: " ";
    position: absolute;
    top: -10px;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    transition: 300ms;
  }
  ${({ active }) =>
    active &&
    css`
      position: fixed;
      background: transparent;
      ::after {
        top: 50%;
        transform: rotate(45deg);
      }
      ::before {
        top: 50%;
        transform: rotate(-45deg);
      }
    `}
  @media screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;
