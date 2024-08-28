import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Details from "../../components/Details/Details";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
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

  console.log(details);

  return (
    <div>
      {/* <p>Movie Details Page: ID {movieId} </p> */}
      <Details details={details} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ul className={s.nav}>
        <linavLink>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
        </linavLink>
        <li>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
