import s from "./Details.module.css";

const Details = ({ details }) => {
  return (
    <div>
      <p>
        <span className={s.span}>Title:</span> {details.title}
      </p>
      <p>
        <span className={s.span}>Origin Country:</span> {details.origin_country}
      </p>
      <p>
        <span className={s.span}>Overview:</span> {details.overview}
      </p>
      <p>
        <span className={s.span}>Release date:</span> {details.release_date}
      </p>
    </div>
  );
};

export default Details;
