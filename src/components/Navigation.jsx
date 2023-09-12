import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { handleLogout } from './FirebaseFunctions';
import './../App.css';

const Navigation = () => {
    const user = useAuth();
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => setExpanded(!expanded);

    return (
        <Navbar expanded={expanded} onToggle={handleToggle} collapseOnSelect className='nav-bar' expand='xl' variant='dark' bg='dark'>
            <Container>
                <Link className='logo-link' to='/'>
                     <Navbar.Brand className='logo-brand'>
                         <img className='logo-img' src='/assets/logo.png' alt='Junglebeauty logo'/>
                         <h1 className='logo-text'>JungleBeauty Bengals</h1>
                     </Navbar.Brand>
                 </Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/' end>Home</NavLink>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/add-cats'>Add Cats</NavLink>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/view-cats'>View Cats</NavLink>
                        <NavDropdown className='nav-dropdown' title='Lists'>
                             <NavLink exact className='dropdown-link' as={Link} onClick={handleToggle} to='/news' >News</NavLink>
                             <NavDropdown.Divider/>
                             <NavLink exact className='dropdown-link' as={Link} onClick={handleToggle} to='/articles'>Articles</NavLink>
                             <NavDropdown.Divider/>
                             <NavLink exact className='dropdown-link' as={Link} onClick={handleToggle} to='/videos'>Videos</NavLink>
                        </NavDropdown>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/accounts' end>Accounts</NavLink>
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