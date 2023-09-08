import React from 'react';
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
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/news'>News</NavLink>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/articles'>Articles</NavLink>
                        <NavLink exact className='nav-link' as={Link} onClick={handleToggle} to='/videos'>Videos</NavLink>
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

// const Navigation = () => {
//     const [expanded, setExpanded] = useState(false);
//     const handleToggle = () => setExpanded(!expanded);

//     return (
//         <Navbar expanded={expanded} onToggle={handleToggle} collapseOnSelect className='nav-bar' expand='xl' variant='dark' bg='dark'>
//             <Container>
//                 <Link className='logo-link' to='/'>
//                     <Navbar.Brand className='logo-brand'>
//                         <img className='logo-img' src='/assets/logo.png' alt='Junglebeauty logo'/>
//                         <h1 className='logo-text'>JungleBeauty Bengals</h1>
//                     </Navbar.Brand>
//                 </Link>
//                 <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
//                 <Navbar.Collapse id='responsive-navbar-nav'>
//                     <Nav className='ml-auto'>
//                         <NavLink exact className='nav-link' as={Link} to='/' onClick={handleToggle}>Home</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/queens' onClick={handleToggle}>Queens</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/kings' onClick={handleToggle}>Kings</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/kittens' onClick={handleToggle}>Kittens</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/news' onClick={handleToggle}>News</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/about-us' onClick={handleToggle}>About</NavLink>
//                         <NavLink exact className='nav-link' as={Link} to='/contact' onClick={handleToggle}>Contact</NavLink>
//                         <NavDropdown className='nav-dropdown' title='Info'>
//                             <NavLink exact className='dropdown-link' as={Link} to='/faq' onClick={handleToggle}>FAQ</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/articles' onClick={handleToggle}>Our Articles</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/about-bengals' onClick={handleToggle}>About the Bengal Breed</NavLink>
//                         </NavDropdown>
//                         <NavDropdown className='nav-dropdown' title='How to buy'>
//                             <NavLink exact className='dropdown-link' as={Link} to='/why-choose-junglebeauty' onClick={handleToggle}>Why choose JungleBeauty</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/buy-sell-agreement' onClick={handleToggle}>Buy-Sell Agreement</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/price' onClick={handleToggle}>Price</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/preparing-for-coming-kitten' onClick={handleToggle}>How to be ready for coming kitten</NavLink>
//                             <NavDropdown.Divider/>
//                             <NavLink exact className='dropdown-link' as={Link} to='/visit-junglebeauty' onClick={handleToggle}>How to visit JungleBeauty</NavLink>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
       
//     );
// }

// export default Navigation;