import React, { useEffect, useState } from 'react';
import { Accordion, Row, Col, Button, ListGroup, FormCheck } from 'react-bootstrap';
import axios from "axios";
import "../styles/Products.css";
import myLogo from "../assets/dev-mostafa-2.jpg";


function ProductsPage() {

    useEffect(()=>{
        GetProducts();
    },[])

    const [products,setProducts]=useState([]);

    const BaseUrl = "https://fakestoreapi.com";
    function GetProducts(){
        axios.get(`${BaseUrl}/products`).then(res=>{console.log(res.data);setProducts(res.data)}).catch(error=>console.log(error));
    }



    return (
        <div className="MainProducts">
            <Row className="MainProductsRow" xs={1}>
                <Col className="col-xl-3">
                    <Accordion className="Filters">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Product Type
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="ClothesCheck" type="checkbox"/>
                                            <FormCheck.Label className="FilterLable">Clothes</FormCheck.Label>
                                        </FormCheck>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="JewelryCheck" type="checkbox"/>
                                            <FormCheck.Label className="FilterLable">Jewelry</FormCheck.Label>
                                        </FormCheck>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FormCheck>
                                            <FormCheck.Input className="ElectronicsCheck" type="checkbox"/>
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
                    <Row className="RowProducts" xl={5} lg={4} md={3} sm={2} xs={2}>
                        <Col>
                            <div className="CardProduct">
                                <h4 className="productTitle">Title</h4>
                                <img className="productImg" src={myLogo} alt="ProductImg"/>
                                <p className="productDiscript">dadakajdksdjkakhdjahdjahdjhadlodadadadhgjfhjahkauhdkuhadkujhak</p>
                                <div className="productFooter">
                                    <Button className="AddCard btn-primary">Add To Card</Button>
                                    <span className="productPrice">999$</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ProductsPage;