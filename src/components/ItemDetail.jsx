import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/ShoppingCartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({producto}) => {
    const {addItem, quantity} = useContext (CartContext)

    return (
    <div className='w-25 h-25'>
        <Card className='shadow'>
            <Card.Header className='text-center'>
                        <Card.Title className='text-center m-0'>{producto.modelo}</Card.Title>
                    </Card.Header>
            <Card.Img variant="top" src={producto.imagen} className="p-2" />
            <Card.Body className='d-flex flex-column'>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text>Stock: {producto.stock} unidades</Card.Text>
                <Card.Text className='fw-bold'>Precio: USD {producto.precio}.-</Card.Text>
                <div className='mb-2 d-flex justify-content-center'>
                    <ItemCount stock={producto.stock}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant="dark" disabled={producto.stock < 1 } onClick={() => addItem(producto, quantity)}>Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
    )
}

export default ItemDetail