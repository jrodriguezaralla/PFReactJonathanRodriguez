import React, { useContext } from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, updateDoc} from "firebase/firestore";
import '../index.css'
import { CartContext } from '../context/ShoppingCartContext';
import Loader from './Loader';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const {setCount, count, setLoading, loading} = useContext (CartContext)

    const [productDetail, setProductDetail] = useState([])
    
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const batRef= doc(db, "baterias", `${id}`)

        getDoc(batRef).then((snapshot) => {
            if(snapshot.exists()){
                setProductDetail({...snapshot.data(), id: snapshot.id})
            }
            setCount(1)
        })
        setTimeout(()=>{
            setLoading(false)
        },200)


    }, []);

    if(loading)
    {
        return <Loader/>
    }

    return (
        <> 
            <div className='d-flex justify-content-center p-5 import fade-in'>
                    <ItemDetail producto={productDetail}/>
            </div>
        </>
    )
}

export default ItemDetailContainer
