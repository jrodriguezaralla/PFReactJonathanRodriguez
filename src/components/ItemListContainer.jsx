import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import datos from "./datos.json"

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
            <ItemCount/>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer

