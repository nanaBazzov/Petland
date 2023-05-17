import React from 'react';
import CommonSection from "../UI/CommonSection";
import Helmet from "../Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";
import "./Profile.css";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Profile = () =>{

    const navigate = useNavigate();


    const logOut = () =>{
        navigate("/signup")
        toast.success("Logged Out")
    }

    return(
        <Helmet title="Profile">
            <CommonSection title="Profile"/>
        <section>
            <Container>
                <Row>
                    <Col lg='5' className="d-inline-block p-4 m-4 profile_info">
                        <h1 className="fw-bold fs-2 align-items-center">Welcome To Your Account!</h1>
                   <br/>

                        <br/>

                        <button className="buy_btn d-block">
                            <Link to="/checkout">
                                Go To Your Checkout Bill
                            </Link>
                        </button>

                        <button className="buy_btn">
                            <Link to="/cart">
                                Go to Your Cart
                            </Link>
                        </button>


                        <button className="buy_btn" onClick={logOut}>
                         Logout
                        </button>

                    </Col>
                </Row>
            </Container>
        </section>
        </Helmet>
    )
}


export default Profile;