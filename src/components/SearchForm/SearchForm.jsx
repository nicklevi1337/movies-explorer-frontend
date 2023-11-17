import { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { SEARCH_SERVER_ERROR, SEARCH_QUERY_ERROR } from "../../utils/constants";

function SearchForm({
  onSearch, 
  inputValue, 
  isFilterOn, 
  onFilterChange, 
  isLoading, 
  serverError,
}) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    setSearchInputValue(inputValue || "");;
    setSearchError("");
  }, [inputValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInputValue.length !== 0) {
      onSearch(searchInputValue);
      setSearchError("");
    } else {
      setSearchError(SEARCH_QUERY_ERROR);
    }
  }

  return (
    <section className="search">
      <form
        className="search__form-wrapper"
        action="#"
        name="search-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__form">
          <div className="search__input-container">
            <div className="search__input-wrapper">
              <input
                type="text"
                className="search__input"
                placeholder="Фильм"
                required
                value={searchInputValue || ""}
                onChange={(e) => setSearchInputValue(e.target.value)}
                disabled={isLoading ? true : false}
              />
            </div>
          </div>
          <button
            className={`search__btn${isLoading ? "search__btn_disable" : ""}`}
            type="submit"
            disabled={isLoading ? true : false}>
          </button>
        </div>
        <div className="search__filter-container">
          <FilterCheckbox sFilterOn={isFilterOn} onFilterChange={onFilterChange} />
          <p className="search__filter-title">Короткометражки</p>
        </div>
      </form>
      {serverError 
        ? 
        <span className="search__error search__error_active"> {SEARCH_SERVER_ERROR} </span> 
        :
        <span className="search__error search__error_active">{searchError}</span>
      }
    </section>
  );
}

export default SearchForm;
