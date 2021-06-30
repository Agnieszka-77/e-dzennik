import { useContext, useState } from "react";
import { UserContext } from "providers/UserProvider";
import StyledNavLink from "components/atoms/StyledNavLink/StyledNavLink";
import pulpitIcon from "assets/images/pulpitIcon.svg";
import profileIcon from "assets/images/profileIcon.svg";
import Title from "components/atoms/Title/Title";
import { Hamburger, Wrapper } from "./Navigation.style";

const Navigation: React.FC = () => {
  const [, setUser] = useContext(UserContext);
  const [active, setActive] = useState(false);

  const handlerMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <Hamburger active={active} onClick={handlerMenu} />
      <Wrapper active={active}>
        <Title size="l" color="primary">
          Journal
        </Title>
        <div>
          <StyledNavLink to="/desktop" src={pulpitIcon} exact onClick={closeMenu}>
            <span>desktop</span>
          </StyledNavLink>
          <StyledNavLink to="/profile" src={profileIcon} exact onClick={closeMenu}>
            <span>profile</span>
          </StyledNavLink>
          <StyledNavLink to="/grades" src={profileIcon} exact onClick={closeMenu}>
            <span>grades</span>
          </StyledNavLink>
        </div>
        <StyledNavLink
          to="/"
          exact
          margin="auto auto 0"
          onClick={() => {
            setUser(false, "0");
            localStorage.setItem("loggedIn", "false");
            localStorage.setItem("level", "0");
          }}
        >
          logout
        </StyledNavLink>
      </Wrapper>
    </>
  );
};

export default Navigation;
