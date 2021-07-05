import UserData from "components/organisms/UserData/UserData";
import { UserContext } from "providers/UserProvider";
import { useContext } from "react";

const Profil = () => {
  const [{ id, name, level }] = useContext(UserContext);
  return (
    <>
      <UserData id={id} name={name} role={level === "0" ? "Student" : "Teacher"} />
    </>
  );
};

export default Profil;
