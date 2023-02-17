import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import '../index.css'


const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(0)
    function sumar() {
        setContador(contador + 1);
    }
    const restar = () => {
        setContador(contador-1)
    }

    return(
        <div className="d-flex justify-content-between">
            <ButtonGroup aria-label="Basic example">
                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    restar()
                    if(contador <= 0) setContador(0)
                }}>-</Button>
                <div className="container-num">{contador}</div>

                <Button variant="dark" className="button__width text-center" onClick={()=>{
                    if(contador < stock && stock != 0) sumar()
                }}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount

