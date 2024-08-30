import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter something!");
      return;
    }

    setSearchParams({ query });
  };

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
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
