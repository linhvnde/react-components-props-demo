export default function MovieCard({movie,deleteAMovieHandler}) {
  return (
    <div key={movie._id} className="MovieCard">
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.IMDBRating}</p>
      <button onClick={() => deleteAMovieHandler(movie._id)} className="btn-delete">
        Delete{' '}
      </button>
    </div>
  );
}
