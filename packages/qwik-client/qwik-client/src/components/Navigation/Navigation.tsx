import React from "react";
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'

const Navigation = (props: any) => {

    const content = () => {
        let contents = props.contents
        let navItems: any = [];
        for (let i = 0; i < contents.length; i++) {
            navItems.push(
                <Nav.Item>{contents[i]}</Nav.Item>
            );
        }
        return (navItems)
    }

    return(
        <Navbar>
            <Navbar.Brand href="#home">Qwik</Navbar.Brand>
            <Nav className="justify-content-end">
                {content()}
            </Nav>
        </Navbar>
  );
};

export default Navigation;