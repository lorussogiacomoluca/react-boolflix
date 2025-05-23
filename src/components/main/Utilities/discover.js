import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const discover = (type, page = 1, selectedGenres = "", provider = "") => {
  const url = `
      https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=it-IT&page=${page}&sort_by=popularity.desc&with_genres=${selectedGenres}&with_watch_providers=${provider}&watch_region=IT
`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const results = axios.get(url, options).then((response) => response.data);
  return results;
};

export default discover;
