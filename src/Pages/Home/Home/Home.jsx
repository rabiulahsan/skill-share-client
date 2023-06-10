import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <About></About>
      <Courses></Courses>
    </div>
  );
};

export default Home;
