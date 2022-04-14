import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='navbar-parent bg-dark'>
                <Container fluid>
                    {/* <Navbar.Brand href="#"></Navbar.Brand> */}
                    <Navbar.Brand>
                        {/* <Link to="/"> */}
                            {/* <img src='../../../../../public/images/gitCat.jpg' /> */}
                            <img width="30"
        height="30"
        className="d-inline-block align-top" src='/public/images/gitCat.jpg' />
                        {/* </Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='navItem-parent'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                        {/* nav-link */}
                        <Link to ="/cart"  className = " navItem">Cart</Link>
                        <Link to ="/wishlist"  className = "navItem">Wishlist</Link>
                        <Link to ="/account"  className = " navItem">Account</Link>
                        {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;