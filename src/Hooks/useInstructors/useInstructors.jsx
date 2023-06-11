import { useEffect, useState } from "react";

const useInstructors = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const instructors = users.filter((user) => user?.role === "instructor");
  return [instructors];
};

export default useInstructors;
