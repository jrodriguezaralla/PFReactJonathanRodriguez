import ItemList from "./ItemList"
import { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { CartContext } from "../context/ShoppingCartContext"


const ItemListContainer = () => {
    const {category} = useParams()
    const {productos, setProductos} = useContext(CartContext)

    const consultarProductos = async () => {
        const respuesta = await fetch ("/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }
    
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);
    
    const prodFilter = productos.filter ((prod) => prod.category === category)

    return (
        <>
            {category ? <ItemList productos={prodFilter}/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer

