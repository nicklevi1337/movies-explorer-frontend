import "./AccountLink.css";
import { Link } from "react-router-dom";

function AccountLink({ onClick }) {
  return (
    <nav className="accountLink">
      <Link to="/profile" className="accountLink__link" onClick={onClick}>
        Аккаунт
      </Link>
    </nav>
  );
}

export default AccountLink;
