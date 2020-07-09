import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

  const { logout } = useAuth0();

  const delCookies = () => {
    const eraseCookie = (name:string) => {
      var d = new Date();
      d.setTime(d.getTime()+(-1*24*60*60*1000));
      document.cookie = name+"= ;" +"  expires=" + d + ";";
    }
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      eraseCookie(cookies[i].split("=")[0]);
  }
  return <Button variant="dark" onClick={() => {logout(); delCookies()}}>Log Out</Button>;
};

export default LogoutButton;