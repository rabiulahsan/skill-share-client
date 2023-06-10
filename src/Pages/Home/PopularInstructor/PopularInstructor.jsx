import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useInstructors from "../../../Hooks/useInstructors/useInstructors";
import SingleInstructor from "../../Instructors/SingleInstructor/SingleInstructor";

const PopularInstructor = () => {
  const [instructors] = useInstructors();

  const popularInstructors = instructors.filter((ins) => ins.popular === true);

  return (
    <div>
      <SectionTitle heading="Top Instructors"></SectionTitle>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 px-[8%] py-[5%] bg-sky-50">
        {popularInstructors.map((ins) => (
          <SingleInstructor key={ins.class_name} ins={ins}></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
