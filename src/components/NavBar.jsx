import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../index.css'

const NavBar = () => {
    return(
        <>
            <Navbar bg="light">
                <Container className='navBar--height'>
                    <Navbar.Brand href="/index.html">
                    <img
                        src="./src/assets/logo.svg"
                        width="120"
                        height="120"
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