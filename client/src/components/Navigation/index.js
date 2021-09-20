import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { GiHamburgerMenu } from 'react-icons/gi'
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