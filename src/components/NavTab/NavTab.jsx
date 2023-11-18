import "./NavTab.css";

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__container">
        <a href="#aboutProject" title="О проекте" className="nav-tab__link">
          О проекте
        </a>
      </li>
      <li className="nav-tab__container">
        <a href="#techs" title="Технологии" className="nav-tab__link">
          Технологии
        </a>
      </li>
      <li className="nav-tab__container">
        <a href="#aboutMe" title="Студент" className="nav-tab__link">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
