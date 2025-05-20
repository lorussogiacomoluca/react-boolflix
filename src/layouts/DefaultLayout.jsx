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
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
