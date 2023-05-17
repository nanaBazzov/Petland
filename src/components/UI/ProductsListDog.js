import React from 'react';
import ProductCardDog from "./ProductCardDog";
import '../../Style/ProductsList.css';


const ProductsListDog = ({ data }) => {
    return(
        <>
            {
                data?.map((item,index) => (

                    <ProductCardDog item={item} key={index}/>

                ))
            }


        </>
    );
};


export default ProductsListDog;