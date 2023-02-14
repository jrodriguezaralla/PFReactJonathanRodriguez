//renderiza diferentes todas las cards con los producto
import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <>
            <div>
                {/*productos.map((prod)=>{
                    <Item
                        key={prod.id}
                        id={prod.id}
                        marca={prod.marca}  
                        modelo={prod.modelo}
                        imagen={prod.imagen}
                        descripcion={prod.descripcion}
                        cantidad={prod.cantidad}
                        precio={prod.precio}
                    />
                })*/
                }
            </div>
        </>
    )
}

export default ItemList