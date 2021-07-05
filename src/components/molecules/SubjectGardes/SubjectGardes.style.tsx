import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: ${({ theme: { font } }) => font.size.m};
  border: solid 2px ${({ theme }) => theme.color.primary};
  border-bottom: none;
  &:last-of-type {
    border-bottom: solid 2px ${({ theme }) => theme.color.primary};
  }
`;

export const Name = styled.div`
  padding: 5px 10px 5px 5px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const GardesBox = styled.div`
  display: felx;
  border-top: solid 2px ${({ theme }) => theme.color.primary};
  flex-wrap: wrap;
`;

export const Garde = styled.div`
  padding: 2px 5px;
  border-left: solid 2px ${({ theme }) => theme.color.primary};
  &:first-of-type {
    border-left: none;
  }
`;
