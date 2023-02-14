import { useState } from 'react';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Col,
    Row
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import gamerLogo from '../../app/assets/img/gamerlogo.jpg'
import '../../app/assets/css/gamerStyle.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='jumbotron'>
                <Container fluid>
                    <Row>
                        <Col sm='3' className='topL'>
                            <Link to='/'>
                                <img src={gamerLogo} className='roundImage' alt='Gamer Cafe logo' />
                            </Link>
                        </Col>
                        <Col className='text-center title' sm='6'>
                            <h1>Gamer Cafe</h1> <br />
                            <h3>WHERE GREAT FOOD MEETS GREATER GAMING</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar dark className='sticky-top' expand='sm'>
                <Container fluid className='d-flex justify-content-sm-center'>
                    <Row className='w-100'>
                        <Col>
                            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                            <Collapse isOpen={menuOpen} navbar className='justify-content-around'>
                                <Nav navbar>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='/'>
                                                <i className='fa fa-home fa-lg' /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='games'>
                                                <i className='fa fa-gamepad fa-solid fa-lg' /> Games
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='menu'>
                                                <i className='fa fa-cutlery fa-lg' /> Menu
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='events'>
                                                <i className='fa fa-calendar fa-lg' /> Events
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='rooms'>
                                                <i className='fa fa-address-card fa-lg' /> Rooms
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='mx-5'>
                                            <NavLink className='nav-link' to='store'>
                                                <i className='fa fa-shopping-bag fa-lg' /> Store
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                            </Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;