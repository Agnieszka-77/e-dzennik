import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 0px 20px;
  input,
  select {
    max-width: 200px;
  }
`;

export const ControlPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
