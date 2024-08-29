import { useEffect, useState } from "react";
import { getCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const [cast, setCast] = useState([]);
  const movieId = useParams().movieId;
  const imgURL = "https://image.tmdb.org/t/p/w200/";

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoader(true);
        const data = await getCast(movieId);
        setCast(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.item}>
            {actor.profile_path !== null ? (
              <img
                src={`${imgURL}${actor.profile_path}`}
                alt={`${cast.title} poster`}
                className={s.img}
              />
            ) : (
              <div className={s.noImg}>Sorry, no photo</div>
            )}
            <div className={s.info}>
              <h4>{actor.name}</h4>
              <p className={s.role}>{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
