import { useEffect, useState } from "react";

const UseSelectedClasses = () => {
  const [allSelectedClasses, setAllSelectedClasses] = useState([]);

  useEffect(() => {
    fetch("https://skill-builder-server.vercel.app/selectedclasses")
      .then((res) => res.json())
      .then((data) => {
        setAllSelectedClasses(data);
      });
  }, []);

  return [allSelectedClasses];
};

export default UseSelectedClasses;
