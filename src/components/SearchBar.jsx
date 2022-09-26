import { Link } from 'react-router-dom'
// import useAppContext from '../hooks/useAppContext'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const SearchBar = () => {
  // const { query, setQuery } = useAppContext()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setQuery(searchRef.current.value)
  // }
  // console.log(query)
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>Navbar</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/countries'>Home</Link>
              </li>
            </ul>
            <>
              <Button variant='primary' onClick={handleShow}>
                Agregar Inspeccion
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Agregar Inspeccion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Nombre de la máquina</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' required />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicCODE'>
                    <Form.Label>Código equivalente</Form.Label>
                    <Form.Control type='text' placeholder='codigo' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicState'>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type='text' placeholder='Activa/Inactiva' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicInspeccion'>
                    <Form.Label>Insertar Inspeccion</Form.Label>
                    <Form.Control type='text' placeholder='Inspección' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPhoto'>
                    <Form.Label>Insertar Enlace de foto</Form.Label>
                    <Form.Control type='text' placeholder='Foto de maquina' />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleClose}>
                    Guardar Cambios
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </nav>

    </>
  )
}

export default SearchBar
