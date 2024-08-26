import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      <p className={s.text}>Trending movies</p>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
