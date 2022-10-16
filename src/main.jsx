import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MovieProvider from './context/MovieProvider'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MovieProvider>
      <App />
    </MovieProvider>
  </QueryClientProvider>
)
