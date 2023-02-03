import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return(
        <div className="position-relative">
            <span className="material-symbols-outlined Cart--Size">
                shopping_cart
            </span>
            <Badge pill bg="danger" className="position-absolute top-50 start-50 ms-3 translate-middle">
                0
            </Badge>
        </div>

    )
}

export default CartWidget

