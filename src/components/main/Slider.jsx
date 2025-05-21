import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import fetchMovies from "./fetchMovies";

const Slider = () => {
  const [topFive, setTopFive] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((response) => {
        setTopFive(response.data.results.slice(0, 5));
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
      });
  }, []);

  const [slide, setSlide] = useState(0);
  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? topFive.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setSlide((prev) => (prev === topFive.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <div className="slider-container">
        {topFive[slide] && (
          <img
            className="slider-img"
            src={`https://image.tmdb.org/t/p/original${topFive[slide].backdrop_path}`}
            alt={topFive[slide].title}
          />
        )}
        <div className="slider-overlay" />
        {topFive[slide] && (
          <div className="slider-info d-none d-md-block ms-3">
            <h2>{topFive[slide].title}</h2>
            <p className="availability-tag">Disponibile ora!</p>
            <NavLink to="/film:{topFive.[slide]/id}">
              <div className="btn btn-secondary ">
                <i className="fa-solid fa-play"></i> Guarda
              </div>
            </NavLink>
          </div>
        )}

        <i
          className="slide-nav slide-nav-prev fa-solid fa-arrow-left fs-2"
          onClick={prevSlide}
        ></i>
        <i
          className="slide-nav slide-nav-next fa-solid fa-arrow-right fs-2"
          onClick={nextSlide}
        ></i>
      </div>
      {topFive[slide] && (
        <div className="info-mobile d-md-none px-4">
          <div className="mobile-content">
            <h2 className="mobile-title">{topFive[slide].title}</h2>
            <p className="mobile-availability">Disponibile ora!</p>
            <NavLink to={`/film:${topFive[slide].id}`}>
              <div className="btn btn-secondary w-100">
                <i className="fa-solid fa-play"></i> Scopri
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
