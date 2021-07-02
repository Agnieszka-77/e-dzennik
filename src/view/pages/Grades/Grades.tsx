import Title from "components/atoms/Title/Title";
import SubjectGardes from "components/molecules/SubjectGardes/SubjectGardes";
import { UserContext } from "providers/UserProvider";
import { useContext, useState, useEffect } from "react";
import { getUserById } from "utils/utils";

const Grades = () => {
  const [user, , users] = useContext(UserContext);
  const [subjects, setsubjects] = useState([{ name: "english", grades: [0] }]);

  useEffect(() => {
    const currentSubjects = getUserById(users, user.id)?.subjects || [];
    setsubjects(currentSubjects);
  }, [user, subjects, users]);

  return (
    <>
      <Title margin="0 0 20px 0" color="primary">
        Oceny
      </Title>
      {subjects.map((subject) => {
        return <SubjectGardes key={`subject${subject.name}`} subject={subject} />;
      })}
    </>
  );
};

export default Grades;
