import { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [isFilter, setFilter] = useState(false);

  const handleFilterChange = () => {
    setFilter(!isFilter);
  };

  return (
    <section className="search">
      <form className="search__form-wrapper"  action="#" name="search-form">
        <div action="" className="search__form">
          <div className="search__input-container">
            <div className="search__input-wrapper">
              <input
                type="text"
                className="search__input"
                placeholder="Фильм"
              />
            </div>
          </div>
          <button className="search__btn" type="submit">
          </button>
        </div>
        <div className="search__filter-container">
          <FilterCheckbox isFilter={isFilter} onChange={handleFilterChange} />
          <p className="search__filter-title">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;