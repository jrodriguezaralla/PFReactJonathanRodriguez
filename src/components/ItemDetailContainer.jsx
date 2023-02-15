import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
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
            <div className='grid p-4'>
                {productos.map((prod)=> (
                    <ItemDetail
                    key={prod.id}
                    imagen={prod.imagen}
                    descripcion={prod.descripcion}
                    stock={prod.stock}
                    precio={prod.precio}/>
                ))}
            </div>
        </>
    )
}

export default ItemDetailContainer