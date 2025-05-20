import React from "react";
import FlagIcon from "./FlagIcon";
import StarsRating from "./StarsRating";

const TvCard = ({ tv }) => {
  return (
    <>
      <div className="card flex-shrink-0" style={{ width: "300px" }}>
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
          <div className="col d-flex flex-column justify-content-between h-100">
            <h5 className="card-title d-flex gap-3">{tv.original_name}</h5>
            <p className="card-text">{tv.name}</p>
            <FlagIcon cod={tv.original_language} />
            <StarsRating rating={tv.vote_average} />
          </div>
        </div>
        <a href="#" className="btn btn-danger m-2">
          Go somewhere
        </a>
      </div>
    </>
  );
};

export default TvCard;
