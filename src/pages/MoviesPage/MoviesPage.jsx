import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [params] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = params.get("query") ?? "";

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }
    const getData = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await searchMovies(query);
        setMovies(data);

        if (data && data.length === 0) {
          toast.error("There is no movies like that");
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query]);
  return (
    <div className={s.wrapper}>
      <SearchBar />
      <Toaster
        reverseOrder={false}
        containerStyle={{
          top: 400,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          style: {
            background: "#3d1704",
            color: "#fff",
          },
        }}
      />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
