import React, { useState, useEffect } from "react";
import fetchGenres from "../components/main/Utilities/fetchGenres";
import discover from "../components/main/Utilities/discover";
import MovieCard from "../components/main/Search/SearchMovies/MovieCard";
import Pagination from "../components/main/Utilities/Pagination";
import TvCard from "../components/main/Search/SearchSeries/TvCard";

const Series = () => {
  const type = "tv";
  const [movieGenres, setMovieGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [discoverList, setDiscoverList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (id) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const genreQuery = selectedGenres.join(",");

  useEffect(() => {
    fetchGenres(type).then((genres) => {
      setMovieGenres(genres);
    });
  }, []);

  useEffect(() => {
    discover(type, page, genreQuery).then((results) => {
      setDiscoverList(results.results);
      setTotalPages(results.total_pages);
      setTotalResults(results.total_results);
    });
  }, [page, selectedGenres]);
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col d-flex align-items-center justify-content-between">
          <h4>Generi</h4>
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="genres-list">
            {movieGenres.map((genre) => (
              <span
                className={`badge me-2 rounded-pill ${
                  selectedGenres.includes(genre.id)
                    ? "text-bg-success"
                    : "text-bg-danger"
                } pointer mb-2`}
                onClick={() => toggleGenre(genre.id)}
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col my-4">Scopri altre {totalResults} serie tv</div>
      </div>
      <div className="row">
        <div className="col d-flex flex-wrap gap-3">
          {discoverList.map((tv) => (
            <TvCard key={tv.id} tv={tv} noShrink={true} />
          ))}
        </div>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
      />
    </div>
  );
};

export default Series;
