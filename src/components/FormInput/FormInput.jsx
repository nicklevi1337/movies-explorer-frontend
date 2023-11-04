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
       <span className="form-input__caption">{title}</span>
      <input
        className={`form-input__input ${
          isError ? "form-input__input_valid_error" : ""
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
    </label>
  );
}

export default FormInput;
