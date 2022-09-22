import { useEffect, useState } from 'react'
import { getData } from '../services'

const useGetData = (name = '') => {
  const [list, setList] = useState(name ? {} : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData(name)
        setList(name ? countries : countries)
        setLoading(false)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])
  console.log('otros :', list)
  return { list, loading, error }
}
export default useGetData
