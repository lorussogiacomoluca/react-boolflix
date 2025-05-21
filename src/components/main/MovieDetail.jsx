import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie Detail</h1>
      {id}
    </div>
  );
};

export default MovieDetail;
