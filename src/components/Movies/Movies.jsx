import "./Movies.css";
import { useEffect, useState, useCallback } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { search, filter, renderMoreMovies } from "../../utils/utils";
import * as moviesApi from "../../utils/MoviesApi";
import {
  LARGE_SCREEN_WIDTH,
  MEDIUM_SCREEN_WIDTH,
  SMALL_SCREEN_WIDTH,
  // SEARCH_FILTER_ERROR,
} from "./../../utils/constants";

function Movies({ onChangeSave, onDelete, savedMovies }) {
  const [foundCards, setFoundCards] = useState([]);
  const [isFilterOn, setFilter] = useState(false);
  const [moviesRender, setRenderMovies] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [count, setCount] = useState(renderMoreMovies().initial);
  const [firstEntrance, setFirstEntrance] = useState(true);
  const visibleMovies = moviesRender.slice(0, count);
  /*
  function renderMoreMovies() {
    let counter = { initial: 12, increase: 4 };
    if (window.innerWidth <= 768) {
      counter = { initial: 8, increase: 4 };
    }
    if (window.innerWidth <= 450) {
      counter = { initial: 5, increase: 2 };
    }
    return counter;
  }
*/

  const searchAndFilterMovies = useCallback(
    (dataMovies, keyWord, isFilterOn) => {
      const found = search(dataMovies, keyWord);
      setFoundCards(found);
      const filteredMovies = filter(found, isFilterOn);
      setRenderMovies(filteredMovies);
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
      localStorage.setItem("moviesSearchQuery", JSON.stringify(keyWord));
      localStorage.setItem("filterState", JSON.stringify(isFilterOn));
    },
    []
  );

  const handleSubmitSearchRequest = useCallback(
    (searchQuery) => {
      setFirstEntrance(false);
      const storedAllMovies = localStorage.getItem("allMovies");
      if (!storedAllMovies) {
        setLoading(true);
        moviesApi
          .getMovies()
          .then((dataMovies) => {
            localStorage.setItem("allMovies", JSON.stringify(dataMovies));
            searchAndFilterMovies(dataMovies, searchQuery, isFilterOn);
          })
          .catch((err) => {
            setServerError(true);
            console.error(`Произошла ошибка: ${err}`);
          })
          .finally(() => setLoading(false));
      } else {
        searchAndFilterMovies(
          JSON.parse(storedAllMovies),
          searchQuery,
          isFilterOn
        );
      }
    },
    [searchAndFilterMovies, isFilterOn]
  );

  const handleOnFilterClick = useCallback(() => {
    if (!firstEntrance) {
      setFilter(isFilterOn);
      const searchQuery = JSON.parse(localStorage.getItem("moviesSearchQuery"));
      const allMovies = JSON.parse(localStorage.getItem("allMovies"));
      const found = search(allMovies, searchQuery);
      setFoundCards(found);
      if (localStorage.getItem("moviesSearchQuery")) {
        if (isFilterOn) {
          const filtered = filter(foundCards, isFilterOn);
          setRenderMovies(filtered);
          localStorage.setItem("foundMovies", JSON.stringify(filtered));
          localStorage.setItem("filterState", JSON.stringify(isFilterOn));
        } else {
          setRenderMovies(found);
          localStorage.setItem("foundMovies", JSON.stringify(found));
          localStorage.setItem("filterState", JSON.stringify(isFilterOn));
        }
      }
    } else {
      setFilter(isFilterOn);
    }
  }, [foundCards, firstEntrance]);


  function openMoreMovies() {
    setCount(count + renderMoreMovies().increase);
  }

  useEffect(() => {
    setCount(renderMoreMovies().initial);
    function reRenderMovies() {
      if (window.innerWidth > LARGE_SCREEN_WIDTH) {
        setCount(renderMoreMovies().initial);
      }
      if (window.innerWidth <= LARGE_SCREEN_WIDTH) {
        setCount(renderMoreMovies().initial);
      }
      if (window.innerWidth <= MEDIUM_SCREEN_WIDTH) {
        setCount(renderMoreMovies().initial);
      }
      if (window.innerWidth <= SMALL_SCREEN_WIDTH) {
        setCount(renderMoreMovies().initial);
      }
    }
    window.addEventListener("resize", reRenderMovies);
    return () => window.removeEventListener("resize", reRenderMovies);
  }, [moviesRender]);

  useEffect(() => {
    if (
      localStorage.getItem("foundMovies") &&
      localStorage.getItem("moviesSearchQuery") &&
      localStorage.getItem("filterState")
    ) {
      const moviesFromLStorage = JSON.parse(
        localStorage.getItem("foundMovies")
      );
      const queryFromLStorage = JSON.parse(
        localStorage.getItem("moviesSearchQuery")
      );
      const filterStateFromLStorage = JSON.parse(
        localStorage.getItem("filterState")
      );
      setInputSearchValue(queryFromLStorage);
      setRenderMovies(moviesFromLStorage);
      setFilter(filterStateFromLStorage);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("allMovies")) {
      setFirstEntrance(true);
    } else {
      setFirstEntrance(false);
    }
  }, [])

  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSubmitSearchRequest}
        inputValue={inputSearchValue}
        isFilterOn={isFilterOn}
        onFilterChange={handleOnFilterClick}
        isLoading={isLoading}
        serverError={serverError}
      />
      <MoviesCardList
        movies={visibleMovies}
        isLoading={isLoading}
        onChangeSave={onChangeSave}
        onDelete={onDelete}
        savedMovies={savedMovies}
      />
      <div className="movies__btn-more-container">
        <button
          type="button"
          className={`movies__btn-more ${
            count >= moviesRender.length && "movies__btn-more_hidden"
          }`}
          onClick={openMoreMovies}
        >
          Ещё
        </button>
      </div>
    </main>
  );
}

export default Movies;
