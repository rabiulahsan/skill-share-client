import SingleClass from "../SingleClass/SingleClass";
import useClasses from "../../../Hooks/AllClasses/useClasses";

const ShowAllClasses = () => {
  const [classes] = useClasses();

  return (
    <div className="px-[8%] py-[5%] bg-sky-50">
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 ">
        {classes.map((cls) => (
          <SingleClass key={cls.class_name} cls={cls}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default ShowAllClasses;
