import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = (props?: any) => {

  let textContent: string;
  (props.text) ? textContent = props.text : textContent = "Login"

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return <Button variant="dark" onClick={() => loginWithRedirect()}>{textContent}</Button>;
  
};

export default LoginButton;