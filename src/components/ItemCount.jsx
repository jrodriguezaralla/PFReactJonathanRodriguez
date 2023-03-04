import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { CartContext } from "../context/ShoppingCartContext";
import '../index.css'


const ItemCount = ({stock}) => {
    const {quantity, setQuantity} = useContext (CartContext)

    function sumar() {
        setQuantity(quantity + 1);
    }
    const restar = () => {
        setQuantity(quantity-1)
    }

    return(
        <div className="d-flex justify-content-between">
            <ButtonGroup aria-label="Basic example">
                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    restar()
                    if(quantity <= 0) setContador(1)
                }}>-</Button>
                <div className="container-num">{quantity}</div>

                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    if(quantity < stock && stock != 0) sumar()
                }}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount

