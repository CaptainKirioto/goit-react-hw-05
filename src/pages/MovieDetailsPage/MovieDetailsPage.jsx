import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Details from "../../components/Details/Details";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        const data = await getDetails(movieId);
        setDetails(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      <p>Movie Details Page: ID {movieId} </p>
      <Details details={details} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
