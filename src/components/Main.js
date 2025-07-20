import React from 'react';
import mainImg from "../assets/6.jpg";
import CloseImg from "../assets/clothes.jpg";
import JewelryImg from "../assets/jewelry.jpg";
import ElectronicImg from "../assets/electronics.jpg";
import "../styles/MainPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from 'react-bootstrap';

function MainPage() {
    return (
        <div className="mainPageContent">
            <div className="mainImgDiv">
                <img id="mainImg" src={mainImg} alt="mainImg" />
                <div className="textMainImg">
                    <h3 className="Img-h3">Shopping Site</h3>
                    <p>This website was created by<a href="https://github.com/Dev-MostafaAzari">MostafaAzari<FontAwesomeIcon icon={faGithub} /></a></p>
                </div>
            </div>
            <div className="CategoryMainDiv">
                <Col className="CategoryMainTitle col-12">
                    <h4>Select Category</h4>
                </Col>
                <Col className="CategoryMainItems col-12">
                    <Row className="CategoryMainContainer" xxl={4} xl={4} lg={3} md={2} sm={1} xs={1}>
                        <Col>
                            <a href="#">
                                <div className="CategoryMainCards">
                                    <img className="CategoryMainImg" src={CloseImg} alt="Clothes" />
                                    <span className="CategoryMainSpan">Clothes</span>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="CategoryMainCards">
                                    <img className="CategoryMainImg" src={ElectronicImg} alt="Clothes" />
                                    <span className="CategoryMainSpan">Electronics</span>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="CategoryMainCards">
                                    <img className="CategoryMainImg" src={JewelryImg} alt="Clothes" />
                                    <span className="CategoryMainSpan">Jewelrys</span>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </div>
        </div>
    )
}

export default MainPage;
