import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
//listgroup - מספק דרך להציג סדרה של תוכן

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";



const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>

                    <Col lg='4'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>PetLand</h1>
                            </div>
                        </div>
                        <p className="footer_text mt-4">
                            We Make Sure Your Pet Gets The Best Care!
                        </p>
                    </Col>



                    <Col lg='3'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">
                                Top Categories
                            </h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/catshop">
                                        Cat's Category
                                    </Link>
                                </ListGroupItem>



                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/dogshop">
                                        Dog's Category
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>



                    <Col lg='2'>
                        <div className="footer_quick-links">
                            <h4 className="quick">
                                Useful Links
                            </h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </ListGroupItem>



                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">
                                        Cart
                                    </Link>
                                </ListGroupItem>


                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/signup">
                                        Sign Up
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>




                    <Col lg='3'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">
                                Contact
                            </h4>
                            <ListGroup className="footer_contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p> Israel ,Tel Aviv,Allenby 20</p>
                                </ListGroupItem>



                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>1700-802-891</p>
                                </ListGroupItem>



                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>PetLandMail@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>


                    <Col lg='12'>
                        <p className="footer_copyright">
                            Copyright {year}, developed by Nana.
                            All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


export default Footer;