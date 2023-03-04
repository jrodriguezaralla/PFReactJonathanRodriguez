import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState (1)
    const [productos, setProductos] = useState([])

    const addItem = (newItem, cantidad) => {
        newItem.quantity = cantidad
        let newQuantity = newItem.stock-cantidad
        console.log("a")
        const updateProd = productos.map((prod) => {
            
            if(prod.id === newItem.id){
                
                return {
                    ...prod, quantity: newQuantity
                }
            }
                
            
            return prod

        })
        

        setProductos(updateProd)
        setCart([...cart, newItem])
        setQuantity(1)
        
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
        <CartContext.Provider value = {{cart, setCart, addItem, removeItem, clearCart, isInCart, quantity, setQuantity, productos, setProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartContext
