'use strict';



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	func1: function () {
		console.log("Hello from func1");
	},
	func2: function (username) {
		console.log(`Hello from func2, ${username}`);
	},
	start: () => {
		personalMovieDB.count = +prompt("Сколько фильмов посмотрели?", "");

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов посмотрели?", "");
		}
	},
	rememberMyFilms: () => {
		for (let i = 0; i < 1;) {
			const a = prompt("Which film?", ""),
				b = +prompt("Your grade?", "");

			if ((a == null) || (a.length == 0) || (a.length > 50)) { continue; }
			personalMovieDB.movies[a] = b;
		}
	},
	detectPersonalLevel: () => {
		if (personalMovieDB.count < 10) {
			console.log("too few");
		} else if (personalMovieDB.count < 30) {
			console.log("normal");
		} else {
			console.log("too much");
		}
	},
	showMyDB: (hidden) => {
		if (!hidden) {
			console.log(personalMovieDB);
		}
		else {
			console.log("У вас нет прав просмотра БД");
		}
	},
	writeYourGenres: () => {
		// for (let i = 1; i <= 3; i++){
		// 	let genre = prompt(`Ваш любимый жанр №${i}`);

		// 	while (genre == null || genre === ''){
		// 		genre = prompt(`Ваш любимый жанр №${i}`);
		// 	}
		// 	personalMovieDB.genres[i-1] = genre;
		// }

		// personalMovieDB.genres.forEach((item, i) => {
		// 	console.log(`Любимый жанр №${i + 1} - это ${item}`);
		// });
		let genres = prompt(`Ваши любимый жанры через запятую`);

		while (genres == null || genres === '' || genres.split(',').length != 3) {
			genres = prompt(`Ваши любимый жанры через запятую`);
		}

		personalMovieDB.genres = genres.split(',').sort();

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: () => {
		personalMovieDB.privat = !personalMovieDB.privat;
	}
};


personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);


