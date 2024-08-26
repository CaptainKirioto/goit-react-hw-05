import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <p className={s.text}>Oops! Page not found, sorry</p>
      <Link to="/" className={s.link}>
        Let's go back to Home Page!
      </Link>
    </div>
  );
};

export default NotFoundPage;
