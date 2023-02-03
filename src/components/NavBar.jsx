import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        src="./src/assets/logo.svg"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Enersys Baterias logo"
                    />
                    </Navbar.Brand>
                    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#">Categoria 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Categoria 2</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar