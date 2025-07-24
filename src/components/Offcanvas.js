import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Offcanvas } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faPhone, faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginOffCanContext } from '../contexts/LoginAndOffcanContext';
import "../styles/Offcanvas.css";
import myLogo from "../assets/dev-mostafa-2.jpg";

function OffcanvasPart(){
    const {showof,Close,LogOut}=useContext(LoginOffCanContext);
    return(
        <div>
            <Offcanvas show={showof} onHide={Close} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Profile Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanvasContent">
                        <div className="profileImgContainer">
                            <img className="profileImg rounded-pill" src={myLogo} alt="profileImg"/>
                        </div>
                        <h4 className="welcomeUser">hello Emilys</h4>
                        <ListGroup className="listgroupContent">
                            <ListGroupItem><Link className="offcanvasLink"><FontAwesomeIcon icon={faUserCircle}/> Profile</Link></ListGroupItem>
                            <ListGroupItem><Link className="offcanvasLink"><FontAwesomeIcon icon={faArchive}/> History</Link></ListGroupItem>
                            <ListGroupItem><Link className="offcanvasLink"><FontAwesomeIcon icon={faPhone}/> Support</Link></ListGroupItem>
                            <ListGroupItem><button onClick={LogOut} className="logoutButton"><FontAwesomeIcon icon={faSignOut}/> LogOut</button></ListGroupItem>
                        </ListGroup>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default OffcanvasPart;