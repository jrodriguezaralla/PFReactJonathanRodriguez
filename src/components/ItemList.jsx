//renderiza diferentes todas las cards con los producto
import React from 'react'
import Item from './Item'
import '../index.css'

const ItemList = ({productos}) => {
    return (
        <>
            <div className='grid p-4'>
                {productos.map((prod)=> (
                    <Item
                        key={prod.id}
                        id={prod.id}
                        marca={prod.marca}  
                        modelo={prod.modelo}
                        imagen={prod.imagen}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemList