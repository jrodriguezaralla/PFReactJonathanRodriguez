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
    
    const prodFilter = productos.filter ((prod) => prod.category === category)

    return (
        <>
            {category ? <ItemList productos={prodFilter}/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer

