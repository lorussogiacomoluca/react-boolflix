import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import fetchMovies from "./fetchMovies";
import MovieCard from "./MovieCard";

const UpComing = () => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetchMovies("upcoming").then((response) => {
      setUpcoming(response.data.results);
    });
  }, []);
  console.log(upcoming);
  return (
    <>
      <div className="container mt-4">
        <div className="homepage-title">
          <h1>In uscita prossimamente</h1>
        </div>
        <div className="film-list">
          <div className="row">
            <div className="col">
              <h3 className="text-muted">Movies</h3>
              <div className="d-flex gap-4 overflow-auto card-row">
                {upcoming.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} upcoming={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComing;
