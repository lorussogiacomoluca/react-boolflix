import React from "react";
import MovieCard from "../Search/SearchMovies/MovieCard";
import CastCard from "./CastCard";

const CastList = ({ cast }) => {
  return (
    <div className="row">
      <div className="col">
        <h3 className="text-muted">Cast</h3>
        <div className="d-flex gap-4 overflow-auto card-row">
          {cast.map((person) => (
            <CastCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastList;
