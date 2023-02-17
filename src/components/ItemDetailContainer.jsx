import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const {id} = useParams()
    
    const consultarProductos = async () => {
        const respuesta = await fetch ("src/components/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos))
    }, []);

    const prodFilter = productos.filter ((prod) => prod.id == id)

    return (
        <> 
            <div className='w-25 h-25 p-4 d-flex justify-content-center'>
                {prodFilter.map((prod)=> (
                    <ItemDetail
                    key={prod.id}
                    imagen={prod.imagen}
                    descripcion={prod.descripcion}
                    stock={prod.stock}
                    modelo={prod.modelo}
                    precio={prod.precio}/>
                ))}
            </div>
        </>
    )
}

export default ItemDetailContainer