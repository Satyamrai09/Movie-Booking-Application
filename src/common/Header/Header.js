import React from "react";
import "./Header.css";
import logo from '../../assets/Logo.svg';
import { Button } from '@material-ui/core';

function Header (props){
        return(
            <div className="header">
                <img src={logo} alt="My logo" className="mylogo"/>
                <Button className='login' variant='contained'>LOGIN</Button>
            </div>
        );
}

export default Header;