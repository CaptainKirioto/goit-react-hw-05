import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";

  return (
    <div>
      <p className={s.text}>Find your movie</p>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Type here"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;
