import "./FilterCheckbox.css";

function FilterCheckbox({ isFilter, onFilterChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isFilter}
        onChange={(evt) => onFilterChange(evt.target.checked)}
        name="checkbox"
      />
      <span className="checkbox__div"></span>
    </label>
  );
}

export default FilterCheckbox;