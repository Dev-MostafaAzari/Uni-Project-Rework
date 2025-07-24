import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "../styles/ContactMe.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faTelegram,faInstagram } from '@fortawesome/free-brands-svg-icons';


function Contactme() {
    return (
        <div className="mainContentContainer">
            <div className="linkPartContainer">
                <div className="textPartContainer">
                    <h3 className="ContactTitle">Get in Touch</h3>
                    <p className="ContactText">if you have any inquiries or just want to say hi,please use our contact form </p>
                    <div className="SocialLinksContainer">
                        <a className="SocialLinks" href="https://github.com/Dev-MostafaAzari" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        <a className="SocialLinks" href="#" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a className="SocialLinks" href="#" target="_blank"><FontAwesomeIcon icon={faTelegram}/></a>
                    </div>
                </div>
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
                            <Form.Control type="text" id="ContactMessage" className="inputFormContact" placeholder="" />
                            <Form.Label>Your Message</Form.Label>
                        </Form.Floating>
                    </div>
                    <div className="formContact3">
                        <Button className="SendDataContent" type="button">Send</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Contactme;