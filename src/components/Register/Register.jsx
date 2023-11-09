//import { useState } from "react";
import Form from "./../Form/Form";
import FormInput from "../FormInput/FormInput";
import useFormValidation from "./../../utils/useFormValidation";
import { EMAIL_REG, NAME_REG } from "../../utils/constants";

function Register({ onRegister, isLoading }) {
 // const [isError, setError] = useState(true);

 const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        error=""
        name="register-form"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        pathname="/signin"
        link="Войти"
        onSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
        loadingButtonText="Идет регистрация..."
        autoComplete="off"
      >
        <FormInput
          title="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          pattern={NAME_REG}
          value={values.name || ""}
          placeholder="Введите имя"
          onChange={handleChange}
          error={errors.name}
          isLoading={isLoading}
        />
        <FormInput
          title="E-mail"
          type="email"
          name="email"
          placeholder="Введите e-mail"
          autoComplete="off"
          pattern={EMAIL_REG}
          value={values.email || ""}
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

export default Register;
