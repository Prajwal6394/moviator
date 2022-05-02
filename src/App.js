import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddStars from "./components/AddStars";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=4fb99b8e`;

    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovie(data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  const addFavouriteMovie = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourites) => favourites.imdbID !== movie.imdbID
    );

    setFavourites(newFavouritesList);
  };
  return (
    <div className="container-fluid moviator">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Movie" />
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className="row mt-0">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouritesComponents={AddStars}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Favourites" />
      </div>
      <div className="row mt-0">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouritesComponents={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
