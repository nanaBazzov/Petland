import React from 'react';
import {motion} from "framer-motion";
import '../../Style/ProductCard.css';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// our card structure
const ProductCardDog = ({item}) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        })
        );
        toast.success('Product added successfully')
    };

    return(
        <Col lg='3' md='4' className="mb-2">
        <div className="product_item">
            <div className="product_img">
                <Link to={`/dogshop/${item.id}`}>
                <motion.img whileHover={{scale: 0.9}}
                            src={item.imgUrl} alt=""/>
                </Link>
            </div>

            <div className="p-2 product_info">
                <h3 className="product_name">
                    <Link to={`/dogshop/${item.id}`}>
                        {item.productName}
                    </Link>
                </h3>
                <span>{item.category}</span>
            </div>

            <div className="product_card-bottom d-flex align-items-center
            justify-content-between p-2">

            <span className="price">{item.price}$</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
                <i className="ri-add-line"></i>
            </motion.span>
        </div>
        </div>
        </Col>
    )
};


export default ProductCardDog;