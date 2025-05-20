import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mt-4">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
