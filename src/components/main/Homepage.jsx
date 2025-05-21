import { useEffect, useState } from "react";
import fetchMovies from "./fetchMovies";
import Slider from "./Slider";
import UpComing from "./UpComing";

const Homepage = () => {
  return (
    <div>
      <Slider />
      <UpComing />
    </div>
  );
};

export default Homepage;
