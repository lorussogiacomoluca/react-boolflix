import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const { text } = useParams();
  //PRIVATE API KEY
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
  const [results, setResults] = useState([]);

  const fetchMovies = (url, text) => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        params: {
          query: text,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies(url, text);
  }, [text]);

  return (
    <div>
      <h1>Results for {text}</h1>
      <ul>
        {results.map((res) => (
          <li key={res.id}>{res.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
