import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../ui/Logo/Logo";
import { REGISTER_ERROR, AUTH_ERROR } from "../../utils/constants";

function Form({
  title,
  name,
  children,
  buttonText,
  text,
  pathname,
  link,
  onSubmit,
  autoComplete,
  isValid,
  isLoading,
  loadingButtonText,
  registerError,
  authError,
}) {
  const location = useLocation();

  return (
    <section className="form-section">
      <Logo />
      <h1 className="form-section__title">{title}</h1>
      <form
        className="form-section__form"
        action="#"
        name={name}
        noValidate
        disabled={!isValid}
        onSubmit={onSubmit}
        autoComplete={autoComplete}
      >
        <div className="form-section__input-container">{children}</div>
        <div
          className={
            location.pathname === "/signup"
              ? "form-section__space form-section__space_three-input"
              : "form-section__space form-section__space_two-input"
          }
        >
          <span className="form-section__error">
          {registerError ? `${REGISTER_ERROR}` : ''}
            {authError ? `${AUTH_ERROR}` : ''}
          </span>
        </div>
        <button
          type="submit"
         
          className={`form-section__btn ${!isValid || isLoading ? `form-section__btn_disabled`: '' }`}
          disabled={!isValid || isLoading}
        >
           {!isLoading ? `${buttonText}` : `${loadingButtonText}`}
        </button>
        <p className="form-section__text">
          {`${text} `}
          <Link to={pathname} className="form-section__link">
            {` ${link}`}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Form;

/*
        


{/* <span className="form-section__error form-section__error_hidden">
              Ошибка при авторизации
            </span> 

/* <button
              type="submit"
              className="form-section__btn form-section__btn_disabled"
            >
              {buttonText}
            </button> 

*/
