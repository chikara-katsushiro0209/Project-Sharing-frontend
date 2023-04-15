import { headers } from "./api";

export const fetchUser = async (id: string | string[]) => {
  const response = await fetch(`http://localhost:8080/users/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const UpdateUser = async (id: string | string[], lastName: string) => {
  const data = {
    lastName: lastName,
  };

  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };

  const response = await fetch(
    `http://localhost:8080/users/${id}`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
