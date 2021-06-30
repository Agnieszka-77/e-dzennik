import Title from "components/atoms/Title/Title";
import { UserContext } from "providers/UserProvider";
import { useContext, useState, useEffect } from "react";
import { getUserById } from "helpers/helpers";
const Grades = () => {
  const [user, , users] = useContext(UserContext);
  const [subjects, setsubjects] = useState([{ name: "english", grades: [0] }]);
  useEffect(() => {
    const currentSubjects = getUserById(users, user.id)?.subjects || [];
    setsubjects(currentSubjects);
    console.log(subjects);
  }, [user, subjects, users]);
  return (
    <>
      <Title margin="0 0 0 0">Oceny</Title>
      {subjects.map((subject) => {
        return (
          <div key={subject.name}>
            <span>{subject.name}:</span>
            <span>{subject.grades.toString()}</span>
          </div>
        );
      })}
    </>
  );
};

export default Grades;
