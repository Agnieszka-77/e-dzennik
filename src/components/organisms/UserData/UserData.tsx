import Field from "components/molecules/Field/Field";
import { PropsUserData } from "types/types";

const UserData = ({ id, name, role }: PropsUserData) => {
  return (
    <>
      {name && <Field name="name" value={name} />}
      {id && <Field name="id" value={id} />}
      {role && <Field name="role" value={role} />}
    </>
  );
};

export default UserData;
