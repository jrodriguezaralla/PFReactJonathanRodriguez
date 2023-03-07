import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartContext = ({children}) => {
    //let carrito = JSON.parse(localStorage.getItem('carrito')) || [] // si tengo guardado un carrito en Local Storage lo asigno a carrito, sino le asigno un array vacio
    const [cart, setCart] = useState([])
    //setCart(JSON.parse(localStorage.getItem('cart')) || [])
    const [loading, setLoading] = useState(true)
    
    const [count, setCount] = useState (1)
    const [productos, setProductos] = useState([])

    const addItem = (newItem, cantidad) => {
        let estaEnCarrito = isInCart(newItem.id)
        
        if(estaEnCarrito){
            const newCart = cart.map ((prod)=>{
                if(prod.id == estaEnCarrito.id){
                    return {...prod, quantity: estaEnCarrito.quantity + cantidad}
                } else {
                    return prod
                }
            })
            setCart(newCart)
            setCount(1)
            
        } else{       
            newItem.quantity = cantidad

            setCart([...cart, newItem])
            setCount(1)
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
        <CartContext.Provider value = {{cart, setCart, addItem, removeItem, clearCart, isInCart, count, setCount, productos, setProductos, loading, setLoading}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartContext
