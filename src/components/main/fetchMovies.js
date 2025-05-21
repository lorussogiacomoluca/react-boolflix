import axios from "axios";

// | Valore `type`   | Descrizione                           | Endpoint completo    |
// | --------------- | ------------------------------------- | -------------------- |
// | `"popular"`     | Film popolari                         | `/movie/popular`     |
// | `"top_rated"`   | Film con le valutazioni più alte      | `/movie/top_rated`   |
// | `"upcoming"`    | Film in uscita prossimamente          | `/movie/upcoming`    |
// | `"now_playing"` | Film attualmente al cinema            | `/movie/now_playing` |
// | `"latest"`      | Ultimo film aggiunto (1 solo oggetto) | `/movie/latest`      |

const apiKey = import.meta.env.VITE_API_KEY;

const fetchMovies = (type = "top_rated") => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=it-IT&page=1`;

  return axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
};

export default fetchMovies;
