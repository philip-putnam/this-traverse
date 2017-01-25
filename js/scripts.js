function Movie(movieName, rating, showtimes, release) {
  this.movieName = movieName;
  this.rating = rating;
  this.showtimes = showtimes;
  this.release = release;
}

var split = new Movie("Split", "PG-13", [1845, 2145], 2017);
var liveByNight = new Movie("Live by Night", "R", [1100, 2230], 2017);
var patriotsDay = new Movie("Patriot's Day", "PG-13", [1230, 1600, 1915, 2220], 2017);
var hiddenFigures = new Movie("Hidden Figures", "PG-13", [1000, 1145, 1500, 1815, 2130], 2017);
var rogueOne = new Movie("Rogue One: A Star Wars Story", "PG-13", [1200, 1515, 1830], 2017);

var moviesDatabase = [split, liveByNight, patriotsDay, hiddenFigures, rogueOne];

// var militaryToTwelveHour = function(movieTimesArray) {
//   var newTimes = [];
//   for (var index = 0; index < movieTimesArray.length; index += 1) {
//     var tempString = movieTimesArray[index].toString();
//     if (movieTimesArray[index] < 1200 ) {
//       tempString = tempString + " a.m."
//     }
//
//
//   }
//
// };


// Back-end logic

$(document).ready(function() {

  moviesDatabase.forEach(function(movie) {
    var newMovie = new Movie(movie.movieName, movie.rating, movie.showtimes, movie.release);
    $(".container ul").append("<li><span class='movies'>" + movie.movieName + "</span></li>");

    $(".movies").last().click(function() {
      $("#movie-times h2").text(newMovie.movieName);
      $(".movie-times").text(movie.showtimes);
    });

  });



});
