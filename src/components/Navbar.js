import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import myLogo from "../assets/dev-mostafa-2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { LoginOffCanContext } from '../contexts/LoginAndOffcanContext';

function NavbarPart() {
    const {profile,Open}= useContext(LoginOffCanContext);

    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <NavbarBrand href="https://github.com/Dev-MostafaAzari" target="_blank"><img src={myLogo} alt="myLogo" width={70} /></NavbarBrand>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <Nav>
                            <Nav.Item>{profile ? (<button type="button" onClick={Open()} className="fonts"><FontAwesomeIcon icon={faUserCircle}/></button>) : (<Link to="/login" className="fontsLink"><FontAwesomeIcon icon={faUserCircle}/></Link>)}</Nav.Item>
                            <Nav.Item><button type="button" className="fonts"><FontAwesomeIcon icon={faShoppingCart}/></button></Nav.Item>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                            <Nav.Link><Link to="">ContactMe</Link></Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default NavbarPart;