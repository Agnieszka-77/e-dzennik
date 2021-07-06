import StyledNavLink from "components/atoms/StyledNavLink/StyledNavLink";
import { Routes } from "utils/utils";
import pulpitIcon from "assets/images/pulpitIcon.svg";
import profileIcon from "assets/images/profileIcon.svg";
import gradesIcon from "assets/images/gradesIcon.svg";

const Menu = ({ level, closeMenu }: { level: string; closeMenu: React.MouseEventHandler<HTMLAnchorElement> }) => {
  return (
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
          <span>students</span>
        </StyledNavLink>
      )}
    </div>
  );
};

export default Menu;
