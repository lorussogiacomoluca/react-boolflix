import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //State Variable for getting text in the search input
  const [search, setSearch] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-danger strong" to="/">
            BOOLFLIX
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Film
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Serie TV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Originali
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Aggiunti di recente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  La mia lista
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={onSubmitHandler}>
              <input
                className="form-control me-2 text-danger"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
