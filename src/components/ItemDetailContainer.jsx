import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const {id} = useParams()

    const consultarProductos = async () => {
        const respuesta = await fetch ("/datos.json")
        const resultado = await respuesta.json()

        return resultado
    }

    const [productDetail, setProductDetail] = useState([])
    
    useEffect(() => {
        consultarProductos().then((productDetail) => setProductDetail(productDetail.find ((prod) => prod.id == id)))
    }, []);

    return (
        <> 
            <div className='d-flex justify-content-center p-5'>
                    <ItemDetail producto={productDetail}/>
            </div>
        </>
    )
}

export default ItemDetailContainer
