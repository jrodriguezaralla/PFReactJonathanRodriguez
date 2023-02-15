//card de elemento
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({marca, modelo, imagen}) => {
    return (
        <> 
            <div>
                <Card border="light" style={{ height: '25rem' }}>
                    <Card.Header className='text-center'>
                        <Card.Title className='text-center m-0'>{modelo}</Card.Title>
                    </Card.Header>
                    <Card.Img variant="top" src={imagen} className="p-2" />
                    <Card.Body className='d-flex flex-column'>
                        <Card.Subtitle className="mb-2 text-muted text-center">{marca}</Card.Subtitle>
                        <div className='d-flex justify-content-center'>
                            <Button variant="dark">Detalles</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export default Item