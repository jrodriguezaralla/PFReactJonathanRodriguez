import ItemList from './ItemList';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';

const ItemListContainer = () => {
	const { category } = useParams();
	const { productos, setProductos, setCount, setLoading, loading } = useContext(CartContext);

	useEffect(() => {
		setLoading(true);
		const db = getFirestore();
		const itemsCollection = collection(db, 'baterias');
		//traigo los productos desde Firebase
		getDocs(itemsCollection).then((snapshot) => {
			const productos = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProductos(productos);
			setCount(1);
			setLoading(false);
		});
	}, []);

	//filtro por categoria
	const prodFilter = productos.filter((prod) => prod.category === category);

	//Componente que se habilita cuando se esta cargando los datos
	if (loading) {
		return <Loader />;
	}

	return <div className="w-100 h-100">{category ? <ItemList productos={prodFilter} /> : <ItemList productos={productos} />}</div>;
};

export default ItemListContainer;
