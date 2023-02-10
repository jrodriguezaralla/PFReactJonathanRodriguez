import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => {
        setContador(contador+1)
    }
    const restar = () => {
        setContador(contador-1)
    }

    return(
        <>
            <div>{contador}</div>
            <button onClick={()=>{
                    setContador(0)
                }}>reset</button>
            <button onClick={()=>{
                    restar()
                    if(contador<=0) setContador(0)
                }}>restar
            </button>
            <button onClick={()=>{
                    sumar()
                }}>sumar
            </button>
        </>
    )
}



export default ItemCount