import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        </div>

                        <div className='header_right'>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;