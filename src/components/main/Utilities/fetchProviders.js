import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const fetchProviders = (type) => {
  const url = `https://api.themoviedb.org/3/watch/providers/${type}?language=it-IT&watch_region=IT`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const results = axios
    .get(url, options)
    .then((response) => response.data.results);
  return results;
};

export default fetchProviders;
