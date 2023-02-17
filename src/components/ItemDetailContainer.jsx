import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import productos from "./datos.json";

const ItemDetailContainer = () => {
    const {id} = useParams()
    /*
    const consultarProductos = async () => {
        const respuesta = await fetch ("src/components/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);*/

    const prodFilter = productos.filter ((prod) => prod.id == id)
    
    return (
        <> 
            <div className='w-25 h-25 p-4 d-flex justify-content-center'>
                    <ItemDetail
                    key={prodFilter.id}
                    imagen={prodFilter.imagen}
                    descripcion={prodFilter.descripcion}
                    stock={prodFilter.stock}
                    modelo={prodFilter.modelo}
                    precio={prodFilter.precio}/>
            </div>
        </>
    )
}

export default ItemDetailContainer