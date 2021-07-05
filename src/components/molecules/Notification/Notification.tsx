import CloseButton from "components/atoms/CloseButton/CloseButton";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  min-height: 140px;
  padding: 10px 20px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.thirdary};
  border-radius: 40px;
  gap: 10px;
  header {
    display: flex;
  }
`;

const Date = styled.span`
  margin-right: auto;
  padding: 4px 10px;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 20px;
`;

const Notification = ({ id, date, content }: { id: string; date: string; content: string }) => {
  const [active, setActive] = useState(!(localStorage.getItem(id) === id));
  return (
    <>
      {active && (
        <Wrapper>
          <header>
            <Date>{date}</Date>
            <CloseButton
              color="background"
              onClick={() => {
                setActive(false);
                localStorage.setItem(id, id);
              }}
            />
          </header>
          <section>{content}</section>
        </Wrapper>
      )}
    </>
  );
};

export default Notification;
