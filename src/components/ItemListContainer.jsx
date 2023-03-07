import ItemList from "./ItemList"
import { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { CartContext } from "../context/ShoppingCartContext"
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
    const {category} = useParams()
    const {productos, setProductos} = useContext(CartContext)
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "baterias");
        getDocs(itemsCollection).then((snapshot) => {
            const productos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
                
            }));
            setProductos(productos);
        });
    }, []);
    
    const prodFilter = productos.filter ((prod) => prod.category === category)

    return (
        <>
            {category ? <ItemList productos={prodFilter}/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer

