import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container fluid className='text'>
                <Row>
                    <Col xs={{ size: 4, offset: 0 }} lg={{ size: 2, offset: 1 }} className='text-center'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/' className='text-danger'>Home</Link>
                            </li>
                            <li>
                                <Link to='games' className='text-danger'>Games</Link>
                            </li>
                            <li>
                                <Link to='menu' className='text-danger'>Menu</Link>
                            </li>
                            <li>
                                <Link to='events' className='text-danger'>Events</Link>
                            </li>
                            <li>
                                <Link to='rooms' className='text-danger'>Rooms</Link>
                            </li>
                            <li>
                                <Link to='store' className='text-danger'>Store</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='4' lg='2' className='text-center'>
                        <h5>Hours</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <p className='text-danger'>
                                    Mon-Fri: 11AM - 11PM
                                </p>
                            </li>
                            <li>
                                <p className='text-danger'>
                                    Sat-Sun: 10AM - 12AM
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='4' lg='2' className='text-center'>
                        <h5>Address</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <p className='text-danger'>
                                Gamer Cafe, Inc.
                                </p>
                            </li>
                            <li>
                                <p className='text-danger'>
                                1234 Inyourheart Blvd <br />Austin, Tx <br />78750
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' lg='2' className='text-center'>
                        <h5>Contact Us</h5>
                        <a
                            role='button'
                            className='btn btn-link text-danger'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link text-danger'
                            href='mailto:!!Not an email address!! Do Not Send!!'
                        >
                            <i className='fa fa-envelope-o' /> Gamercafe@nodomain.co
                        </a>
                    </Col>
                    <Col xs='6' lg='2' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;