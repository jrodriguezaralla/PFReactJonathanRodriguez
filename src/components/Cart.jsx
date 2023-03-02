import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {
    const {cart, setCart} = useContext(CartContext)
    console.log(cart)
    return (
        <div className="d-flex justify-content-center">
            <div className="w-50">
                <div className="mb-5">
                    Listado de productos
                </div>

                <div border="light" className="form--container">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Nombre:</Form.Label>
                            <Form.Control type="Text" placeholder="Ingrese su nombre" className="mb-3"/>
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control type="Text" placeholder="Ingrese su apellido" className="mb-3" />
                            <Form.Label>Direccion de envio:</Form.Label>
                            <Form.Control type="Text" placeholder="dirección" className="mb-3" />
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" className="mb-3"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dejenos un mensaje:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Cart