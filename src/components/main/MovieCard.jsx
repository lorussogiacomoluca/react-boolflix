import React from "react";
import FlagIcon from "./FlagIcon";
import StarsRating from "./StarsRating";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card flex-shrink-0" style={{ width: "300px" }}>
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
          <div className="col d-flex flex-column justify-content-between h-100">
            <h5 className="card-title d-flex gap-3">{movie.original_title}</h5>
            <p className="card-text">{movie.title}</p>
            <FlagIcon cod={movie.original_language} />
            <StarsRating rating={movie.vote_average} />
          </div>
        </div>
        <a href="#" className="btn btn-danger m-2">
          Go somewhere
        </a>
      </div>
    </>
  );
};

export default MovieCard;
