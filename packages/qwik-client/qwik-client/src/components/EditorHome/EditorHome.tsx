import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/nav'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import LogoutButton from "../LogoutButton/LogoutButton";

const EditorHome = () => {

    const uname = "Ryan"

    const getNavContents = {
        contents: [
                <Nav.Link disabled>Hello {uname}!</Nav.Link>,
                <Nav.Link href="mailto:krumbholz98@gmail.com" target="_blank">Contact</Nav.Link>,
                <LogoutButton/>
            ]
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Navigation {...getNavContents}/>
                </Col>
            </Row>
        </Container>
    )
}

export default EditorHome;