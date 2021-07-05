import { useContext, useState } from "react";
import { UserContext } from "providers/UserProvider";
import StyledNavLink from "components/atoms/StyledNavLink/StyledNavLink";
import Title from "components/atoms/Title/Title";
import { Hamburger, Wrapper } from "./Navigation.style";
import Menu from "components/molecules/Menu/Menu";

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
        <Menu level={level} closeMenu={closeMenu} />
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
