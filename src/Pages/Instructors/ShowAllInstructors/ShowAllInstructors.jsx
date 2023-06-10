import useInstructors from "../../../Hooks/useInstructors/useInstructors";
import SingleInstructor from "../SingleInstructor/SingleInstructor";

const ShowAllInstructors = () => {
  const [instructors] = useInstructors();
  return (
    <div>
      {instructors.map((ins) => (
        <SingleInstructor key={ins.name} ins={ins}></SingleInstructor>
      ))}
    </div>
  );
};

export default ShowAllInstructors;
