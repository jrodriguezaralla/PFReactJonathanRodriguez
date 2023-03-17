import React, { useContext } from 'react';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';
import Cart from './Cart';
import CartEmpty from './CartEmpty';
import CartTotal from './CartTotal';
import Formulario from './Formulario';

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    
    //calculo el total del carrito
    let auxiliar = cart.map((el) => el.precio*el.quantity) 
    let total = auxiliar.reduce((acumulador, elemento) => acumulador + elemento,0)

    return (
        <div className="d-flex justify-content-center">
            <div className="w-50">
                <div className="mb-3">
                    {cart.length === 0 //Si el carrito esta vacio muestro alert avisando que se deben agregar productos
                        ? <CartEmpty/>
                        : cart.map((prod)=> (// sino muestro los productos
                            <Cart
                                key = {prod.id} 
                                productoCarrito={prod}
                            />
                            )) 
                    }
                </div>
                    
                {cart.length != 0 && <CartTotal total={total}/>/* Si hay prodcutos en el carrito muestro el total*/ }
                {cart.length != 0 && <Formulario/>/* Si hay prodcutos en el carrito muestro el formulario*/}
            </div>

        </div>
    )
}

export default CartContainer