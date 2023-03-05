import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

const CartTotal = ({total}) => {
    const {cart} = useContext (CartContext)

    return (
        <>
            <Card className='my-1'>
                <Card.Body className="text-muted d-flex justify-content-around">
                    
                    <Button disabled={cart.length == 0} variant="dark">
                        <Link to={"/formulario"} className="text-decoration-none text-white">
                            Continuar con la compra
                        </Link>
                    </Button>
                    
                    <Card.Title className='fs-3 m-0 fw-bold text-dark'>Total: {total} USD</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartTotal