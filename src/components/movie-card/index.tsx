import styles from './movie-card.module.css'
import { IMovieCardProps } from './types'

function MovieCard({ movie }: IMovieCardProps) {
  return <div className={styles.container}>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    <div className={styles.movieInfo}>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  </div>
}

export default MovieCard