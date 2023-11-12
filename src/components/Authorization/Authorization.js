import Form from "./../Form/Form";
import FormInput from "../FormInput/FormInput";
import useFormValidation from "../../utils/useFormValidation";
import { EMAIL_REG } from "../../utils/constants";

function Authorization({ onLogin, isLoading, authError }) {

const {values, errors, isValid, handleChange } = useFormValidation();

function handleSubmit(e) {
  e.preventDefault();
  onLogin( values.email, values.password);
}


  return (
    <main className="authorization">
      <Form
        title="Рады видеть!"
        name="login-form"
        authError={authError}
        buttonText="Войти"
        text="Еще не зарегистрированы?"
        pathname="/signup"
        link="Регистрация"
        onSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
        loadingButtonText="Идет проверка..."
        autoComplete="off"
      >
        <FormInput
          title="E-mail"
          type="email"
          name="email"
          value={values.email || ""}
          placeholder="Введите e-mail"
          autoComplete="off"
          pattern={EMAIL_REG}
          onChange={handleChange}
          error={errors.email}
          isLoading={isLoading}
        />
        <FormInput
          title="Пароль"
          type="password"
          name="password"
          minLength="8"
          maxLength="20"
          autoComplete="off"
          value={values.password || ""}
          placeholder="Введите пароль"
          error={errors.password}
          isLoading={isLoading}
          onChange={handleChange}
        />
      </Form>
    </main>
  );
}

export default Authorization;
