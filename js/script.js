'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How much films ?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much films ?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 1;) {
    console.log("i before = " + i);
    const a = prompt("Which film?", ""),
      b = +prompt("Your grade?", "");

    if ((a == null) || (a.length == 0) || (a.length > 50)) { continue; }
    personalMovieDB.movies[a] = b;
    i++;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("too few");
  } else if (personalMovieDB.count < 30) {
    console.log("normal");
  } else {
    console.log("too much");
  }
}

detectPersonalLevel();

function showMyDB(hidden){
  if (!hidden){12
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i-1] = prompt(`Your favourite genre number ${i}`);
  }
}

writeYourGenres();