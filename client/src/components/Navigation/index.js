import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { IoPersonCircle } from 'react-icons/io5';


function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid className='container-xxl'>
                <Navbar.Brand as={Link} to='/'>
                    <h1 className='logo'>Components</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    
                        {Auth.loggedIn() ? (
                            <>
                            <Nav className="justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle
                                    // variant="secondary"
                                    style={{ backgroundColor: 'transparent', border: '0 solid transparent' }} 
                                    id="dropdown-button-dark">
                                        <IoPersonCircle style={{ fontSize: '48px', backgroundColor: 'transparent' }} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/">Home</Dropdown.Item>
                                        <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={Auth.signout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </Nav>
                            </>
                        ) : (
                            <>
                                <Nav className="text-end">
                                    <Nav.Link as={Link} to='/' className='navlinks'> Home </Nav.Link>
                                    <Nav.Link as={Link} to='/login' className='navlinks'>
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/signup' className='navlinks'>
                                        Signup
                                    </Nav.Link>
                                </Nav>
                            </>
                        )}
                  

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;