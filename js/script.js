const numberOfFilms = +prompt("How much films ?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2;){
  console.log("i before = " + i);
  const a = prompt("Which film?", ""),
        b = +prompt("Your grade?", "");

  if ((a==null) || (a.length == 0) || (a.length > 50)) {continue;}
  personalMovieDB.movies[a] = b;
  i++;
}



console.log(personalMovieDB); 

if (personalMovieDB.count < 10) {
  console.log("too few");
} else if (personalMovieDB.count < 30) {
  console.log("normal");
} else {
  console.log("too much");
}