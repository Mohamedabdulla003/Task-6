/////////////Task-Question 1////////////

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter((movie) => movie.rating === "PG");
    }
  }

let movieC = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(movieC);

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Inception", "Warner Bros.", "R");
let movie3 = new Movie("The Dark Knight", "warner bros", "U/A");
let movie4 = new Movie("Inception", "lyca", "PG-13");
let movie5 = new Movie("Batman Begins", "green pictures", "PG");
let movie6 = new Movie("Iron Man", "Xmas", "PG");
let movie7 = new Movie("The Avengers", "MAK studio", "PG-13");

let MovieArray = [movie1,movie2,movie3,movie4,movie5,movie6,movie7]

let getrating = Movie.getPG(MovieArray);
console.log(getrating);
