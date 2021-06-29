import { useContext } from "react";
import { UserContext } from "providers/UserProvider";
import styled from "styled-components";
import StyledNavLink from "components/atoms/StyledNavLink/StyledNavLink";
import pulpitIcon from "assets/images/pulpitIcon.svg";
import profileIcon from "assets/images/profileIcon.svg";

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100%;
  width: 30%;
  border-right: solid 4px ${({ theme }) => theme.color.primary};
`;

const Navigation: React.FC = () => {
  const [, setUser] = useContext(UserContext);
  return (
    <Wrapper>
      <h2>E-DZIENNIK</h2>
      <div>
        <StyledNavLink to="/pulpit" src={pulpitIcon} exact>
          <span>pulpit</span>
        </StyledNavLink>
        <StyledNavLink to="/profile" src={profileIcon} exact>
          <span>profile</span>
        </StyledNavLink>
      </div>
      <StyledNavLink
        to="/"
        exact
        margin="auto auto 0"
        onClick={() => {
          setUser(false, 0);
          localStorage.setItem("loggedIn", "false");
          localStorage.setItem("level", "0");
        }}
      >
        logout
      </StyledNavLink>
    </Wrapper>
  );
};

export default Navigation;
