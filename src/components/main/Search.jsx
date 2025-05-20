import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { text } = useParams();
  return (
    <div>
      <h1>Search Page:</h1>
      <h4>{text}</h4>
    </div>
  );
};

export default Search;
