//card de elemento
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, marca, modelo, imagen, descripcion, cantidad, precio}) => {
    console.log(id)
    return (
        <>
            
            <div>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./{imagen}" />
                    <Card.Body>
                        <Card.Title>{marca} - {modelo}</Card.Title>
                        <Card.Text>{descripcion} </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item