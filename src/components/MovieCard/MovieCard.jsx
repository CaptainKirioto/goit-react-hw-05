import { Link } from "react-router-dom";
import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const imgURL = "https://image.tmdb.org/t/p/w500/";
  console.log(movie);
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`${imgURL}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className={s.poster}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
