import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = params.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await searchMovies(query);
        console.log(data);
        setMovies(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query]);

  console.log(movies);

  return (
    <div>
      <SearchBar />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
