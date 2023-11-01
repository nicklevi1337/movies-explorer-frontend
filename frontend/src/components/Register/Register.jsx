import { useState } from "react";
import Form from "./../Form/Form";
import FormInput from "../FormInput/FormInput";

function Register({user}) {
  const [isError, setError] = useState(true);

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
      >
        <FormInput
          title="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          value={user.name}
          placeholder="Введите имя"
          error=""
        />
        <FormInput
          title="E-mail"
          type="email"
          name="email"
          value={user.email}
          placeholder="Введите e-mail"
          error=""
        />
        <FormInput
          isError={isError}
          title="Пароль"
          type="password"
          name="password"
          minLength="8"
          maxLength="20"
          value={user.password}
          placeholder="Введите пароль"
          error="Пароль неверный"
        />
      </Form>
    </main>
  );
}

export default Register;

