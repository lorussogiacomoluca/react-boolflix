//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Icons
import "@fortawesome/fontawesome-free/css/all.min.css";
FlagIcon;

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layout
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import Homepage from "./pages/Homepage";

import "./index.css";
import MovieDetail from "./components/main/Search/SearchMovies/MovieDetail";
import SerieDetail from "./components/main/Search/SearchSeries/SerieDetail";
import FlagIcon from "./components/main/Utilities/FlagIcon";
import Search from "./pages/Search";
import Films from "./pages/Films";
import Series from "./pages/Series";

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
            <Route path="/films" element={<Films />}></Route>
            <Route path="/series" element={<Series />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
