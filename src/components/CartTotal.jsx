import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/ShoppingCartContext';
import Formulario from './Formulario';


const CartTotal = ({total}) => {
    const {cart} = useContext (CartContext)

    return (
        <>
            <Card className='my-1'>
                <Card.Body className="text-muted d-flex justify-content-around">                  
                    <Card.Title className='fs-3 m-0 fw-bold text-dark'>Total: {total} USD</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartTotal