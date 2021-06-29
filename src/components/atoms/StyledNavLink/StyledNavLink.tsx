import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)<{ src?: string; margin?: string }>`
  display: flex;
  height: 62px;
  padding: 0 20px;
  margin: ${({ margin }) => margin};
  align-items: center;
  color: ${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  text-decoration: none;
  border-radius: 10px;
  &::after {
    content: " ";
    height: 30px;
    width: 100%;
    mask: url(${({ src }) => src});
    mask-repeat: no-repeat;
    mask-position: right;
    mask-size: 30px 30px;
    background-color: ${({ theme: { color } }) => color.primary};
  }
  span {
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &.active {
    &::after {
      background-color: ${({ theme: { color } }) => color.background};
    }
    background-color: ${({ theme: { color } }) => color.primary};
    color: ${({ theme: { color } }) => color.background};
  }
`;

export default StyledNavLink;
