//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Icons
import "@fortawesome/fontawesome-free/css/all.min.css";
import Flag from "react-world-flags";

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layout
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import Homepage from "./components/main/Homepage";
import Search from "./components/main/Search";

import "./index.css";
import MovieDetail from "./components/main/movieDetail";
import SerieDetail from "./components/main/serieDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/search/:text" element={<Search />}></Route>
            <Route path="/film/:id" element={<MovieDetail />}></Route>
            <Route path="/serie/:id" element={<SerieDetail />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
