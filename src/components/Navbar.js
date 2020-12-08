import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './sh-logo.svg';
import Button from './Button';
import Icon from '@material-ui/core/Icon';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1024) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        <img src={ logo } className="sh-logo" alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={ handleClick }>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                                <Icon style={ { fontSize: 30 } }>home</Icon>  Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-links' onClick={ closeMobileMenu }>
                                <Icon style={ { fontSize: 30 } }>shoppingCartIcon</Icon>Shop
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/best-offers' className='nav-links' onClick={ closeMobileMenu }>
                                <Icon style={ { fontSize: 30 } }>loyalty</Icon> Best Offers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                <Icon style={ { fontSize: 30 } } >person </Icon>Sign Up
                            </Link>
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'>SIGN UP</Button> }
                </div>

            </nav>


            <nav className="navbar-mobile">
                <div className="navbar-container-mob">
                    <ul className='nav-menu-mob' >
                        <li className='nav-item-mob'>
                            <Link to='/' className='nav-links-mob' >
                                <Icon style={ { fontSize: 30 } }>home</Icon>  <br />Home
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/shop' className='nav-links-mob'>
                                <Icon style={ { fontSize: 30 } }>shoppingCartIcon</Icon> <br />Shop
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/best-offers' className='nav-links-mob' >
                                <Icon style={ { fontSize: 30 } }>loyalty</Icon> <br /> Best Offers
                            </Link>
                        </li>
                        <li className='nav-item-mob'>
                            <Link to='/sign-up' className='nav-links-mobile-mob' >
                                <Icon style={ { fontSize: 30 } } >person </Icon> <br />Sign Up
                            </Link>
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'> <br />SIGN UP</Button> }
                </div>

            </nav>
        </>
    )
};

export default Navbar;