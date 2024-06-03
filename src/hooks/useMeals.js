import { useEffect, useState } from 'react'
import { getMealsData } from '../fetch/mealsData'

export function useMeals ({ meals }) {
  const [mealsRendered, setMealsRendered] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let isMounted = true
    setError(null)
    Promise.all(meals?.map(getMealsData))
      .then(dataArray => {
        if (isMounted) {
          setMealsRendered(dataArray)
          setLoading(false)
        }
      })
      .catch(error => {
        console.error(error)
        if (isMounted) {
          setLoading(false)
          setError('Failed to load 7-days diet plan, try again...')
        }
      })

    return () => {
      isMounted = false
    }
  }, [meals])

  return { mealsRendered, loading, error }
}
