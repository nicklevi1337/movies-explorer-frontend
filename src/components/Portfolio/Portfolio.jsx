import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <a
          href="https://prettylolli137.github.io/how-to-learn/"
          title="Статический сайт"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          Статичный сайт
        </a>
        <hr className="portfolio__horizontal-rule"></hr>
        <a
          href="https://prettylolli137.github.io/russian-travel/"
          title="Адаптивный сайт"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          Адаптивный сайт
        </a>
        <hr className="portfolio__horizontal-rule"></hr>
        <a
          href="https://mesto-66.nick.nomoredomainsrocks.ru"
          title="Одностраничное приложение"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          Одностраничное приложение
        </a>
      </div>
    </section>
  );
}
export default Portfolio;
