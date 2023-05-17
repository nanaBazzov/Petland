import React, { useRef, useEffect } from 'react';
// useRef -
// המטרה שלו זה לשמור ראפרנס לערך מסוים - ולשמור את הערך ולא לגרום לקומפוננטה לעשות רינדור אחרי שמעדכנים את הערך
// useeffect - נותן לנו לבצע תופעות לוואי בתוך הקומפוננטה וחשוב לזכור  שהקוד יצא לפועל אך ורק במידה והתלות שהגדרנו משתנה
import { Link, NavLink ,useNavigate} from 'react-router-dom';
import './Header.css';
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user .jpeg'
import {useSelector} from "react-redux";
//useselector - מאפשר לחלץ נתונים ממצב חנות רידקס


const nav_links = [
    {
        path: 'home',
        display: 'Home',
    },

    {
        path: 'catshop',
        display: 'Cat',
    },

    {
        path: 'dogshop',
        display: 'Dog',
    },

    {
        path: 'cart',
        display: 'Cart',
    },

];


const Header = () => {


    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const menuRef = useRef(null);

    const navigate = useNavigate();



    //פונקציה שמאפשרת לnav שלנו להישאר ברגע שאנחנו גוללים באתר שלנו
    // window - אובייקט הוינאו שלנו מייצג את הדפדפן באמצעות האובייקא אנחנו נגרום לדפדפן לבצע פעולות שקשורות לדף שלנו

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement
                .scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')

            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener("scroll", stickyHeaderFunc)
    });


    // classlist - is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
    // DomTokenlist - ממשק מייצג קבוצה של אסימונים מופרדים
    {/*אחראי על הפתיחה של הmenu בצד*/}
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')



    const navigateToCart = () => {
        navigate('/cart')
    }

    const navigateToLogin = () =>{
        navigate('/login')
    }


    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>PetLand</h1>

                            </div>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={(navClass) =>
                                                navClass.isActive ? 'nav_active' : ''}>{item.
                                                    display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav_icons">

                            {/*יש לנו ניווט ישירות cart*/}

                            <span className="cart_icon " onClick={navigateToCart}>
                                <Link to="/cart">
                                    <i className="ri-shopping-bag-line"></i>
                                    <span className="badge">{totalQuantity}</span>
                                </Link>
                            </span>


                            {/*<span className="p-2">*/}
                            {/*        <motion.img whileTap={{ scale: 1.2 }} src={user} alt={user} />*/}
                            
                            {/*</span>*/}

                            {/*יש לנו ניווט ישירות לlogin*/}
                           <span className="p-2" onClick={navigateToLogin}>
                           <motion.img whileTap={{ scale: 1.2 }} src={user} alt={user}/>

                           </span>


                            {/*אחראי על הפתיחה של הmenu בצד*/}
                            <div className="mobile_menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}


export default Header;


// line 43 - אנחנו מחלצים באמצעות useselector את הנתונים מהחנות שלנו , פה חילצנו את הכמות הכוללת
