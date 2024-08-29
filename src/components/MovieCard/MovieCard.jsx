import { Link, useLocation } from "react-router-dom";
import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const validPoster = movie.poster_path && movie.poster_path !== null;
  const imgURL = "https://image.tmdb.org/t/p/w500/";

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Link to={`/movies/${movie.id}`} state={location}>
        {validPoster ? (
          <img
            src={`${imgURL}${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className={s.poster}
          />
        ) : (
          <div className={s.noPoster}>Sorry, no poster</div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
