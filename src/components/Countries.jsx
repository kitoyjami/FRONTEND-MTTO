import { Link } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Countries = () => {
  const { list, loading, error } = useGetData()
  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <section className='row py-5 gy-4'>

      {list.products.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`/country/${index._id}`}>
            <article className='card'>
              <img className='card-img-top' src={index.image} alt={index.name} />
              <div className='card-body'>
                <p className='card-title'>{index.name}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>

  )
}
export default Countries
