import { useEffect, useState } from "react";

const useInstructors = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://skill-builder-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const instructors = users.filter((user) => user?.role === "instructor");
  return [instructors];
};

export default useInstructors;
