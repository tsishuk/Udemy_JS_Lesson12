const numberOfFilms = +prompt("How much films ?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Which film?", ""),
      b = prompt("How much?", ""),
      c = prompt("Which film?", ""),
      d = prompt("How much?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);