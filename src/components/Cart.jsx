import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)
    
    let auxiliar = cart.map((el) => el.precio*el.quantity) 
    let total = auxiliar.reduce((acumulador, elemento) => acumulador + elemento,0)

    return (
        <div className="d-flex justify-content-center">
            <div className="w-50">
                <div className="mb-5">
                    {cart.map((prod)=> (
                        <div className='py-2'>
                            <Card border="light" className='shadow '>
                                <Card.Header className='text-center'>
                                    <div className='container'>
                                        <div className='row'>
                                            <Card.Title className='text-center m-0 col-11'>{prod.modelo} - {prod.marca}</Card.Title>

                                            <Button variant="light col-1 d-flex justify-content-end" onClick={()=>{
                                                    removeItem(prod.id)
                                            }}>
                                                <span className='material-symbols-outlined text-danger'>
                                                    delete
                                                </span>
                                            </Button>
                                            
                                        </div> 
                                    </div>
                                </Card.Header>
                                <Card.Body className='d-flex flex-column p-1'>
                                    <div className='d-flex justify-content-around'>
                                        <Card.Text className="text-center"> cantidad: {prod.quantity} unid.</Card.Text>
                                        <Card.Text className="text-center"> precio unitario: {prod.precio} USD </Card.Text>
                                    </div>

                                    <Card.Footer className="text-muted d-flex justify-content-end">
                                        Subtotal: {prod.quantity*prod.precio} USD
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </div>      
                    ))}

                    <Card className='my-2'>
                        <Card.Body className="text-muted d-flex justify-content-around">
                            <Button disabled={cart.length == 0} variant="dark">Continuar con la compra</Button>
                            <Card.Title className='fs-3 m-0 fw-bold text-dark'>Total: {total} USD</Card.Title>
                        </Card.Body>
                    </Card>
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