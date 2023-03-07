import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import '../index.css'

const ItemDetailContainer = () => {
    const {id} = useParams()

    const [productDetail, setProductDetail] = useState([])
    
    useEffect(() => {
        const db = getFirestore()

        const batRef= doc(db, "baterias", `${id}`)
        getDoc(batRef).then((snapshot) => {
            if(snapshot.exists()){
                setProductDetail({id: snapshot.id, ...snapshot.data()})
            }
        })
        
    }, []);

    return (
        <> 
            <div className='d-flex justify-content-center p-5 import fade-in'>
                    <ItemDetail producto={productDetail}/>
            </div>
        </>
    )
}

export default ItemDetailContainer
