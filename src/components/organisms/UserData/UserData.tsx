import Field from "components/molecules/Field/Field";

const UserData = ({ id, name, role }: { id?: string; name?: string; role?: string }) => {
  return (
    <>
      {name && <Field name="name" value={name} />}
      {id && <Field name="id" value={id} />}
      {role && <Field name="role" value={role} />}
    </>
  );
};

export default UserData;
