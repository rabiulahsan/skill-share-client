import { useEffect, useState } from "react";

const useClasses = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      });
  }, []);

  const classes = allClasses.filter((cls) => cls.status === "approved");
  return [classes];
};

export default useClasses;
