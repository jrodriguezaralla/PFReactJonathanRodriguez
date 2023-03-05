import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/ShoppingCartContext';
import '../index.css';

const Cart = ({productoCarrito, total}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <>
            <div className='py-2'>
                <Card border="light" className='shadow '>
                    <Card.Header className='text-center'>
                        <div className='container'>
                            <div className='row'>
                                <Card.Title className='text-center m-0 col-11'>{productoCarrito.modelo} - {productoCarrito.marca}</Card.Title>

                                <Button variant="light col-1 d-flex justify-content-end" onClick={()=>{
                                        removeItem(productoCarrito.id)
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