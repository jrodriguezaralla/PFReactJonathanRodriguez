import React, { useContext } from 'react';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';
import Cart from './Cart';
import CartEmpty from './CartEmpty';
import CartTotal from './CartTotal';

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
                            />
                            )) 
                    }
                </div>

                {cart.length != 0 && <CartTotal total={total}/>}
            </div>

        </div>
    )
}

export default CartContainer