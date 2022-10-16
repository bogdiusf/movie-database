import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createUseStyles } from 'react-jss'

import { MoviesStyles } from './Movies.style'

const useStyles = createUseStyles(MoviesStyles)

const Movies = ({ movies, removeMovie }) => {
  const classes = useStyles()

  return (
    <div className={classes.moviesWrapper}>
      <AnimatePresence mode="popLayout">
        {movies?.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              cursor: 'pointer',
              backgroundColor: '#288b22'
            }}
            onClick={() => removeMovie(item.id)}
            className={classes.movie}
            key={item.id}
          >
            <h2>{item.original_title}</h2>
            <p>{item.overview.substring(0, 120)}...</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Movies
