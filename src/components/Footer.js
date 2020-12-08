import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Get the latest news and exclusive offers
        </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Shawareb Mart</h2>
                        <p> Welcome to Shawareb Mart Shop. Shawareb store will collect the best goods and the fastest services .</p>
                        <p> Jordan/Amman</p>
                        <p> Phone: 0770009911</p>
                    </div>
                    <div class='footer-link-items'>
                        <h2>OUR SITE</h2>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Return Policy</Link>
                        <Link to='/'>Advertise With Us</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Main Category</h2>
                        <Link to='/'>Supermarket</Link>
                        <Link to='/'>Fruits & Vegetables</Link>
                        <Link to='/'>Home Supply</Link>
                        <Link to='/'>Beauty & Perfumes</Link>
                        <Link to='/'>Baby & Toys</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>MY ACCOUNT</h2>
                        <Link to='/'>Orders</Link>
                        <Link to='/'>Addresses</Link>
                        <Link to='/'>Account details</Link>
                        <Link to='/'>Wishlist</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Shawareb Mart
                        </Link>
                    </div>
                    <small class='website-rights'>Shawareb Mart © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
