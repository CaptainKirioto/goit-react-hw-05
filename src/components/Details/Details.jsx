import s from "./Details.module.css";

const Details = ({ details }) => {
  const imgURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className={s.wrapper}>
      <img
        src={`${imgURL}${details.poster_path}`}
        alt={`${details.title} poster`}
        className={s.poster}
      />
      <div className={s.detailsWrap}>
        <h3>{details.title}</h3>
        <p>
          <span className={s.span}>Origin Country:</span>{" "}
          {details.origin_country}
        </p>
        <p>
          <span className={s.span}>Overview:</span> {details.overview}
        </p>
        <p>
          <span className={s.span}>Release date:</span> {details.release_date}
        </p>
      </div>
    </div>
  );
};

export default Details;
