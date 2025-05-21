import React from "react";
import FlagIcon from "../../Utilities/FlagIcon";
import StarsRating from "../../Utilities/StarsRating";
import { NavLink } from "react-router-dom";

const TvCard = ({ tv }) => {
  return (
    <>
      <div
        className="card card-item flex-shrink-0 mb-3"
        style={{
          width: "300px",
          height: "450px",
          backgroundImage: `url(${
            tv.poster_path
              ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
              : `https://picsum.photos/300/450`
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div className="card-content-overlay">
          <img
            src={
              tv.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
                : `https://picsum.photos/250/146`
            }
            className="card-img-top mt-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tv.original_name}</h5>
            <p className="card-text">{tv.name}</p>
            <FlagIcon cod={tv.original_language} />
            <StarsRating rating={tv.vote_average} />
          </div>
          <NavLink to={`/serie/${tv.id}`} className="btn btn-danger m-2">
            Scopri
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TvCard;
