import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../index.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
            <Navbar bg="light">
                <Container className='navBar--height'>
                    <Link to="/">
                        <Navbar.Brand href="/index.html">
                            <img
                            src="./src/assets/logo.svg"
                            width="120"
                            height="120"
                            className="d-inline-block align-top"
                            alt="Enersys Baterias logo"
                            />
                        </Navbar.Brand>
                        </Link>
                    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#">Yuasa</NavDropdown.Item>
                        <NavDropdown.Item href="#">Microcell</NavDropdown.Item>
                        <NavDropdown.Item href="#">Enersys</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar