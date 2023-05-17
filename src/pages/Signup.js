import React,{useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {Link,useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
//axios היא ספרייה שמאפשרת לנו לבצע בקשות HTTP כלומר get, post, put ו-delete באמצעות promises.
// import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
// import {auth} from "../firebase/firebase.config";
// import {storage} from '../firebase/firebase.config';
// import {setDoc, doc} from 'firebase/firestore';
// import {toast } from 'react-toastify';
// import { db } from '../firebase/firebase.config';


import '../Style/Signup.css';


const Signup = () => {




    const [values, setValues] = useState({

        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const generateError = (err) =>
        toast.error(err,)



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4100/signup",
                {
                    ...values,
                },
                { withCredentials: true }
            );
            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password);
                } else {
                    navigate("/login");
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };



    return(

        <Helmet title="Signup">
            <CommonSection title="Signup"/>
            <div className="container">
                <Container>
                    <Row>
                        <Col lg='5' className="m-auto text-center">
                            <h3 className="fw-600 mb-4">Sign Up</h3>

                            <form onSubmit={(e) => handleSubmit(e)}
                                className="auth_form">
                                <div className="form_group">
                                    <label htmlFor="email"></label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="password"></label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={(e) =>
                                            setValues({ ...values, [e.target.name]: e.target.value })
                                        }
                                    />
                                </div>
                                <span>Already have an account ?<Link to="/login"> Login</Link>
                                </span>
                                <br/>
                                <button className="buy_btn" type="submit">Create Account</button>

                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    )
};

export default Signup;