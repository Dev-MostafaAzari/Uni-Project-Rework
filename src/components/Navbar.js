import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import myLogo from "../assets/dev-mostafa-2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

function NavbarPart() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <NavbarBrand href="https://github.com/Dev-MostafaAzari" target="_blank"><img src={myLogo} alt="myLogo" width={70} /></NavbarBrand>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <Nav>
                            <Nav.Item><button type="button" className="fonts"><FontAwesomeIcon icon={faUserCircle}/></button></Nav.Item>
                            <Nav.Item><button type="button" className="fonts"><FontAwesomeIcon icon={faShoppingCart}/></button></Nav.Item>
                            <Nav.Link to="#">Home</Nav.Link>
                            <Nav.Link to="#">Products</Nav.Link>
                            <Nav.Link to="#">ContactMe</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default NavbarPart;