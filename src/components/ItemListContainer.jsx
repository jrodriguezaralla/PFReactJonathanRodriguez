import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {
    
    const consultarProductos = async () => {
        const respuesta = await fetch ("src/components/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);
    
    return (
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer

