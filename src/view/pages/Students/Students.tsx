/* eslint-disable array-callback-return */
import Title from "components/atoms/Title/Title";
import SubjectGardes from "components/molecules/SubjectGardes/SubjectGardes";
import UserData from "components/organisms/UserData/UserData";
import { UserContext } from "providers/UserProvider";
import { useContext, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0px 20px;
`;

const Student = styled.div`
  margin: 10px 0px 20px;
  border-bottom: 20px solid ${({ theme: { color } }) => color.primary};
`;

const Students = () => {
  const [, , users] = useContext(UserContext);
  const [currentUsers, setCurrentUsers] = useState(users);
  const [searchValue, setSearchValue] = useState("");

  const handlerInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const hanlerCurrentUsers = () => {
    const searchUsers = users.filter(({ id, name }) => name.includes(searchValue) || id.includes(searchValue));
    setCurrentUsers(searchUsers);
    if (searchValue === "") {
      setCurrentUsers(users);
    }
  };

  return (
    <Wrapper>
      <Title>Studends</Title>
      <input type="text" placeholder="name" value={searchValue} onChange={handlerInput} onKeyUp={hanlerCurrentUsers} />
      {currentUsers.map(({ id, name, level, subjects }) => {
        if (level === "0")
          return (
            <Student key={id + name}>
              <UserData id={id} name={name} />
              <div>
                {subjects?.map((subject) => {
                  return <SubjectGardes key={id + name + subject.name} subject={subject} />;
                })}
              </div>
            </Student>
          );
      })}
    </Wrapper>
  );
};

export default Students;
