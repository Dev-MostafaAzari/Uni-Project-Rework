import React from 'react';
import { Button,  Form } from 'react-bootstrap';
import axios from 'axios';
import "../styles/Register.css";




function RegisterPage(){
    return(
        <div className="RegisterMain">
            <h3 className="RegisterTitle">Register Panel</h3>
            <Form className="FormContainer">
                <Form.Floating>
                    <Form.Control id="RegisterName" type="text" placeholder=""/>
                    <Form.Label>Enter UserName</Form.Label>
                </Form.Floating>
                <span className="FormError"></span>
                <Form.Floating>
                    <Form.Control id="RegisterGmail" type="text" placeholder=""/>
                    <Form.Label>Enter Gmail</Form.Label>
                </Form.Floating>
                <span className="FormError"></span>
                <Form.Floating>
                    <Form.Control id="RegisterPass" type="text" placeholder=""/>
                    <Form.Label>Enter Password</Form.Label>
                </Form.Floating>
                <span className="FormError"></span>
                <Form.Floating>
                    <Form.Control id="RegisterCPass" type="text" placeholder=""/>
                    <Form.Label>Confirm Password</Form.Label>
                </Form.Floating>
                <span className="FormError"></span>
                <Button id="SubmitBtn" type="submit">Register</Button>
                <a href="#" className="haveAccount">already have an account!</a>
            </Form>
        </div>
    )
}


export default RegisterPage;