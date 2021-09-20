import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
// import { GiHamburgerMenu } from 'react-icons/gi'
import './style.css';


function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <h1>Components</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* {Auth.loggedIn() ? ( */}
                        <>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                {/* <GiHamburgerMenu style={{ fontSize: '40px' }} /> */}
                                <Nav.Link as={Link} to='/home'> Home </Nav.Link>
                                <Nav.Link as={Link} to='/profile'>
                                    My profile
                                </Nav.Link>
                                <Nav.Link as={Link} to='/new-post'>
                                    Create a new post
                                </Nav.Link>
                                <Nav.Link onClick={Auth.signout}>Signout</Nav.Link>
                            </NavDropdown>
                        </>
                    </Nav>
                    ) : (
                    <>
                        <Nav>
                            <Nav.Link as={Link} to='/home'> Home </Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to='/signup'>
                                Signup
                            </Nav.Link>
                        </Nav>
                    </>
                    {/* )} */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;