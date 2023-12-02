import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        В данном проекте использованы основные технологии фуллстек разработчика.
      </p>
      <ul className="techs__table">
        <li className="techs__link">
          <a
            href="https://webref.ru/html"
            target="_blank"
            rel="noreferrer"
            title="webref.ru/html"
            className="techs__link-text"
          >
            HTML
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://webref.ru/css"
            target="_blank"
            rel="noreferrer"
            title="webref.ru/css"
            className="techs__link-text"
          >
            CSS
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://learn.javascript.ru"
            target="_blank"
            rel="noreferrer"
            title="learn.javascript.ru"
            className="techs__link-text"
          >
            JS
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://ru.reactjs.org"
            target="_blank"
            rel="noreferrer"
            title="ru.reactjs.org"
            className="techs__link-text"
          >
            React
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://git-scm.com"
            target="_blank"
            rel="noreferrer"
            title="git-scm.com"
            className="techs__link-text"
          >
            Git
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
            title="expressjs.com"
            className="techs__link-text"
          >
            Express.js
          </a>
        </li>
        <li className="techs__link">
          <a
            href="https://www.mongodb.com"
            target="_blank"
            rel="noreferrer"
            title="mongodb.com"
            className="techs__link-text"
          >
            mongoDB
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
