import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({key, imagen, descripcion, stock, precio}) => {
    return (
    <div>
        <Card style={{ height: '29rem' }}>
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