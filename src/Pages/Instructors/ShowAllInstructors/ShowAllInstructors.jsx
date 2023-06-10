import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useInstructors from "../../../Hooks/useInstructors/useInstructors";
import SingleInstructor from "../SingleInstructor/SingleInstructor";

const ShowAllInstructors = () => {
  const [instructors] = useInstructors();
  return (
    <>
      <SectionTitle heading="All Instructors"></SectionTitle>
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-3 px-[8%] py-[5%] bg-sky-50">
        {instructors.map((ins) => (
          <SingleInstructor key={ins.name} ins={ins}></SingleInstructor>
        ))}
      </div>
    </>
  );
};

export default ShowAllInstructors;
