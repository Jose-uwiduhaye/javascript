let movies = [];

while (true) {
  let title = prompt("Enter the name of the movie (press Cancel to finish):");

 
  if (title === null) {
    break;
  }

  let ratinga = prompt("Enter the rating of the movie from www.imdb.com:");

 
  if (rating === null) {
    break;
  }

  
  rating = parseFloat(rating);

 
  if (!isNaN(rating)) {
  
    movies.push({ title, rating });
  } else {
    alert("Invalid rating. Please enter a valid number.");
  }
}


console.log("Movies with a rating less than 7:");
for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating < 7) {
    console.log(`${movies[i].title} (${movies[i].rating})`);
  }
}


console.log("\nMovies with a rating greater than or equal to 7:");
for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating >= 7) {
    console.log(`${movies[i].title} (${movies[i].rating})`);
  }
}
