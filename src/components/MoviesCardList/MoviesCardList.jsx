import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { NOT_FOUND_MOVIES } from "../../utils/constants";

function MoviesCardList({
  movies,
  isLoading,
  onChangeSave,
  savedMovies,
  onDelete,
}) {
  const { pathname } = useLocation();

  return (
    <section className="movies-card-list">
      {!localStorage.getItem("moviesSearchQuery") &&
        movies &&
        movies.length === 0 &&
        null}

      {isLoading && movies && movies.length === 0 && <Preloader />}

      {movies &&
        movies.length === 0 &&
        !isLoading &&
        localStorage.getItem("moviesSearchQuery") && (
          <p className="movies-card-list__not-found">{NOT_FOUND_MOVIES}</p>
        )}
      {pathname === "/movies" && movies && movies.length !== 0 && (
        <ul className="movies-card-list__container">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                onChangeSave={onChangeSave}
                onDelete={onDelete}
                savedMovies={savedMovies}
              />
            );
          })}
        </ul>
      )}
      {pathname === "/saved-movies" && movies && movies.length !== 0 && (
        <ul className="movies-card-list__container">
          {movies.map((movie) => {
            return (
              <MoviesCard key={movie._id} movie={movie} onDelete={onDelete} />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
/*
{pathname === "/movies" && movies.length !== 0 && (
{pathname === "/saved-movies" && movies.length !== 0 && (
*/
