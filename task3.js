
// 3️⃣ Movie Playlist Editor
// Concepts: slice(), splice()
// Task:3
// Create an array movies = ["Inception", "Avatar", "Titanic", "Joker", "Interstellar"].
// A user wants to watch only the first 3 movies. Create a new array.
// The movie "Joker" is removed due to an issue. Remove it.
// Add "The Matrix" at index 2.
// Print the final movie list.

var movies = ["Inception", "Avatar", "Titanic", "Joker", "Interstellar"];
var newMovies = ["inception","Avatar","Titanic"]
movies.splice(3, 1);
movies.splice(2, 0, "The matrix");
console.log(newMovies);
console.log(movies);