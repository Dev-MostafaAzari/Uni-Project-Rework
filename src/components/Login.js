import React from 'react';
import axios from "axios";
import { Button, Form,} from 'react-bootstrap';
import "../styles/Login.css";



function LoginPage(){

    return(
        <div className="mainLogin">
            <h3 className="loginTitle">Login Panel</h3>
            <Form className="loginForm">
                <Form.Floating>
                    <Form.Control name="username" type="text" placeholder=""/>
                    <Form.Label>Username</Form.Label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control name="password" type="password" placeholder=""/>
                    <Form.Label>password</Form.Label>
                </Form.Floating>
                <Button type="submit">Login</Button>
                <a href="#" className="needAccount">i dont have an account</a>
            </Form>
        </div>
    )
}

export default LoginPage;
