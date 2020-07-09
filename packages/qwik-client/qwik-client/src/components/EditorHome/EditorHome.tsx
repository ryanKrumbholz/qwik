import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/nav'
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from '../Navigation/Navigation';
import LogoutButton from "../LogoutButton/LogoutButton";
import BlogCards from "../BlogCards/BlogCards";

const EditorHome = (props: any) => {

    const getCookie = (cname: string) => {
        //gets cookie of given type
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    const { isAuthenticated, user } = useAuth0();
    const auth = getCookie("auth");
    const [name, setName] = useState("");

    if (!auth || auth === 'false') {
        //checking if cookie exist or is false then setting cookie after successful login
        document.cookie = `auth = ${isAuthenticated}`;
        document.cookie = `timestamp = ${Date.now()}`
    }

    if (isAuthenticated && name === "") document.cookie = `name= ${user.name}`;
    //to prevent name cookie from being undefined; sets name cookie after successful login


    if ( name === "") setName(getCookie('name')); 
    //to prevent infinite re-renders; only changes state if setName is an empty string.

    const getNavContents = {
        contents: [
                <Nav.Link disabled>Hello {name}!</Nav.Link>,
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
            <Row>
                <Col>
                    <BlogCards />
                </Col>
            </Row>
        </Container>
    )
}

export default EditorHome;