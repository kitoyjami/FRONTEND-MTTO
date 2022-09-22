import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

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
    <>
      <div>
        <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet' />
        <div className='container'>
          {/* product */}
          <div className='product-content product-wrap clearfix product-deatil'>
            <div className='row'>
              <div className='col-md-5 col-sm-12 col-xs-12'>
                <div className='product-image'>
                  <div id='myCarousel-2 ' className='carousel slide'>
                    <img src={list.product.image} className='col-md-12 col-sm-12 col-xs-12' alt={list.product.name} />
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-md-offset-1 col-sm-12 col-xs-12'>
                <h2 className='name'>
                  {list.product.name}
                  <small>Código: <a>{list.product.equivalent_code}</a></small>
                  <span className='fa fa-2x'><h5>(109) Votes</h5></span>
                  <a href='javascript:void(0);'>109 customer reviews</a>
                </h2>
                <hr />
                <h3 className='price-container'>
                  Estado: {list.product.use_state}
                </h3>
                <div className='certified'>
                  <ul>
                    <li>
                      <a href='javascript:void(0);'>Delivery time<span>7 Working Days</span></a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Certified<span>Quality Assured</span></a>
                    </li>
                  </ul>
                </div>
                <hr />
                <Tabs
                  defaultActiveKey='Inspecciones'
                  id='uncontrolled-tab-example'
                  className='mb-3'
                >
                  <Tab eventKey='Inspecciones' title='Inspecciones'>
                    {
                      list.product.inspeccion.map((index, key) => (
                        <div key={key}>
                          <a>{index.detail}</a>
                          <p>{index.date}</p>
                        </div>
                      ))
                    }
                  </Tab>
                  <Tab eventKey='profile' title='Profile'>
                    <a>HOla 2</a>
                  </Tab>
                  <Tab eventKey='contact' title='Contact' disabled>
                    <a>HOla 3</a>
                  </Tab>
                </Tabs>

                <hr />
                <div className='row'>
                  <div className='col-sm-12 col-md-6 col-lg-6'>
                    <a href='javascript:void(0);' className='btn btn-success btn-lg'>Agregar Inspeccion </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* end product */}
        </div>
      </div>
    </>

  )
}

export default Country
