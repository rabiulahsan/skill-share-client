import { useEffect, useState } from "react";

const useClasses = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("https://skill-builder-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      });
  }, []);

  const classes = allClasses.filter((cls) => cls.status === "approved");
  return [classes];
};

export default useClasses;
