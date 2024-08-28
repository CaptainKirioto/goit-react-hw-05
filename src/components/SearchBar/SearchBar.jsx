import s from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.text}>Find your movie</h2>
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

export default SearchBar;
