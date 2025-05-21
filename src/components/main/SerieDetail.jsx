import React from "react";
import { useParams } from "react-router-dom";

const SerieDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Serie</h1>
      {id}
    </div>
  );
};

export default SerieDetail;
