//card de elemento
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, marca, modelo, imagen, stock}) => {
    return (
        <> 
            <div>
                <Card border="light" className='shadow '>
                    <Card.Header className='text-center'>
                        <Card.Title className='text-center m-0'>{modelo}</Card.Title>
                    </Card.Header>
                    <Card.Img variant="top" src={imagen} className="p-2" />
                    <Card.Body className='d-flex flex-column'>
                        <Card.Subtitle className="mb-1 text-muted text-center">{marca}</Card.Subtitle>
                        <Card.Text className="mb1-0 text-center"> Stock: {stock} unidades </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Link to={`/item/${id}`}>
                                <Button variant="dark">Detalles</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export default Item