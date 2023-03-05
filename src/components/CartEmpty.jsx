import React from 'react'
import Card from 'react-bootstrap/Card';

const CartEmpty = () => {
    return (
        <div className='text-center fw-bold my-4 fs-2'>
            <Card>
                <Card.Header>¡AGREGUE PRODUCTOS AL CARRITO!</Card.Header>
            </Card>
        </div>
    )
}

export default CartEmpty