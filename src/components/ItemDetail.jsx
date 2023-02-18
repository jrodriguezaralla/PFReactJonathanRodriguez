import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({imagen, descripcion, stock, precio, modelo}) => {

    return (
    <div className='w-25 h-25'>
        <Card className='shadow'>
            <Card.Header className='text-center'>
                        <Card.Title className='text-center m-0'>{modelo}</Card.Title>
                    </Card.Header>
            <Card.Img variant="top" src={imagen} className="p-2" />
            <Card.Body className='d-flex flex-column'>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Card.Text className='fw-bold'>Precio: USD {precio}.-</Card.Text>
                <div className='mb-2 d-flex justify-content-center'>
                    <ItemCount stock={stock}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant="dark" disabled={ stock < 1 }>Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
    )
}

export default ItemDetail