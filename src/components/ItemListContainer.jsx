import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import datos from "./datos.json"
//src/components/datos.json

const ItemListContainer = () => {
    
    const consultarProductos = async () => {
        const respuesta = await fetch (datos)
        const resultado = await respuesta.json()

        return resultado
    }
    //console.log(datos)
    const [productos, setProductos] = useState([])
    console.log(productos)
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);
    
    return (
        <>
            <ItemCount/>
            <ItemList/>
        </>
    )
}

export default ItemListContainer

