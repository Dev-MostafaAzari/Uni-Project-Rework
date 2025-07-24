import React, {useEffect, useState } from 'react';
import { Accordion, Row, Col, Button, ListGroup, FormCheck } from 'react-bootstrap';
import axios from "axios";
import "../styles/Products.css";





function ProductsPage(props) {

    useEffect(() => {
        GetProducts();
    }, [])

    const [products, setProducts] = useState([]);

    const BaseUrl = "https://fakestoreapi.com";
    function GetProducts() {
        axios.get(`${BaseUrl}/products`).then(res => { console.log(res.data); setProducts(res.data) }).catch(error => console.log(error));
    }

    const ClothesCheck = document.getElementById("ClothesCheck");
    const JewelryCheck = document.getElementById("JewelryCheck");
    const ElectronicsCheck = document.getElementById("ElectronicsCheck");
    
    const filterCloth = () => {
        const Cloths = document.querySelectorAll(".clothing");
        const jewelrys = document.querySelectorAll(".jewelery");
        const electronics = document.querySelectorAll(".electronics");
        switch (ClothesCheck.checked) {
            case true:
                Cloths.forEach(el => el.style.display = "block");
                if (ElectronicsCheck.checked === true && JewelryCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                }
                else if (ElectronicsCheck.checked === false && JewelryCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "none");
                }
                else if (ElectronicsCheck.checked === true && JewelryCheck.checked === false) {
                    jewelrys.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "block");
                }
                else {
                    jewelrys.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "none");
                }
                break;
            case false:
                Cloths.forEach(el => el.style.display = "none");
                if (ElectronicsCheck.checked === true && JewelryCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                }
                else if (ElectronicsCheck.checked === false && JewelryCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "none");
                }
                else if (ElectronicsCheck.checked === true && JewelryCheck.checked === false) {
                    jewelrys.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "block");
                }
                else {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                    jewelrys.forEach(el => el.style.display = "block");
                }
                break;
            default:
                break;
        }
    }
    const filterJewelry = () => {
        const Cloths = document.querySelectorAll(".clothing");
        const jewelrys = document.querySelectorAll(".jewelery");
        const electronics = document.querySelectorAll(".electronics");
        switch (JewelryCheck.checked) {
            case true:
                jewelrys.forEach(el => el.style.display = "block");
                if (ElectronicsCheck.checked === true && ClothesCheck.checked === true) {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                }
                else if (ElectronicsCheck.checked === false && ClothesCheck.checked === true) {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "none");
                }
                else if (ElectronicsCheck.checked === true && ClothesCheck.checked === false) {
                    Cloths.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "block");
                }
                else {
                    Cloths.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "none");
                }
                break;
            case false:
                jewelrys.forEach(el => el.style.display = "none");
                if (ElectronicsCheck.checked === true && ClothesCheck.checked === true) {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                }
                else if (ElectronicsCheck.checked === false && ClothesCheck.checked === true) {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "none");
                }
                else if (ElectronicsCheck.checked === true && ClothesCheck.checked === false) {
                    Cloths.forEach(el => el.style.display = "none");
                    electronics.forEach(el => el.style.display = "block");
                }
                else {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                    jewelrys.forEach(el => el.style.display = "block");
                }
                break;
            default:
                break;
        }
    }
    const filterElectronics = () => {
        const Cloths = document.querySelectorAll(".clothing");
        const jewelrys = document.querySelectorAll(".jewelery");
        const electronics = document.querySelectorAll(".electronics");
        switch (ElectronicsCheck.checked) {
            case true:
                electronics.forEach(el => el.style.display = "block");
                if (JewelryCheck.checked === true && ClothesCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    Cloths.forEach(el => el.style.display = "block");
                }
                else if (JewelryCheck.checked === false && ClothesCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "none");
                    Cloths.forEach(el => el.style.display = "block");
                }
                else if (JewelryCheck.checked === true && ClothesCheck.checked === false) {
                    jewelrys.forEach(el => el.style.display = "block");
                    Cloths.forEach(el => el.style.display = "none");
                }
                else {
                    jewelrys.forEach(el => el.style.display = "none");
                    Cloths.forEach(el => el.style.display = "none");
                }
                break;
            case false:
                electronics.forEach(el => el.style.display = "none");
                if (JewelryCheck.checked === true && ClothesCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "block");
                    Cloths.forEach(el => el.style.display = "block");
                }
                else if (JewelryCheck.checked === false && ClothesCheck.checked === true) {
                    jewelrys.forEach(el => el.style.display = "none");
                    Cloths.forEach(el => el.style.display = "block");
                }
                else if (JewelryCheck.checked === true && ClothesCheck.checked === false) {
                    jewelrys.forEach(el => el.style.display = "block");
                    Cloths.forEach(el => el.style.display = "none");
                }
                else {
                    Cloths.forEach(el => el.style.display = "block");
                    electronics.forEach(el => el.style.display = "block");
                    jewelrys.forEach(el => el.style.display = "block");
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="MainProducts">
            <Row className="MainProductsRow" xs={1}>
                <Col className="col-xl-3 AccordianPart">
                    <Accordion className="Filters">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Product Type
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="ClothesCheck" id="ClothesCheck" onChange={filterCloth} type="checkbox" />
                                            <FormCheck.Label className="FilterLable">Clothes</FormCheck.Label>
                                        </FormCheck>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="JewelryCheck" id="JewelryCheck" onChange={filterJewelry} type="checkbox" />
                                            <FormCheck.Label className="FilterLable">Jewelry</FormCheck.Label>
                                        </FormCheck>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="ElectronicsCheck" id="ElectronicsCheck" onChange={filterElectronics} type="checkbox" />
                                            <FormCheck.Label className="FilterLable">Electronics</FormCheck.Label>
                                        </FormCheck>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="Filters">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Price Range
                            </Accordion.Header>
                            <Accordion.Body>
                                Comming Soon!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className="Filters">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Brands
                            </Accordion.Header>
                            <Accordion.Body>
                                Comming Soon!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col className="col-xl-9">
                    <Row className="RowProducts" xxl={5} xl={4} lg={3} md={3} sm={2} xs={2}>
                        {products && products.map((element) => <Col key={element.id} className={element.category}>
                            <div className="CardProduct">
                                <h4 className="productTitle">{element.title}</h4>
                                <img className="productImg" src={element.image} alt="ProductImg" />
                                <p className="productDiscript">{element.description}</p>
                                <div className="productFooter">
                                    <Button className="AddCard btn-primary">Add To Card</Button>
                                    <span className="productPrice">{element.price}$</span>
                                </div>
                            </div>
                        </Col>)}
                    </Row>
                </Col>
            </Row>
        </div>



    )
}

export default ProductsPage;