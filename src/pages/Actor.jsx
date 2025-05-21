import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

const Actor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .get(`https://api.themoviedb.org/3/person/${id}?language=it-IT`, options)
      .then((res) => {
        setActor(res.data);

        return axios.get(
          `https://api.themoviedb.org/3/person/${id}/combined_credits?language=it-IT`,
          options
        );
      })
      .then((resCredits) => {
        setCredits(resCredits.data.cast);
      })
      .catch((err) => {
        console.error("Errore caricamento attore:", err);
      });
  }, [id]);

  if (!actor) return <div className="text-center my-5">Caricamento...</div>;

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{actor.name}</h2>
          {actor.birthday && (
            <p>
              <strong>Data di nascita:</strong> {actor.birthday}
            </p>
          )}
          {actor.place_of_birth && (
            <p>
              <strong>Luogo di nascita:</strong> {actor.place_of_birth}
            </p>
          )}
          {actor.deathday && (
            <p>
              <strong>Data di morte:</strong> {actor.deathday}
            </p>
          )}
          <p className="mt-3">
            {actor.biography || "Biografia non disponibile."}
          </p>
        </div>
      </div>

      <hr className="my-5" />

      <div>
        <h4>Film e Serie</h4>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          {credits
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, 12)
            .map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <NavLink
                    to={
                      item.media_type === "movie"
                        ? `/film/${item.id}`
                        : `/serie/${item.id}`
                    }
                    className="text-decoration-none text-reset"
                  >
                    {item.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        className="card-img-top"
                        alt={item.title || item.name}
                      />
                    ) : (
                      <div
                        className="bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ height: "250px" }}
                      >
                        Nessuna immagine
                      </div>
                    )}
                    <div className="card-body">
                      <h6 className="card-title text-truncate">
                        {item.title || item.name}
                      </h6>
                      <p
                        className="card-text text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {item.media_type === "movie" ? "Film" : "Serie TV"}
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Actor;
