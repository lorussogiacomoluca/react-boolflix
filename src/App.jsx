import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Flag from "react-world-flags";

function App() {
  //PRIVATE API KEY
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <h1>Hello World</h1>
      <i className="fas fa-home"></i>
      <Flag code="US" style={{ width: 32, height: 24 }} />
      <Flag code="IT" style={{ width: 32, height: 24 }} />
    </>
  );
}

export default App;
