import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "../styles/ContactMe.css";

function Contactme() {
    return (
        <div className="mainContentContainer">
            <div className="linkPartContainer">
                <h3 className="ContactTitle">Get in Touch</h3>
            </div>
            <div className="inputPartContainer">
                <Form className="formContact">
                    <div className="formContact1">
                        <Form.Floating>
                            <Form.Control type="text" className="inputFormContact" placeholder="" />
                            <Form.Label>First Name</Form.Label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control type="text" className="inputFormContact" placeholder="" />
                            <Form.Label>Last Name</Form.Label>
                        </Form.Floating>
                    </div>
                    <div className="formContact2">
                        <Form.Floating>
                            <Form.Control type="text" className="inputFormContact" placeholder="" />
                            <Form.Label>Email</Form.Label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control type="text" className="inputFormContact" placeholder="" />
                            <Form.Label>Your Message</Form.Label>
                        </Form.Floating>
                    </div>
                    <div className="formContact3">
                        <Button type="button">Send</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Contactme;