import SingleClass from "../SingleClass/SingleClass";
import useClasses from "../../../Hooks/useClasses/useClasses";

const ShowAllClasses = () => {
  const [classes] = useClasses();

  return (
    <div className="grid gap-12 grid-cols-1 lg:grid-cols-3 px-[8%] py-[5%] bg-sky-50">
      {classes.map((cls) => (
        <SingleClass key={cls.class_name} cls={cls}></SingleClass>
      ))}
    </div>
  );
};

export default ShowAllClasses;
