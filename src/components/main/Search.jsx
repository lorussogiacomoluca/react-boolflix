import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import TvCard from "./TvCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Search = () => {
  const { text } = useParams();
  //PRIVATE API KEY
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movieResults, setmovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);

  const fetchMovies = (type, text) => {
    const url = `https://api.themoviedb.org/3/search/${type}?include_adult=false&languageit-IT&page=1`;
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
        console.log(type, response.data.results);
        if (type === "movie") {
          setmovieResults(response.data.results);
        } else if (type === "tv") {
          setTvResults(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies("movie", text);
    fetchMovies("tv", text);
  }, [text]);

  return (
    <div className="container mt-4">
      <h1>Results for {text}</h1>

      <div className="row results-row d-flex gap-4 my-4">
        <div className="row">
          <div className="col">
            <h3 className="text-muted">Movies</h3>
            <div className="d-flex gap-4 overflow-auto card-row">
              {movieResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-muted">TV Series</h3>
            <div className="row">
              <div className="col">
                <div className="d-flex gap-4 overflow-auto card-row">
                  {tvResults.map((tv) => (
                    <TvCard key={tv.id} tv={tv} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
