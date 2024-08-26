import MovieCard from "../MovieCard/MovieCard";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
