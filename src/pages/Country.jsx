import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { name = '' } = useParams()
  console.log('nombre ', name)
  const { list, loading, error } = useGetData(name)

  if (error) return <p>{error}</p>
  if (loading) {
    return (
      <section className='container py-5'>
        <p>...Loading</p>
      </section>
    )
  }
  console.log('encontrado', list)
  return (
    <section className='container py-5'>
      <p>Country</p>
      <p>{list.product.name}</p>
      <p>{list.product.use_state}</p>
      <img width={400} height={300} src={list.product.image} alt={list.product.name} />
    </section>
  )
}

export default Country
