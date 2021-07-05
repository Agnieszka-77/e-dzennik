import Notification from "components/molecules/Notification/Notification";
import { UserContext } from "providers/UserProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { INotification } from "types/types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media screen and (max-width: ${({ theme }) => theme.screen.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Pulpit = () => {
  const [user] = useContext(UserContext);
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://run.mocky.io/v3/9a2b33ac-8e74-4493-ab78-403c481aca55")
      .then((response) => response.json())
      .then((result) => {
        const resultNotifications = result as INotification[];
        setLoading(false);
        setNotifications(
          resultNotifications.filter((notification) => {
            return !(notification.id === localStorage.getItem(notification.id));
          })
        );
      });
  }, [user]);

  if (loading === true) {
    return <div>loading...</div>;
  }

  if (notifications.length === 0) {
    return <div>We have no new notifications for you</div>;
  }

  return (
    <Wrapper>
      {notifications.map((notification) => {
        if (notification.usersId.includes(user.id)) {
          return <Notification key={notification.id} {...notification} />;
        }
        return <React.Fragment key={notification.id}></React.Fragment>;
      })}
    </Wrapper>
  );
};

export default Pulpit;
