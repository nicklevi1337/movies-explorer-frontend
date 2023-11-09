import "./FormInput.css";

function FormInput({
  title,
  type,
  name,
  minLength,
  maxLength,
  placeholder,
  autoComplete,
  pattern,
  value,
  onChange,
  error,
  isLoading,
}) {
  return (
    <label className="form-input">
       <span className="form-input__caption">{title}</span>
      <input
        className={`form-input__input ${
          error ? "form-input__input_valid_error" : ""
        }`}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={value || ""}
        pattern={pattern}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={isLoading ? true : false}
        required
      />
      <span className="form-input__error">{error}</span>
    </label>
  );
}

export default FormInput;
