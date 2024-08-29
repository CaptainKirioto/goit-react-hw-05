import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjJkNjQ3NjI2MjRkNzg2MjQ3MzY2Mjg0ODFiYTBjNiIsIm5iZiI6MTcyNDY3ODMwNC41MTg0ODQsInN1YiI6IjY2YjYzMmExZDgxODMxZjQ1MmU1ZDRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aeTV1UZhtjq09VCsih4cYk53W1Rg9ijkNZVsqPMDf4I";

// const options = {
//   headers: {
//     Authorization:
//       ,
//   },
// };

export const fetchMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

export const getDetails = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}`);
  return response.data;
};

export const getCast = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/credits`);
  return response.data.cast;
};

export const fetchReviews = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/reviews`);
  return response.data.results;
};
