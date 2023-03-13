import ItemList from "./ItemList"
import { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { CartContext } from "../context/ShoppingCartContext"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";


const ItemListContainer = () => {
    const {category} = useParams()
    const {productos, setProductos, setLoading, setCount, loading} = useContext(CartContext)
    

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const itemsCollection = collection(db, "baterias");
        getDocs(itemsCollection).then((snapshot) => {
            const productos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
                
            }));
            setProductos(productos);
            setCount(1);
        })
        setTimeout(()=>{
            setLoading(false)
        },100)
        
    }, [])
    
    const prodFilter = productos.filter ((prod) => prod.category === category)
    if(loading)
    {
        return <Loader/>
    }

    return (
        <div className="w-100 h-100">
            {category ? <ItemList productos={prodFilter}/> : <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer

