import { useState, useEffect, useContext } from 'react'
import { MovieContext } from './context/MovieContext'

import Loader from './components/loader/Loader'
import Movies from './components/movies/Movies'

function App() {
  const { movies, setMovies, isLoading, fetchedData } = useContext(MovieContext)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    isClicked &&
      setMovies(
        movies
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      )

    return () => setIsClicked(false)
  }, [isClicked])

  const removeMovie = (id) => {
    setMovies(() => movies.filter((item) => item.id !== id))
  }

  if (isLoading) return <Loader />
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 50
      }}
    >
      <div style={{ width: '100%' }}>
        <button onClick={() => setIsClicked(true)}>Shuffle movies</button>
        <button onClick={() => setMovies(fetchedData)}>Refetch movies</button>
      </div>

      <Movies movies={movies} removeMovie={removeMovie} />
    </div>
  )
}

export default App
