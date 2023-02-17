import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({key, imagen, descripcion, stock, precio, modelo}) => {
    return (
    <div>
        <Card className='shadow '>
            <Card.Header className='text-center'>
                        <Card.Title className='text-center m-0'>{modelo}</Card.Title>
                    </Card.Header>
            <Card.Img variant="top" src={imagen} className="p-2" />
            <Card.Body className='d-flex flex-column'>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Card.Text>Precio: USD {precio}.-</Card.Text>
                <div className='d-flex justify-content-center'>
                    <Button variant="dark">Agregar</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
    )
}

export default ItemDetail