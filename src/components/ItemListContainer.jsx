import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const {category} = useParams()

    const consultarProductos = async () => {
        const respuesta = await fetch ("/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);
    
    const prodMarca = productos.filter ((prod) => prod.marca === category)

    return (
        <>
            {category ? <ItemList productos={prodMarca}/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer

