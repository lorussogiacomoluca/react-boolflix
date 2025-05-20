import React from "react";
import FlagIcon from "./FlagIcon";
import StarsRating from "./StarsRating";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div
        className="card card-item flex-shrink-0 mb-3"
        style={{
          width: "300px",
          height: "450px",
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="card-content-overlay">
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : `https://picsum.photos/250/146`
            }
            className="card-img-top mt-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.title}</p>
            <FlagIcon cod={movie.original_language} />
            <StarsRating rating={movie.vote_average} />
          </div>
          <NavLink to="/" className="btn btn-danger m-2">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
