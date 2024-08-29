import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  const movieId = useParams().movieId;

  useEffect(() => {
    async function getReviews() {
      try {
        setError(false);
        setLoader(true);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ul className={s.list}>
        {reviews.map((review) => (
          <li key={review.id} className={s.item}>
            <p className={s.author}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
