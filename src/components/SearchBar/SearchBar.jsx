import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.text}>Find your movie</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
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

export default SearchBar;
