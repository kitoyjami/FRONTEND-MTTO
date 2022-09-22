import { useContext } from 'react'
import { AppContext } from '../context'

const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) throw new Error('No context found')
  return context
}

export default useAppContext
