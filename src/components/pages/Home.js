import React from 'react';
import '../../App.css';
import Category from '../Category';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Category />
            <Footer />
        </>
    );
}
export default Home;