import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from '../LoginButton/LoginButton';

const NotAuthorized = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Please sign in to access this page</h1>
                    <LoginButton/>
                </Col>
            </Row>
        </Container>
    );
};

export default NotAuthorized;