import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';
export default function MoviesList() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const deleteAMovie = (movieId) => {
    const filteredMovies = moviesList.filter((movie) => {
      return movie._id !== movieId;
    });
    setMoviesList(filteredMovies);
  };
  const showList = () => {
    setMoviesList(moviesData);
  };
  return (
    <div>
      <h2>Movies List</h2>
      {moviesList.length === 0 ? (
        <button onClick={showList} className="btn-show">
          Show List{' '}
        </button>
      ) : (
        moviesList.map((movie) => {
          return <MovieCard movie={movie} deleteAMovieHandler={deleteAMovie} />;
        })
      )}
    </div>
  );
}
