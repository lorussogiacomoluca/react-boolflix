import { useEffect, useState } from "react";

import fetchMovies from "../components/main/Utilities/fetchMovies";
import Slider from "../components/main/Utilities/Slider";
import UpComing from "../components/main/Utilities/UpComing";

const Homepage = () => {
  return (
    <div>
      <Slider />
      <UpComing />
    </div>
  );
};

export default Homepage;
