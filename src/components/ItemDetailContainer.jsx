import React from 'react'
import { useState, useEffect } from "react"

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
        <div productos={productos}>ItemDetailContainer </div>
    )
}

export default ItemDetailContainer