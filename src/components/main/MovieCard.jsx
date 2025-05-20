import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card col-3">
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
            <h5 className="card-title ">
              {movie.original_title} - {movie.original_language}
            </h5>
            <p className="card-text">{movie.title}</p>
            <p className="card-text">Rating: {movie.vote_average}</p>
          </div>
        </div>
        <a href="#" className="btn btn-danger mb-2">
          Go somewhere
        </a>
      </div>
    </>
  );
};

export default MovieCard;
