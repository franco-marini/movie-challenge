import { useCallback, useEffect, useState } from 'react'

import { IResponsePaginated } from '../types/api'
import { IMovie } from '../types/movie'

export function useFetchMovies(filter: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null)
  const [data, setData] = useState<IMovie[] | null>(null)

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${filter.replace(/\s/gi, '+')}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ',
          ['Content-Type']: 'application/json;charset=utf-8',
        },
      })

      const data = await response.json() as IResponsePaginated<IMovie[]>

      setData(data.results.sort((a, b) => b.popularity - a.popularity))

    } catch (error) {
      console.error(error)
      setError(error)
    }
    finally {
      setIsLoading(false)
    }
  }, [filter])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { data, error, isLoading }
}