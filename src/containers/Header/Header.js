import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../../shared/appRoutes';
import logo from "../../assets/images/logo.png"
import cart from "../../assets/images/cart.png"
import './Header.css';

const Header = () => {
    let items;
    if (sessionStorage.getItem('items')!=null) {
        items = JSON.parse(sessionStorage.getItem('items'));
    } else {
       items = [];
    }
 
    sessionStorage.setItem('items', JSON.stringify(items));
    let number;
    try {
        number = items.reduce((acc, item) => acc + item.Quantity, 0);
    } catch (e) {
        number = 0;
    }
    return (
        <Container className='Header'>
            <div id="header"></div>
            <div className="head">
                <Link to={routes.home}>
                    <img className="left" src={logo} alt="logo" />
                </Link>
                <p style={{ fontFamily: 'Catamaran' }} className="center">Scotty Shirts U Illustrate (SSUI)</p>
                <Link to={routes.shoppingCart}>
                    <button type="button" className="cart_button">
                        <img className="right" src={cart} alt="shopping-cart" />
                        <span className="cart_number">{number}</span>
                    </button>
                </Link>
            </div>
            <hr />
            <div className="menu">
                <Link to={routes.products} className="menu_Text">T-SHIRTS</Link>
                <Link to={routes.notImplemented} className="menu_Text">CREATE FROM PICTURE</Link>
                <Link to={routes.notImplemented} className="menu_Text">CREATE YOUR OWN</Link>
                <Link to={routes.notImplemented} className="menu_Text">ABOUT US</Link>
                <Link to={routes.notImplemented} className="menu_Text">LOG IN</Link>
            </div>
            <hr />
        </Container>
    );
};
export default Header;
