import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <a
          href="https://prettylolli137.github.io/how-to-learn/"
          title="Статический сайт"
          className="portfolio__link"
        >
          Статический сайт
        </a>
        <hr className="portfolio__horizontal-rule"></hr>
        <a
          href="https://prettylolli137.github.io/russian-travel/"
          title="Адаптивный сайт"
          className="portfolio__link"
        >
          Адаптивный сайт
        </a>
        <hr className="portfolio__horizontal-rule"></hr>
        <a
          href="https://mesto-66.nick.nomoredomainsrocks.ru"
          title="Одностраничное приложение"
          className="portfolio__link"
        >
          Одностраничное приложение
        </a>
      </div>
    </section>
  );
}
export default Portfolio;
