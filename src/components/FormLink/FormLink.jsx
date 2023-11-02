import "./FormLink.css";
import { Link } from "react-router-dom";

function FormLink() {
  return (
    <nav className="formLink">
      <Link to="/signup" className="formLink__link formLink__link_type_links">
        Регистрация
      </Link>
      <Link to="/signin" className="formLink__link formLink__link_type_btn">
        Войти
      </Link>
    </nav>
  );
}

export default FormLink;
