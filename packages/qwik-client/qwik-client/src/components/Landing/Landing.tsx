import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/nav'
import LoginButton from '../LoginButton/LoginButton';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Landing = () => {

    const getStartedText = {
        text: "Get Started"
    }

    const getNavContents = {
        contents: [
                <Nav.Link>About</Nav.Link>,
                <Nav.Link href="mailto:krumbholz98@gmail.com" target="_blank">Contact</Nav.Link>,
                <LoginButton/>
            ]
    }

    return(
        <Container fluid>
            <Row>
                <Col>
                    <Navigation {...getNavContents}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Qwik, modern blogs done simply.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Nullam massa elit, vulputate vel urna sit amet, bibendum varius justo.
                          Suspendisse rutrum viverra erat id fermentum. Duis sed erat nec libero
                           tempor ultricies id vel augue. Donec ac volutpat lorem. Nulla facilisi.
                            Proin gravida blandit lacus, eget volutpat felis accumsan quis.</p>
                    <LoginButton {...getStartedText}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
};

export default Landing;