import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeastMaster4k from "../../../../images/BeastMaster4k.png"
import "./Header.css";

const Header = () => {
    return (
        <div>
            <header className='header_section universal_style'>
                <div className='container'>
                    <div className='header_area'>
                        <div className='header_left'>
                            <div className='hamburger_icon_wrapper'>
                                <div className='hamburger_icon'>
                                    <span className='hamburger_row row1'></span>
                                    <span className='hamburger_row row2'></span>
                                    <span className='hamburger_row row3'></span>
                                </div>
                            </div>
                            <div className='header_logo'>
                                <img src = {BeastMaster4k}/>

                            </div>
                        </div>


                        <div className='header_right'>
                            <ul className='header_icon_list'>
                                <li className='header_icon_item'>
                                    <span className='header_icon_link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.207" height="17.207"
                                        viewBox="0 0 17.207 17.207">
                                        <path id="Search"
                                            d="M15.968,15.027,11.8,10.857a6.668,6.668,0,1,0-.941.941l4.169,4.169ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                                            transform="translate(0.532 0.532)" fill="#fff" stroke="#fff" strokeWidth="1" />
                                    </svg>
                                    </span>
                                </li>
                                <li className='header_icon_item'>
                                    <span className='header_icon_link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.75" height="17"
                                            viewBox="0 0 12.75 17">
                                            <path id="Account"
                                                d="M2.125,4.25A4.25,4.25,0,1,1,6.375,8.5a4.25,4.25,0,0,1-4.25-4.25ZM9.239,9.917H3.511A3.515,3.515,0,0,0,0,13.428V17H12.75V13.428A3.515,3.515,0,0,0,9.239,9.917Z"
                                                fill="#fff" />
                                        </svg>
                                    </span>
                                </li>
                                <li className='header_icon_item'>
                                    <span className='header_icon_link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14.921"
                                            viewBox="0 0 16 14.921">
                                            <path id="Wishlist"
                                                d="M11.66.917A4.265,4.265,0,0,0,8,3.116,4.265,4.265,0,0,0,4.33.917,4.531,4.531,0,0,0,0,5.615c0,4.515,7.3,9.729,7.612,9.951L8,15.838l.385-.273c.311-.22,7.612-5.436,7.612-9.951A4.531,4.531,0,0,0,11.66.917Z"
                                                transform="translate(0.005 -0.917)" fill="#fff" />
                                        </svg>
                                    </span>
                                </li>
                                <li className='header_icon_item'>
                                    <span className='header_icon_link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                            <path id="Cart"
                                                d="M12,4A4,4,0,1,0,4,4H0V14a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4ZM8,1.333A2.667,2.667,0,0,1,10.667,4H5.333A2.667,2.667,0,0,1,8,1.333Z"
                                                transform="translate(0 0)" fill="#fff" />
                                        </svg>
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;