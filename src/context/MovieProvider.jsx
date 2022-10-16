import React, { useEffect, useState } from 'react'
import { MovieContext } from './MovieContext'

import { fetchPopularMovies } from '../utils/fetchMovies'

import { useQuery } from '@tanstack/react-query'

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const { data: fetchedData, isLoading } = useQuery(
    ['popularMovies'],
    fetchPopularMovies
  )

  useEffect(() => {
    if (fetchedData) setMovies(fetchedData)
  }, [fetchedData])

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, isLoading, fetchedData }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
