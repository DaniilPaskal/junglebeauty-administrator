import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../App.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect className='nav-bar' expand="lg" variant='dark' bg='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <NavLink className='nav-link' to='/' end>Home</NavLink>
                        <NavLink className='nav-link' to='/add-cats'>Add Cats</NavLink>
                        <NavLink className='nav-link' to='/view-cats'>View Cats</NavLink>
                        <NavLink className='nav-link' to='/news'>News</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}

export default Navigation;
