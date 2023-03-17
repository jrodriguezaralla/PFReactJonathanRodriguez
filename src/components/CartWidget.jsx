import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {
    const {cart} = useContext (CartContext)
    return(
        <div className="position-relative">
            <span className="material-symbols-outlined Cart--Size">
                shopping_cart
            </span>
            <Badge pill bg="danger" className="position-absolute top-50 start-50 ms-3 translate-middle">
                {`${cart.length}`}
            </Badge>
        </div>
    )
}

export default CartWidget

