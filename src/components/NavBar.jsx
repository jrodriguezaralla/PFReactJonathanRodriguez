import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
                        <Navbar.Brand>
                            <img
                            src="./src/assets/logo.svg"
                            width="120"
                            height="120"
                            className="d-inline-block align-top"
                            alt="Enersys Baterias logo"
                            />
                        </Navbar.Brand>
                    </Link>

                    <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="secondary"
                        menuVariant="dark"
                        title="Categorias"
                        className="mt-2"
                    > 
                        <Dropdown.Item as='div'>
                            <Link to={`/category/${"PLOMO-CALCIO"}`} className="text-decoration-none text-white">
                                PLOMO-CALCIO
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as='div'>
                            <Link to={`/category/${"PLOMO-PURO"}`} className="text-decoration-none text-white">
                                PLOMO PURO
                            </Link>
                        </Dropdown.Item>   
                    </DropdownButton>

                    <Link to={"/cart"} className="text-decoration-none text-dark">
                        <CartWidget/>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar