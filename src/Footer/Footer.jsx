import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <p className={s.text}>
          All rights reserved by
          <a
            href="https://github.com/CaptainKirioto"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            {" "}
            me
          </a>
        </p>
        <Link to="/" className={s.logo}>
          MovieSearch
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
