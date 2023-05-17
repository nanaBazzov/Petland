import React from 'react';
import ProductCardCat from "./ProductCardCat";
import '../../Style/ProductsList.css';


const ProductsListCat = ({data}) => {
    return(
        <>
            {
                data?.map((item,index )=> (

                    <ProductCardCat item={item} key={index}/>

                ))
            }


        </>
    );
};


export default ProductsListCat;