import React ,{useState}from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";
import '../Style/Dog.css';
import productsDog from "../assets/data/productsDog";
import ProductsListDog from "../components/UI/ProductsListDog";

const Dog = () => {

    const [dogData,setDogData] = useState(productsDog);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if( filterValue === "Dog Food"){
            const filteredProducts = productsDog.filter((item) =>
                item.category === "Dog Food");

            setDogData(filteredProducts);
        }


        if( filterValue === "Dog equipment"){
            const filteredProducts = productsDog.filter((item) =>
                item.category === "Dog equipment");

            setDogData(filteredProducts);
        }

        if( filterValue === "Dog Treats"){
            const filteredProducts = productsDog.filter((item) =>
                item.category === "Dog Treats");

            setDogData(filteredProducts);
        }


    };


    const handleSearch = (e) => {
        const searchTerm = e.target.value
        const searchedProducts = productsDog.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setDogData(searchedProducts)
    }





    return(

            <Helmet title='Dog Shop'>
            <CommonSection title='Products'/>

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6' className="text-end">
                            <div className="filter_widget">
                                <select onChange={handleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="Dog Food">Dog Food</option>
                                    <option value="Dog equipment">Dog equipment</option>
                                    <option value="Dog Treats">Dog Treats</option>

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
                                dogData.length === 0 ? (<h1 className="text-center fs-4">No Products are Found!</h1>
                                ):(
                                    <ProductsListDog data={dogData}/>
                                )
                            }
                        </Row>
                    </Container>
                </section>
        </Helmet>
    )
}

export default Dog;