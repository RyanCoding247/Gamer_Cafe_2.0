import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
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
                                <img src={gamerLogo} className='roundImage' />
                            </Link>
                        </Col>
                        <Col className='text-center title' sm='6'>
                            <h1>Gamer Cafe</h1> <br />
                            <h3>WHERE GREAT FOOD MEETS GREATER GAMING</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar dark className='sticky-top navbar' expand='sm'>
                <Container fluid>
                    <Row>
                        <Col sm='1' xs='6'>
                            <Link to='/'>
                                <img src={gamerLogo} className='smallRoundImage' height='50' width='auto' />
                            </Link>
                        </Col>
                        <Col xs={{ offset: 3, size: 3 }} sm={{ offset: 1, size: 10 }}>
                            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                            <Collapse isOpen={menuOpen} navbar>
                                <Nav className='ms-auto' navbar>
                                    <Row>
                                        <Col sm={{ size: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='/'>
                                                    <i className='fa fa-home fa-lg' /> Home
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col sm={{ size: 1, offset: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='games'>
                                                    <i className='fa fa-gamepad fa-solid fa-lg' /> Games
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col sm={{ size: 1, offset: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='menu'>
                                                    <i className='fa fa-cutlery fa-lg' /> Menu
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col sm={{ size: 1, offset: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='events'>
                                                    <i className='fa fa-calendar fa-lg' /> Events
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col sm={{ size: 1, offset: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='rooms'>
                                                    <i className='fa fa-address-card fa-lg' /> Rooms
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col sm={{ size: 1, offset: 1 }}>
                                            <NavItem>
                                                <NavLink className='nav-link' to='store'>
                                                    <i className='fa fa-shopping-bag fa-lg' /> Store
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                    </Row>
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