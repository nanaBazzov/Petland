import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
// container - מספק דרך לרכז את כל התוכן של האפליקציה שלנו
// row - מספק דרך לייצר שורות והוא משמש לנו כאשר אנחנו רוצים להציג נתונים בצורה של שורה
// col - מספק דרך לייצר טורים ומשתמש לנו כשאנחנו רוצים להציג נתונים בצורה של טורים
import { motion } from 'framer-motion';
import heroImg from '../assets/images/c7e39f89a9b8c12b1737af559d994901-fococlipping-standard.png';
import '../Style/Home.css';
import { Link } from "react-router-dom";
import productsCat from "../assets/data/productsCat";
import Services from "../Services/Services";
import ProductsListDog from "../components/UI/ProductsListDog";
import counterImg from '../assets/images/cat tree-fococlipping-standard.png';
import Clock from "../components/UI/Clock";
import ProductsListCat from "../components/UI/ProductsListCat";
import productsDog from "../assets/data/productsDog";



const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [ourProducts, setOurProducts] = useState([]);
    const [catProducts, setCatProducts] = useState([]);



    const year = new Date().getFullYear();



    useEffect(() => {
        const filteredTrendingProducts = productsDog.filter(item =>
            item.category === 'Dog equipment');


        const filteredOurProducts = productsCat.filter(item =>
            item.category === 'Cat Food');

        const filteredCatProducts = productsCat.filter(item =>
            item.category === 'Cat equipment');

        const filteredPopularProducts = productsCat.filter(item =>
            item.category === 'Treats');

        setTrendingProducts(filteredTrendingProducts);
        setOurProducts(filteredOurProducts);
        setCatProducts(filteredCatProducts);
    }, [])


    return (
        <Helmet title={'Home'}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <p className="hero_subtitle">
                                    Best Selling Products in {year}
                                </p>
                                <h2>Love is Four-legged World.</h2>
                                <p>Your Pet Deserves The Best Care For Happier Life </p>

                                <motion.button whileTap={{ scale: 1.2 }}
                                    className="buy_btn">
                                    <Link to='/catshop'>
                                        Shop for Cat
                                    </Link>
                                </motion.button>

                                <motion.button whileTap={{ scale: 1.2 }}
                                    className="buy_btn">
                                    <Link to='/dogshop'>
                                        Shop for Dog
                                    </Link>
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/*our service info*/}
            <Services />




            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">Trending Products</h2>
                            <br />
                            <br />
                        </Col>
                        <ProductsListDog data={trendingProducts} />
                    </Row>
                </Container>
            </section>


            <section className="our_sales ">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">Our Cat's Products</h2>
                            <br />
                            <br />
                        </Col>
                        <ProductsListCat data={ourProducts} />
                    </Row>
                </Container>
            </section>



            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className="count_down-col">
                            <div className="clock_top-content">
                                <h4 className="text-black fs-6 md-3">Limited Offer</h4>
                                <br />
                                <h3 className="text-black fs-5 md-5">High Quality Cat Tree</h3>
                            </div>
                            <Clock />

                            <motion.button whileTap={{ scale: 1.2 }}
                                className="buy_btn">
                                <Link to='/catshop'>
                                    Visit Our Store
                                </Link>
                            </motion.button>
                        </Col>


                        <Col lg="6" md="12" className="text-end counter_img">
                            <img src={counterImg} alt="" />

                        </Col>



                    </Row>
                </Container>
            </section>




            <section className="new_arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2 className="section_title">New Arrivals</h2>
                            <br />
                            <br />
                        </Col>
                        <ProductsListCat data={catProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;