import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

//Components
import Hero from '../../components/Hero/Hero'
import HeroMobile from '../../components/Hero/HeroMobile'
import ListProducts from '../../components/ListProducts/ListProducts'
import Navbar from '../../components/Navbar/Navbar'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// style
import './Home.css'

const Home = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <div className='home-wrapper'>
            <Navbar />
            <Hero />
            <HeroMobile />
            <ListProducts />
        </div>
    )
}

export default Home