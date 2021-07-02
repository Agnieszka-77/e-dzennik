import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  margin-bottom: 20px;
  margin-right: auto;
  padding: 0px 10px 5px;
  align-items: center;
  border-left: solid 5px ${({ theme }) => theme.color.primary};
  border-bottom: solid 2px ${({ theme }) => theme.color.primary};
  span {
    text-transform: capitalize;
    font-size: ${({ theme: { font } }) => font.size.m};
    &:first-of-type {
      color: ${({ theme: { color } }) => color.primary};
      text-transform: uppercase;
    }
    &:last-of-type {
      margin-left: 10px;
    }
  }
`;
