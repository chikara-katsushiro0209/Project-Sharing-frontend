import { useEffect, useState } from "react";

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:8080/users`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users);

  return <div>users</div>;
};

export default Index;
