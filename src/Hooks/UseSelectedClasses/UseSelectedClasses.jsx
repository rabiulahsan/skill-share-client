import { useEffect, useState } from "react";

const UseSelectedClasses = () => {
  const [allSelectedClasses, setAllSelectedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/selectedclasses")
      .then((res) => res.json())
      .then((data) => {
        setAllSelectedClasses(data);
      });
  }, []);

  return [allSelectedClasses];
};

export default UseSelectedClasses;
