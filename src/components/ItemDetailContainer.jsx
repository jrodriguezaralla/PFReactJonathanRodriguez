import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const {id} = useParams()

    const consultarProductos = async () => {
        const respuesta = await fetch ("../datos.json")
        const resultado = await respuesta.json()

        return resultado
    }

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productos) => setProductos(productos.find ((prod) => prod.id == id)))
    }, []);

    return (
        <> 
            <div className='d-flex justify-content-center p-5'>
                    <ItemDetail
                    imagen={productos.imagen}
                    descripcion={productos.descripcion}
                    stock={productos.stock}
                    modelo={productos.modelo}
                    precio={productos.precio}/>
            </div>
        </>
    )
}

export default ItemDetailContainer
