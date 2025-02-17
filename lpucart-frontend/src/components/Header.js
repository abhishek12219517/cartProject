import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const cartQuantity = cartItems.length;

    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    return (
        <header id="header">
            <div className="container">
                <div className="navbar">
                    <h1 className="header-title">LPU Shopping Cart - Abhishek Kumar</h1>
                    <div className="nav_menu">
                        <Link to="/" className="auth-btn">Home</Link>
                        <Link to="/login" className="auth-btn">Sign In</Link>
                        <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
                        <div 
                            title="Cart" 
                            className="cart_icon" 
                            onClick={() => handleOpenCart(true)}
                        >
                            <img src="/images/bag-icon.svg" alt="bag-icon" />
                            <span className="badge">{cartQuantity}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
