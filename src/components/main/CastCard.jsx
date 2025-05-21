import React from "react";
import { NavLink } from "react-router-dom";

const CastCard = ({ person }) => {
  return (
    <div className="person-card rounded col-4">
      <div className="image-frame">
        <img
          className="person-image"
          src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
          alt={person.name}
        />
      </div>
      <div className="person-card-body pt-3">
        <h5>{person.name}</h5>
        <p>as: {person.character}</p>
        <NavLink className="btn btn-danger" to={`/actor/${person.id}`}>
          Scorpi
        </NavLink>
      </div>
    </div>
  );
};

export default CastCard;
