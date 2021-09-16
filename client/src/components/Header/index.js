import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Auth from '../../utils/auth';


function Header() {
    // function signout(event) {
    //     event.preventDefault();
    //     Auth.signout();
    // };

    return (
        <header className="bg-dark fixed-top">
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        Components
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {Auth.loggedIn() ? (
                            <>
                                <Nav.Link as={Link} to='/saved'>
                                    See Your Books
                                </Nav.Link>
                                <Nav.Link onClick={Auth.signout}>Signout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={Auth.login}>Login</Nav.Link>,
                            <Nav.Link onClick={Auth.signup}>Sign Up</Nav.Link>
                        )}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#my-profile">My profile</NavDropdown.Item>
                            <NavDropdown.Item href="#new-post">Create a new post</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#signout">signout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )

    
}

export default Header;