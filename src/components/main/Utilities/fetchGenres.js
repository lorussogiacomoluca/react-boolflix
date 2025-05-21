import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const fetchGenres = (type) => {
  const url = `https://api.themoviedb.org/3/genre/${type}/list?language=it`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const results = axios
    .get(url, options)
    .then((response) => response.data.genres);
  return results;
};

export default fetchGenres;
