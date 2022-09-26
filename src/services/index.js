import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1'
const baseUrl2 = 'https://backendmtto.herokuapp.com'

const getCountries = async () => {
  const req = await axios.get(`${baseUrl2}`)
  const res = req
  console.log(res)
  return res
}

const getCountry = async (name) => {
  const req = await axios.get(`${baseUrl}/name/${name}`)
  const res = req
  return res
}

const getData = async (name = '') => {
  const setName = name ? `/products/${name}` : '/products'

  const req = await axios.get(baseUrl2 + setName)
  const res = req.data
  console.log(res)
  return res
}

const registerMachine = async (userData) => {
  const response = await axios.post(`${baseUrl2}/products/`, userData)
  console.log('datos :', response.data)
  return response.data
}

export { getCountries, getCountry, getData, registerMachine }
