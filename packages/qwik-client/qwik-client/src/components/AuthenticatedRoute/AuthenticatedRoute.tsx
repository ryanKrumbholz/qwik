import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../LoginButton/LoginButton';

const AuthenticatedRoute = ({component: Component, path, ...rest}: any) => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated === true ? <Component {...rest}/> : <LoginButton/>;
}

export default AuthenticatedRoute;