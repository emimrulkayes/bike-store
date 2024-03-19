import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className='main-nav' expand="lg">
        <Container>
          <Navbar.Brand className='brand-logo text-white' href="#home">BS Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-menu ms-auto">
                <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/products'>Products</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/update/:productId'>Add Product</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/blogs'>Blogs</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/contact'>Contact</NavLink>
                {
                  user ?
                  <Button onClick={handleLogOut} className='btn user-control logout-btn'>Log out</Button>
                  :
                  <Button className='btn user-control login-btn'>
                      <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/login'>Login</NavLink>
                  </Button>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;