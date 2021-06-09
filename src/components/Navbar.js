import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand className={styles.navBrand}> <Logo className={styles.logo}/> iShirt</Navbar.Brand>
            <Nav className={styles.mainNav}>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavMenu
