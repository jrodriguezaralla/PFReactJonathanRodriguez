import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../index.css';
import { collection, getFirestore, addDoc} from 'firebase/firestore';
import { CartContext } from '../context/ShoppingCartContext';


const Formulario = () => {
    const {cart, clearCart} = useContext (CartContext)

    const [orderId, setOrderId] = useState (null)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [show, setShow] = useState(false);

    const order = {
        name,
        lastName,
        email,
        adress,
        cart
    }

    const db = getFirestore()
    const ordersCollection = collection(db,"orden")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()

        handleShow()

        addDoc(ordersCollection, order).then(({id})=> setOrderId(id))
    }

    return (
        <div className='d-flex flex-row justify-content-center my-4 fade-in '>
            <div border="light" className="form--container w-100"> 
                <h1 className='fs-3 m-0 fw-bold text-dark text-center'>INGRESE SUS DATOS DE CONTACTO</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Nombre:</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese su nombre" className="mb-3" required onChange={(e) => setName(e.target.value)}/>
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese su apellido" className="mb-3" required onChange={(e) => setLastName(e.target.value)}/>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" className="mb-3" required onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Label>Direccion:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su direccion" className="mb-3" required onChange={(e) => setAdress(e.target.value)}/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Finalizar compra
                    </Button>
                </Form>
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                >
                    <Modal.Header>
                        <Modal.Title>¡GRACIAS POR SU COMPRA!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className=''>
                        ID de seguimiento: <b>{orderId}</b>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/">
                            <Button variant="dark" onClick={()=>clearCart()}>Finalizar</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Formulario