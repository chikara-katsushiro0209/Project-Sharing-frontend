import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Index = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:8080/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <Box key={index}>
            {movie.id}
            <br />
            {movie.title}
            <br />
          </Box>
        );
      })}
    </div>
  );
};

export default Index;
