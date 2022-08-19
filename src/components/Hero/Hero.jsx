import React, { useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Hero.css'

import img1 from "../../assets/img/banner_1.png"
import img2 from "../../assets/img/banner_4.png"
import img3 from "../../assets/img/banner_2.png"
import img4 from "../../assets/img/banner_3.png"


const images = [img1, img2, img3, img4];

const Hero = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "150px",
        arrows: false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerPadding: 0,
                    initialSlide: 1
                },
            },
        ],
    };

    return (
        <div className='hero'>
            <div className="desktop">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero