import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

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
