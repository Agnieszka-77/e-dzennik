import Input from "components/atoms/Input/Input";
import { useState } from "react";
import { PropsSerchInput } from "types/types";

const SearchInput = ({ users, setCurrentUsers }: PropsSerchInput) => {
  const [lookingValue, setlookingValue] = useState("");

  const handlerInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setlookingValue(value);

  const hanlerlooking = () => {
    const searchUsers = users.filter(
      ({ id, name }) =>
        name.toLocaleLowerCase().includes(lookingValue.toLocaleLowerCase()) ||
        id.toLocaleLowerCase().includes(lookingValue.toLocaleLowerCase())
    );
    setCurrentUsers(searchUsers);
    lookingValue === "" && setCurrentUsers(users);
  };

  return (
    <Input
      type="text"
      data-testid="search-input"
      placeholder="name or id"
      value={lookingValue}
      onChange={handlerInput}
      onKeyUp={hanlerlooking}
    />
  );
};

export default SearchInput;
