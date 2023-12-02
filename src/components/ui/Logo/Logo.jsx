import './Logo.css';
import { Link } from "react-router-dom";
import logo from './../../../images/header/logo.svg';

function Logo() {
    return (
        <Link to='/' className='logo'>
            <img src={logo} alt='Логотип'/>
        </Link>
    );
}
export default Logo;