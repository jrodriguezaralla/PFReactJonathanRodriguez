import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/ShoppingCartContext';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { doc, getDoc, getFirestore, updateDoc} from "firebase/firestore";

import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {
    const {addItem, count, updateProduct} = useContext (CartContext)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" hidden={producto.stock > 1 }>Lo sentimos, no disponemos de stock por el momento</Tooltip>}>
                    <span className="d-inline-block">
                        <Button variant="dark" disabled={producto.stock < 1 } onClick={() => {
                            addItem(producto, count)
                            handleShow()
                            updateProduct (producto.id, producto.stock - count)
                        }}>
                            Agregar al carrito
                        </Button>
                    </span>
                    </OverlayTrigger>

                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header>
                            <Modal.Title>¡Producto Agregado al carrito!</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                        <Link to={"/cart"} >
                            <Button variant="dark" onClick={handleClose}>
                                Ir al carrito
                            </Button>
                        </Link>
                        <Link to={"/"} >
                            <Button variant="dark" onClick={handleClose}>
                                Agregar nuevo producto
                            </Button>
                        </Link>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Card.Body>
        </Card>
    </div>
    )
}

export default ItemDetail