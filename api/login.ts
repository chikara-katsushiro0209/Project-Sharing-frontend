import { headers } from "./api";

export const Login = async (id: number, password: string) => {
  const data = {
    id: id,
    password: password,
  };

  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };

  const response = await fetch("http://localhost:8080/login", requestOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
