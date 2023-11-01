import "./FormInput.css";

function FormInput({
  isError,
  title,
  type,
  name,
  minLength,
  maxLength,
  value,
  placeholder,
  error,
}) {
  return (
    <label className="form-input">
      <p className="form-input__caption">{title}</p>
      <input
        className={`form-input__input ${
          isError ? "auth-input__input_valid_error" : ""
        }`}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        required
      />
      <span className="form-input__error">{error}</span>
      {/* <span className="form-input__error form-input__error_hidden">{error}</span> */}
    </label>
  );
}

export default FormInput;
