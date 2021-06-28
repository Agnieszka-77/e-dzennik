import { useContext } from "react";
import { UserContext } from "providers/UserProvider";
import styled from "styled-components";
import Box from "components/atoms/Box/Box";
import ImageBackgroundLeftBar from "assets/images/backgroundLeftBar.jpg";

const Wrapper = styled.div`
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

const LeftSide = styled.div`
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
  @media screen and (min-width: 768px) {
    padding: 10px 5px;
    box-shadow: 3px 0px 6px 0px rgba(0, 0, 0, 0.3);
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: snow;
  padding: 10px;
`;

const Button = styled.button`
  height: 40px;
  min-width: 100px;
  background-color: ${({ theme: { color } }) => color.primary};
  color: snow;
  border: 2px solid ${({ theme: { color } }) => color.primary};
  border-radius: 100px;
  transition: 300ms;
  &:hover {
    background-color: ${({ theme: { color } }) => color.background};
    color: ${({ theme: { color } }) => color.primary};
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
  padding: 10px 10px 0px;
`;

const HighlightedText = styled.p`
  margin: 0 0 5px 0;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.primary};
`;

const WelcomeUser = ({ level }: { level: number }) => {
  switch (level) {
    case 1:
      return <>Teacher, you can log in to your account.</>;
    case 2:
      return <>Administrator, you can log in to your account.</>;
    default:
      return <>Student, you can log in to your account.</>;
  }
};

const Title = styled.h2`
  margin: 0px auto 30px 20px;
  font-size: 36px;
  color: ${({ theme: { color } }) => color.background};
  letter-spacing: 2px;
`;

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Wrapper>
      <LeftSide>
        <Title>E-Dziennik</Title>
        <Box
          width="clamp(300px,100%,80%)"
          backgroundColor="rgba(255,255,255,0.4)"
          margin="auto auto 10px"
          border="none"
        >
          <h3>Attention!</h3>
          <p>It is a dummy login panel to the University or school system intended for teachers and students</p>
          <p>To log in, choose one of the 3 accounts prepared for you! Then press the "Sign In" button</p>
        </Box>
      </LeftSide>
      <RightSide>
        <HighlightedText> Welcome in E-dziennik, Sign In!</HighlightedText>
        <Box width="clamp(300px,100%,40%)">
          <Content>
            <div>
              <HighlightedText>
                <WelcomeUser level={user.level} />
              </HighlightedText>
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
                Teacher
              </Button>
              <Button
                onClick={() => {
                  setUser(false, 0);
                  localStorage.setItem("level", "0");
                }}
              >
                Student
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
