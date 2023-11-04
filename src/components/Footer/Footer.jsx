import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <ul className="footer__container-link">
            <li className="footer__link">
          <a
            href="https://t.me/lollisama"
            target="_blank"
            rel="noreferrer"
            title="Telegram"
            className="footer__link-text"
          >
            Telegram
          </a>
          </li>
          <li  className="footer__link">
          <a
            href="https://github.com/PrettyLolli137"
            target="_blank"
            rel="noreferrer"
            title="Github"
            className="footer__link-text"
          >
            Github
          </a>
          </li>
        </ul>
        <p className="footer__text">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
export default Footer;
