import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import StarsRating from "./StarsRating";
import Flag from "react-world-flags";
import FlagIcon from "./FlagIcon";
import CastList from "./CastList";
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], production_companies: [] });
  const [cast, setCast] = useState([]);

  const fetchMovieInfo = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=it-IT`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    axios
      .get(url, options)
      .then((response) => setMovie(response.data))
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
  };

  const fetchCredits = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US
`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    axios
      .get(url, options)
      .then((response) => setCast(response.data.cast))
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
  };

  useEffect(() => {
    fetchMovieInfo();
    fetchCredits();
  }, []);
  return (
    <div>
      <div className="slider-container">
        <div className="img-hero">
          <img
            className="slider-img"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
          <div className="slider-overlay" />
        </div>
      </div>
      <div className="container my-4">
        <div className="movie-info-header d-flex align-items-center gap-4">
          <h1>{movie.title}</h1>
          <div>
            <StarsRating rating={movie.vote_average} />
          </div>
        </div>

        <div className="movie-info-subtitle d-flex gap-4">
          <FlagIcon cod={movie.original_language} />
          <div className="genres-badge">
            {movie.genres.map((genere) => (
              <NavLink key={genere.id} to={`/genere/${genere.id}`}>
                <span className="badge text-bg-danger me-2 mb-2">
                  {genere.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <p>{movie.overview}</p>

        <p>
          <strong>Data di uscita:</strong> {movie.release_date}
        </p>

        <CastList cast={cast} />
        <h3 className="my-4">Produced by:</h3>
        <div className="companies d-flex align-items-center justify-content-between">
          {movie.production_companies.map((company) => (
            <img
              className="company-logo"
              key={company.id}
              src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
