const fetchPopularMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=e874b8ca86e2f3cdf311e49961fcad53'
  )
  const data = await response.json()
  return data.results
}

export { fetchPopularMovies }
