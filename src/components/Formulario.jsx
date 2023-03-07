import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';

const Formulario = () => {
    return (
        <div className='d-flex flex-row justify-content-center my-5 fade-in'>
            <div border="light" className="form--container w-50"> 
                <h1 className='fs-3 m-0 fw-bold text-dark text-center'>INGRESE SUS DATOS DE CONTACTO</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Nombre:</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese su nombre" className="mb-3" required/>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese su apellido" className="mb-3" required/>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" className="mb-3" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Dejenos un mensaje:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Finalizar compra
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Formulario