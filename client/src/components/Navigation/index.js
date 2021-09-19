import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
import './style.css';


function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Components
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto">
                        {Auth.loggedIn() ? (
                            <>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <Nav.Link as={Link} to='/home'> Home </Nav.Link>
                                    <Nav.Link as={Link} to='/my-profile'>
                                        My profile
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/new-post'>
                                        Create a new post
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.signout}>Signout</Nav.Link>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to='/home'> Home </Nav.Link>
                                <Nav.Link as={Link} to='/login'>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to='/signup'>
                                    Signup
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation; 