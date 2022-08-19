import React from 'react'
import Slider from "react-slick";

//components
import Navbar from '../../../components/Navbar/Navbar';

//style
import './ProdukSeller.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//assets
import imgProduct from '../../../assets/img/product-1.png'
import profile from '../../../assets/img/profile.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: "#8A8A8A",
                borderRadius: "50%",
                paddingTop: "1px",
                fontSize: "30px",
                right: "20px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: "#8A8A8A",
                borderRadius: "50%",
                paddingTop: "1px",
                fontSize: "30px",
                left: "20px",
                zIndex: "1"
            }}
            onClick={onClick}
        />
    );
}
const ProdukSeller = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div
                style={{
                    padding: "5px",
                    bottom: "30px",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <>
            <Navbar />
            <div className="product-seller">
                <div className="image-product">
                    <Slider {...settings} className="slider-product">
                        <div>
                            <img className="img" src={imgProduct} alt="img-product" />
                        </div>
                        <div>
                            <img className="img" src={imgProduct} alt="img-product" />
                        </div>
                        <div>
                            <img className="img" src={imgProduct} alt="img-product" />
                        </div>
                        <div>
                            <img className="img" src={imgProduct} alt="img-product" />
                        </div>
                    </Slider>
                    <div className="box-action">
                        <div className="card">
                            <p className="name">Jam Tangan Casio</p>
                            <p className="category">Aksesoris</p>
                            <p className="price">Rp 250.000</p>
                            <div className="button">
                                <button className="btn btn-terbit">Terbitkan</button>
                                <button className="btn btn-edit">Edit</button>
                            </div>
                        </div>
                        <div className="store">
                            <img className="profile" src={profile} alt="profile" />
                            <div className="info">
                                <p className="name-store">Nama Penjual</p>
                                <p className="city">Kota</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p className="title">Deskripsi</p>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProdukSeller