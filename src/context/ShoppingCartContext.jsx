import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartContext = ({children}) => {
    let quantity = 1

    const [cart, setCart] = useState([])
    const addItem = (newItem) => {
        setCart([...cart, newItem])
    }
    const removeItem = (itemId) => {
        const newCart = cart.filter((cart) => cart.id !== itemId)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        const resultado = cart.find((elemento)=> elemento.id === itemId)
        return resultado
    }

    return (
        <CartContext.Provider value = {{cart, setCart, addItem, removeItem, clearCart, isInCart, quantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartContext
