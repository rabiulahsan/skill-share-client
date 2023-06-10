import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses/useClasses";
import SingleClass from "../../Classes/SingleClass/SingleClass";

const PopularClass = () => {
  const [classes] = useClasses();

  const popularClasses = classes.filter((cls) => cls.trending === true);
  return (
    <>
      <SectionTitle heading="Trending Classes"></SectionTitle>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 px-[8%] py-[5%] bg-sky-50">
        {popularClasses.map((cls) => (
          <SingleClass key={cls.class_name} cls={cls}></SingleClass>
        ))}
      </div>
    </>
  );
};

export default PopularClass;
