import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Nav from 'react-bootstrap/nav'


const About = () => {

    const getNavContents = {
        contents: [
                <Nav.Link>About</Nav.Link>,
                <Nav.Link href="mailto:krumbholz98@gmail.com" target="_blank">Contact</Nav.Link>
            ]
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navigation {...getNavContents}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>About this project</h1>
                    <p>Text about this project</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default About;