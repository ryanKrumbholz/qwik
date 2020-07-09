import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthorized from '../NotAuthorized/NotAuthorized';

const AuthenticatedRoute = ({component: Component, path, ...rest}: any) => {

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

    let auth = getCookie("auth");
    let timestamp = parseInt(getCookie("timestamp"))
    const fullDay = (24*3600)
    
    const { isAuthenticated, user } = useAuth0();
    const notExpired = (timestamp - fullDay > 0) ? true : false;

    if (!auth || auth === 'false' && notExpired) {
        document.cookie = `auth = ${isAuthenticated}`;
        document.cookie = `timestamp = ${Date.now()}`
    }

    if (isAuthenticated) document.cookie = `name= ${user.name}`;
    
    return getCookie("auth") === "true" ? <Component {...rest}/> : <NotAuthorized/>;
}

export default AuthenticatedRoute;