import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import Auth from '../../utils/auth';

function Header() {
    // function signout(event) {
    //     event.preventDefault();
    //     Auth.signout();
    // };
    return (
        <header className="bg-dark fixed-top">
            <section className="justify-content-space-around border-top">
                <Link to="/"><h1> Components </h1></Link>
                <Navbar bg="light" expand="lg">
                    <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#login">Login</Nav.Link>
                                <Nav.Link href="#signup">Signup</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Create a new post</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">signout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    </Container>
                </Navbar>

            </section>
        </header>
    )
}

export default Header;