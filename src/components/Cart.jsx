import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/ShoppingCartContext';
import '../index.css';

const Cart = ({productoCarrito}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <>
            <div className='py-2'>
                <Card border="light" className='shadow fade-in'>
                    <Card.Header className='text-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-11'>
                                    <Card.Title className='text-center m-0'>{productoCarrito.modelo} - {productoCarrito.marca}</Card.Title>
                                </div>

                                <div className='col-1 d-flex justify-content-end' >
                                    <Button variant="light" className='d-flex justify-content-center' style={{ width: '2rem' }} onClick={()=>{
                                            removeItem(productoCarrito.id)
                                    }}>
                                        <span className='material-symbols-outlined text-danger'>
                                            delete
                                        </span>
                                    </Button>
                                </div>
                                
                            </div> 
                        </div>
                    </Card.Header>
                    <Card.Body className='d-flex flex-column p-1'>
                        <div className='d-flex justify-content-around'>
                            <Card.Text className="text-center"> cantidad: {productoCarrito.quantity} unid.</Card.Text>
                            <Card.Text className="text-center"> precio unitario: {productoCarrito.precio} USD </Card.Text>
                        </div>

                        <Card.Footer className="text-muted d-flex justify-content-end">
                            Subtotal: {productoCarrito.quantity*productoCarrito.precio} USD
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>      
        </>
    )
}

export default Cart