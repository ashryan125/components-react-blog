import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { GiHamburgerMenu } from 'react-icons/gi';


function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid className='container-xxl'>
                <Navbar.Brand as={Link} to='/'>
                    <h1 className='logo'>Components</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
<<<<<<< HEAD
                    <Nav className="me-auto">
                        {Auth.loggedIn() ? (
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-button-dark">
                                    <GiHamburgerMenu style={{ fontSize: '25px' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/home">Home</Dropdown.Item>
                                    <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={Auth.signout}>Signout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    ) : (
                    <>
                        <Nav>
                            <Nav.Link as={Link} to='/home' className='navlinks'> Home </Nav.Link>
                            <Nav.Link as={Link} to='/login' className='navlinks'>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to='/signup' className='navlinks'>
                                Signup
                            </Nav.Link>
                        </Nav>
                    </>
                   )}
                   </Nav>
=======
                    
                        {Auth.loggedIn() ? (
                            <>
                            <Nav className="justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-button-dark">
                                        <GiHamburgerMenu style={{ fontSize: '25px' }} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/home">Home</Dropdown.Item>
                                        <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={Auth.signout}>Signout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </Nav>
                            </>
                        ) : (
                            <>
                                <Nav className="text-end">
                                    <Nav.Link as={Link} to='/home' className='navlinks'> Home </Nav.Link>
                                    <Nav.Link as={Link} to='/login' className='navlinks'>
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/signup' className='navlinks'>
                                        Signup
                                    </Nav.Link>
                                </Nav>
                            </>
                        )}
                  

>>>>>>> fcc6cfc5d7b5432f8586731a68b19e20b6beffcc
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;