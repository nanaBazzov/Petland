import React, {useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Container, Row,Col} from "reactstrap";
import '../Style/Cat.css';
import productsCat from '../assets/data/productsCat';
import ProductsListCat from "../components/UI/ProductsListCat";



const Cat = () => {


    const [catData,setCatData] = useState(productsCat);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if( filterValue === "Cat Food"){
            const filteredProducts = productsCat.filter((item) =>
            item.category === "Cat Food");

            setCatData(filteredProducts);
        }


        if( filterValue === "Cat Toys"){
            const filteredProducts = productsCat.filter((item) =>
                item.category === "Cat Toys");

            setCatData(filteredProducts);
        }


        if( filterValue === "Cat equipment"){
            const filteredProducts = productsCat.filter((item) =>
                item.category === "Cat equipment");

            setCatData(filteredProducts);
        }

        if( filterValue === "Cat Treats"){
            const filteredProducts = productsCat.filter((item) =>
                item.category === "Cat Treats");

            setCatData(filteredProducts);
        }
    };


    const handleSearch = (e) => {
        const searchTerm = e.target.value // נותן לנו את האלמנט שהפעיל את האירוע
        const searchedProducts = productsCat.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setCatData(searchedProducts)
    }


    return(

            <Helmet title='Cat Shop'>
            <CommonSection title='Products'/>


                <section>
                    <Container>
                        <Row>
                            <Col lg='3' md='6' className="text-end">
                                <div className="filter_widget">
                                    <select onChange={handleFilter}>
                                        <option>Filter By Category</option>
                                        <option value="Cat Food">Cat Food</option>
                                        <option value="Cat Toys">Cat Toys</option>
                                        <option value="Cat equipment">Cat Equipment</option>
                                        <option value="Cat Treats">Cat Treats</option>

                                    </select>
                                </div>
                            </Col>

                            <Col lg='6' md='12'>
                                <div className="search_box">
                                    <input type="text" placeholder="Search..." onChange={handleSearch}/>
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className="pt-0">
                    <Container>
                        <Row>
                            {
                                catData.length === 0 ? (<h1 className="text-center fs-4">No Products are Found!</h1>
                                ):(
                                        <ProductsListCat data={catData}/>
                                    )
                            }
                        </Row>
                    </Container>
                </section>
            </Helmet>

            )

}

export default Cat;