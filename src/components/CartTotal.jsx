import React from 'react'
import Card from 'react-bootstrap/Card';

const CartTotal = ({total}) => {

    return (
        <>
            <Card className='my-1 fade-in'>
                <Card.Body className="text-muted d-flex justify-content-around">                  
                    <Card.Title className='fs-3 m-0 fw-bold text-dark'>Total: {total} USD</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartTotal