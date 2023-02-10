import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import '../index.css'


const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => {
        setContador(contador+1)
    }
    const restar = () => {
        setContador(contador-1)
    }

    return(
        <div className="w-25 d-flex justify-content-between">
            <ButtonGroup aria-label="Basic example">
                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    restar()
                    if(contador<=0) setContador(0)
                }}>-</Button>
                <div className="container-num">{contador}</div>

                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    sumar()
                }}>+</Button>
            </ButtonGroup>
            <Button variant="dark">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount

