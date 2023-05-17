import React,{useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Container, Row, Col} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import '../Style/Login.css';
import {toast} from "react-toastify";
import axios from "axios"; // ספרית http המבוססת על promise ומאפשרות למפתחים לשלוח בקשות לשרת שלנו או לשרת צד שלישי להביא נתונים
// מקלה בשליחת בקשות http אסינכרוניות לנקודות קפה rest ןעוזרת לנו לבצע פעולות crud

const Login = () => {


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
                "http://localhost:4100/login",
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
                    navigate("/profile")
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };

    return(
    <Helmet title="Login">
        <CommonSection title="Login"/>
        <div className="container">
            <Container>
                <Row>
                    <Col lg='5' className="m-auto text-center">
                        <h3 className="fw-600 mb-4">Login</h3>

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
                            <span>Dont have an account? <Link to="/signup">SignUp</Link>
                                </span>
                            <br/>
                            <button className="buy_btn" type="submit">Login</button>

                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    </Helmet>
    )
};

export default Login;