import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovie] = useState([
    {
      Title: "Star Wars: Empire at War",
      Year: "2006",
      imdbID: "tt0804909",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGRiMDllMDUtOWFkZS00MGIyLWFkOTQtZjY2ZGUyNzY5YWRiXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars Empire at War: Forces of Corruption",
      Year: "2006",
      imdbID: "tt0879261",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGIxYTZiMmQtYjYzMS00ZmExLTljZDktMjE1ODY5OTJlYjlmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      Title: "Star Trek: Enterprise - In a Time of War",
      Year: "2014",
      imdbID: "tt3445408",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4NDA4MzUwM15BMl5BanBnXkFtZTgwMTg3NjY5MDE@._V1_SX300.jpg",
    },
    {
      Title: "Star Trek: Starfleet Command: Volume II: Empires at War",
      Year: "2000",
      imdbID: "tt0272306",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJiYjQxZDQtOWM5NS00ZDZhLWJkYTUtNjQ3ZjdiMzM1MDYyXkEyXkFqcGdeQXVyMzMxNDQ0NQ@@._V1_SX300.jpg",
    },
    {
      Title:
        "Star Trek: The Next Generation - Survive and Suceed: An Empire at War",
      Year: "2013",
      imdbID: "tt3060318",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM5ODY0MDQ2NF5BMl5BanBnXkFtZTgwMjQ5NDgwMDE@._V1_SX300.jpg",
    },
    {
      Title: "Shuten Doji: The Star Hand Kid Volume 3 - Time War",
      Year: "1989",
      imdbID: "tt0410598",
      Type: "movie",
      Poster: "N/A",
    },
  ]);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
