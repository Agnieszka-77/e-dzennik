import { useContext, useState } from "react";
import { UserContext } from "providers/UserProvider";
import StyledNavLink from "components/atoms/StyledNavLink/StyledNavLink";
import Title from "components/atoms/Title/Title";
import { Hamburger, Wrapper } from "./Navigation.style";
import pulpitIcon from "assets/images/pulpitIcon.svg";
import profileIcon from "assets/images/profileIcon.svg";
import gradesIcon from "assets/images/gradesIcon.svg";
import { Routes } from "utils/utils";

const Navigation: React.FC = () => {
  const [{ level }, setUser] = useContext(UserContext);
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
          <StyledNavLink to={Routes.DESKTOP} src={pulpitIcon} exact onClick={closeMenu}>
            <span>desktop</span>
          </StyledNavLink>
          <StyledNavLink to={Routes.PROFILE} src={profileIcon} exact onClick={closeMenu}>
            <span>profile</span>
          </StyledNavLink>

          {level === "0" ? (
            <StyledNavLink to={Routes.GRADES} src={gradesIcon} exact onClick={closeMenu}>
              <span>grades</span>
            </StyledNavLink>
          ) : (
            <StyledNavLink to={Routes.STUDENTS} src={gradesIcon} exact onClick={closeMenu}>
              <span>studends</span>
            </StyledNavLink>
          )}
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
