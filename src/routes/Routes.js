import React from "react";
import { Routes,Route , Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Cat from "../pages/Cat";
import Cart from "../pages/Cart";
import ProductDetailsCat from "../pages/ProductDetailsCat";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dog from "../pages/Dog";
import ProductDetailsDog from "../pages/ProductsDetailsDog";
import Profile from "../components/Profile/Profile";



const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to="home"/>} />
            <Route path='home' element={<Home/>}/>
            <Route path='catshop' element={<Cat/>}/>
            <Route path='dogshop' element={<Dog/>}/>
            <Route path='dogshop/:id' element={<ProductDetailsDog/>}/>
            <Route path='catShop/:id' element={<ProductDetailsCat/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path="profile" element={<Profile/>}/>




        </Routes>
    )
};

export default Routers;