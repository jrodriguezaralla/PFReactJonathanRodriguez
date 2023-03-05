import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import CartEmpty from './CartEmpty';

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    
    let auxiliar = cart.map((el) => el.precio*el.quantity) 
    let total = auxiliar.reduce((acumulador, elemento) => acumulador + elemento,0)

    return (
        <div className="d-flex justify-content-center">
            <div className="w-50">
                <div className="mb-5">
                    {cart.length === 0 
                        ? <CartEmpty/>
                        : cart.map((prod)=> (
                            <Cart
                                key = {prod.id} 
                                productoCarrito={prod}
                                total = {total}
                            />
                            ))
                    }
                </div>
                
                <Card className='my-2'>
                        <Card.Body className="text-muted d-flex justify-content-around">
                            
                            <Button disabled={cart.length == 0} variant="dark">
                                <Link to={"/formulario"} className="text-decoration-none text-white">
                                    Continuar con la compra
                                </Link>
                            </Button>
                            
                            <Card.Title className='fs-3 m-0 fw-bold text-dark'>Total: {total} USD</Card.Title>
                        </Card.Body>
                </Card>
                
            </div>

        </div>
    )
}

export default CartContainer