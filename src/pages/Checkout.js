import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import '../Style/Checkout.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const placeOrder = () => {
        alert("Thank You For The Purchase");
        window.location.reload(false);

    }

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold">User Information</h6>
                            <Form className="form_group">
                                <FormGroup>
                                    <input type="text" placeholder="Enter Your Name"
                                        required
                                    />
                                </FormGroup>


                                <FormGroup className="form_group">
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </FormGroup>


                                <FormGroup className="form_group">
                                    <input type="number"
                                        id="number"
                                        name="number"
                                        placeholder="Phone Number"
                                    />
                                </FormGroup>


                                <FormGroup className="form_group">
                                    <input type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Street Address"
                                    />
                                </FormGroup>


                                <FormGroup className="form_group">
                                    <input type="text"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                    />
                                </FormGroup>


                                <FormGroup className="form_group">
                                    <input type="text"
                                        id="postal code"
                                        name="postal code"
                                        placeholder="Postal Code"
                                    />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="text"
                                        id="country"
                                        name="country"
                                        placeholder="Country"
                                    />
                                </FormGroup>
                            </Form>

                        </Col>







                        <Col lg='4'>
                            <div className="checkout_cart">
                                <h6>Total Qty:<span>{totalQty} Items</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>
                                        Shipping: <br />
                                        free Shipping
                                    </span>
                                    <span>$0</span>
                                </h6>
                                <h4>Total Cost:<span>${totalAmount}</span></h4>
                                <button className="buy_btn auth_btn w-100 justify-content-center">
                                    <Link to="/login">
                                        Login To purchase
                                    </Link>
                                </button>
                                <button className="buy_btn auth_btn w-100 justify-content-center" onClick={placeOrder}>
                                    Place An Order
                                </button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Checkout;