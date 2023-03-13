import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { collection, getFirestore, addDoc} from 'firebase/firestore';
import { CartContext } from '../context/ShoppingCartContext';

const Formulario = () => {
    const {cart} = useContext (CartContext)
    const [orderId, setOrderId] = useState (null)
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")

    const order = {
        name,
        email,
        cart
    }
    console.log(name)
    const db = getFirestore()
    const ordersCollection = collection(db,"orden")

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        <Form.Control type="Text" placeholder="Ingrese su apellido" className="mb-3" required/>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" className="mb-3" required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Dejenos un mensaje:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Finalizar compra
                    </Button>
                </Form>
                <h2>Nro de orden: {orderId}</h2>
            </div>
        </div>
    )
}

export default Formulario