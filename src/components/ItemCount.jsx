import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CartContext } from '../context/ShoppingCartContext';
import '../index.css';

const ItemCount = ({ stock }) => {
	const { count, setCount } = useContext(CartContext);

	function sumar() {
		setCount(count + 1);
	}
	const restar = () => {
		setCount(count - 1);
	};

	return (
		<div className="d-flex justify-content-between">
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="dark"
					className="button__width text-center"
					onClick={() => {
						restar();
						if (count <= 0) setContador(1);
					}}
				>
					-
				</Button>
				<div className="container-num">{count}</div>

				<Button
					variant="dark"
					className="button__width text-center"
					onClick={() => {
						if (count < stock && stock != 0) sumar();
					}}
				>
					+
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ItemCount;
