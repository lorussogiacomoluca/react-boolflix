import React from "react";
import FlagIcon from "../../Utilities/FlagIcon";
import StarsRating from "../../Utilities/StarsRating";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie, upcoming, noShrink = false }) => {
  return (
    <>
      <div
        className={`card card-item ${!noShrink ? "flex-shrink-0" : ""} mb-3`}
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
            {!upcoming ? (
              <h5 className="card-title text-truncate">
                {movie.original_title}
              </h5>
            ) : (
              <h5 className="card-title">{movie.release_date}</h5>
            )}
            <p className="card-text">{movie.title}</p>
            <FlagIcon cod={movie.original_language} />
            <StarsRating rating={movie.vote_average} />
          </div>
          <NavLink to={`/film/${movie.id}`} className="btn btn-danger m-2">
            Scopri
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
