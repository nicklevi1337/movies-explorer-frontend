import Form from "./../Form/Form";
import FormInput from "../FormInput/FormInput";

function Authorization({ user }) {
  return (
    <main className="authorization">
      <Form
        title="Рады видеть!"
        name="login-form"
        error="При авторизации произошла ошибка."
        buttonText="Войти"
        text="Еще не зарегистрированы?"
        pathname="/signup"
        link="Регистрация"
      >
        <FormInput
          title="E-mail"
          type="email"
          name="email"
          value={user.email}
          placeholder="Введите e-mail"
          error=""
        />
        <FormInput
          title="Пароль"
          type="password"
          name="password"
          minLength="8"
          maxLength="20"
          placeholder="Введите пароль"
          value=""
          error=""
        />
      </Form>
    </main>
  );
}

export default Authorization;
