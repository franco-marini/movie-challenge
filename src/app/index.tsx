import './app.css'

import { useCallback, useState } from 'react'

import MovieCard from '../components/movie-card'
import SearchBar from '../components/search-bar'
import { useFetchMovies } from '../hooks/useFetchMovie'

function App() {
  const [filter, setFilter] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useFetchMovies(filter)

  const handleOnSubmit = useCallback((text: string) => {
    setFilter(text)
  }, [])

  return (
    <>
      <SearchBar onSubmit={handleOnSubmit} />
      {isLoading && <div>Getting the movies</div>}
      {error !== null && <div>There was an error trying to get the movies</div>}
      {data && data.length > 0 && (
        data.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })
      )}
    </>
  )
}

export default App
