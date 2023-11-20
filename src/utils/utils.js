import { 
    SHORT_FILM_DURATION,
    LARGE_SCREEN_WIDTH,
    MEDIUM_SCREEN_WIDTH,
    SMALL_SCREEN_WIDTH,
    INITIAL_LARGE_SCREEN_CARDS,
    INITIAL_MEDIUM_SCREEN_CARDS,
    INITIAL_SMALL_SCREEN_CARDS,
    INCREASE_LARGE_SCREEN_CARDS,
    INCREASE_MEDIUM_SCREEN_CARDS,
    INCREASE_SMALL_SCREEN_CARDS
  } from "./constants";
  
  export function search(movies, keyWord) {
    const searchQuery = keyWord.toLowerCase().trim();
    const foundMovies = movies.filter((movie) => {
      const searchQueryRU = movie.nameRU.toLowerCase().trim().includes(searchQuery);
      const searchQueryEN = movie.nameEN.toLowerCase().trim().includes(searchQuery);
      return (searchQueryRU || searchQueryEN);
    })
    return foundMovies;
  }
  
  export function filter(movies, isFilterOn) {
    if (isFilterOn) {
      const filteredMovies = movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
      return filteredMovies;
    } else {
      return movies;
    }
  }
  
  export function renderMoreMovies() {
    let counter = { initial: INITIAL_LARGE_SCREEN_CARDS, increase: INCREASE_LARGE_SCREEN_CARDS };
    if (window.innerWidth <= LARGE_SCREEN_WIDTH) {
      counter = { 
        initial: INITIAL_LARGE_SCREEN_CARDS, 
        increase: INCREASE_LARGE_SCREEN_CARDS 
      };
    }
    if (window.innerWidth <= MEDIUM_SCREEN_WIDTH) {
      counter = { 
        initial: INITIAL_MEDIUM_SCREEN_CARDS, 
        increase: INCREASE_MEDIUM_SCREEN_CARDS 
      };
    }
    if (window.innerWidth <= SMALL_SCREEN_WIDTH) {
      counter = { 
        initial: INITIAL_SMALL_SCREEN_CARDS, 
        increase: INCREASE_SMALL_SCREEN_CARDS 
      };
    }
    return counter;
  }