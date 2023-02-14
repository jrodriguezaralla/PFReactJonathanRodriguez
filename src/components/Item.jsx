//card de elemento
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, marca, modelo, imagen, descripcion, cantidad, precio}) => {
    return (
        <> 
            <div>
                <Card style={{ height: '18rem' }}>
                    <Card.Img variant="top" src={imagen}/>
                    <Card.Body className='d-flex flex-column justify-content-between'>
                        <Card.Title className='text-center'>{modelo}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">{marca}</Card.Subtitle>
                        <Card.Text className='text-center'>{descripcion} </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button variant="dark">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export default Item