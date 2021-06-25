import { useContext } from "react";
import { UserContext } from "providers/UserProvider";
import styled from "styled-components";
import Box from "components/atoms/Box/Box";

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 0.4fr 0.6fr;
  justify-content: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23b2ee;
  padding: 10px 50px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: snow;
`;

const Button = styled.button`
  height: 40px;
  min-width: 120px;
  background-color: #23b2ee;
  color: snow;
  border: 2px solid #23b2ee;
  border-radius: 100px;
  transition: 300ms;
  &:hover {
    background-color: snow;
    color: #23b2ee;
  }
`;

const ButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-bottom: 35px;
  gap: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 20px;
`;

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Wrapper>
      <LeftSide>
        <Box backgroundColor="rgba(255,255,255,0.4)" margin="auto 0 10px 0">
          <h3>Attention!</h3>
          <p>It is a dummy login panel to the University or school system intended for teachers and students</p>
          <p>To log in, choose one of the 3 accounts prepared for you! Then press the "Sign In" button</p>
        </Box>
      </LeftSide>
      <RightSide>
        Welcome in E-dziennik, Sign In!
        <Box width="50%">
          <Content>
            <div>
              {user.level === 0 && "Student"}
              {user.level === 1 && "Teacher"}
              {user.level === 2 && "Administrator"}, you can log in to your account.
            </div>
            <ButtonPanel>
              <Button
                onClick={() => {
                  setUser(false, 2);
                  localStorage.setItem("level", "2");
                }}
              >
                Admin
              </Button>
              <Button
                onClick={() => {
                  setUser(false, 1);
                  localStorage.setItem("level", "1");
                }}
              >
                Nauczyciel
              </Button>
              <Button
                onClick={() => {
                  setUser(false, 0);
                  localStorage.setItem("level", "0");
                }}
              >
                Uczeń
              </Button>
            </ButtonPanel>
          </Content>
          <Button
            onClick={() => {
              setUser(true);
              localStorage.setItem("loggedIn", "true");
            }}
          >
            Sign In
          </Button>
        </Box>
      </RightSide>
    </Wrapper>
  );
};

export default Login;
