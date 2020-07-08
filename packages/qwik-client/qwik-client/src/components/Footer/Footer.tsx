import React from "react";
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'


const Footer = () => {

    const navItems = () =>
        [
            <Nav.Item>
             <Nav.Link href="https://github.com/ryanKrumbholz/qwik" target="_blank">Source Code</Nav.Link>
            </Nav.Item>
        ]

    return(
        <Navbar>
            {navItems()}
        </Navbar>
        
    );
  };


export default Footer;