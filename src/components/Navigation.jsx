import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { handleLogout } from './FirebaseFunctions';
import './../App.css';

const Navigation = () => {
    const user = useAuth();

    console.log(user);

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
                        <NavLink className='nav-link' to='/accounts' end>Accounts</NavLink>
                    </Nav>

                    {user &&
                        <Nav>
                            <button onClick={handleLogout}>
                                Log out
                            </button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}

export default Navigation;
