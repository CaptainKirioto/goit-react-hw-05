import s from "./Details.module.css";

const Details = ({ details }) => {
  const imgURL = "https://image.tmdb.org/t/p/w300/";
  const genres = details.genres?.map((genre) => genre.name).join(", ");
  const validPoster = details.poster_path && details.poster_path !== null;

  return (
    <div className={s.wrapper}>
      {validPoster ? (
        <img
          src={`${imgURL}${details.poster_path}`}
          alt={`${details.title} poster`}
          className={s.poster}
        />
      ) : (
        <div className={s.noPoster}>Sorry, no poster</div>
      )}
      <div className={s.detailsWrap}>
        <h3>{details.title}</h3>
        <p>
          <span className={s.span}>Vote: </span>
          {details.vote_average || "No info"} (Voters: {details.vote_count})
        </p>
        <p>
          <span className={s.span}>Origin Country: </span>
          {details.origin_country || "No info"}
        </p>
        <p>
          <span className={s.span}>Release date: </span>
          {details.release_date || "No info"}
        </p>
        <p>
          <span className={s.span}>Overview: </span>
          {details.overview || "No info"}
        </p>

        <p>
          <span className={s.span}>Genres: </span> {genres || "No info"}
        </p>
      </div>
    </div>
  );
};

export default Details;
