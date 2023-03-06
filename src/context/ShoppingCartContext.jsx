import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState (1)
    const [productos, setProductos] = useState([])

    const addItem = (newItem, cantidad) => {
        let estaEnCarrito = isInCart(newItem.id)
        
        if(estaEnCarrito){
            const newQuantity = estaEnCarrito.quantity + cantidad
            const newCart = cart.map ((prod)=>{
                return {
                    ...prod,
                    quantity: newQuantity
                }
            })
            setCart(newCart)
            setQuantity(1)
            
        } else{       
            newItem.quantity = cantidad

            setCart([...cart, newItem])
            setQuantity(1)
        }    
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter((elemento) => elemento.id !== itemId)
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
        <CartContext.Provider value = {{cart, setCart, addItem, removeItem, clearCart, isInCart, quantity, setQuantity, productos, setProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartContext
