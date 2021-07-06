import Field from "components/molecules/Field/Field";
import { PropsUserData } from "types/types";

const UserData = ({ id, name, role }: PropsUserData) => {
  return (
    <article>
      {name && <Field name="name" value={name} />}
      {id && <Field name="id" value={id} />}
      {role && <Field name="role" value={role} />}
    </article>
  );
};

export default UserData;
