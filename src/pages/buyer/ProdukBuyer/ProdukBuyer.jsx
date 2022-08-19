import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { getDetailProduct } from '../../../actions/product'
import { getAllProductByCategory } from '../../../actions/product';
import { getUser } from '../../../actions/user'

//components
import Navbar from '../../../components/Navbar/Navbar';
import ModalInput from '../../../components/Modal/ModalInput/ModalInput';

//style
import './ProdukBuyer.css';

//assets
import profile from '../../../assets/img/profile.png';
import { useDispatch, useSelector } from 'react-redux';

Modal.setAppElement('#root');

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: '#8A8A8A',
                borderRadius: '50%',
                paddingTop: '1px',
                fontSize: '30px',
                right: '20px',
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
                background: '#8A8A8A',
                borderRadius: '50%',
                paddingTop: '1px',
                fontSize: '30px',
                left: '20px',
                zIndex: '1',
            }}
            onClick={onClick}
        />
    );
}
const ProdukBuyer = () => {

    //Get Detail Data 
    let { id } = useParams();

    const { getDataProductResult } = useSelector((state) => state.productReducer);
    const { getUserResult } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id));
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id])

    //Modal
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(id) {
        setIsOpen(!isOpen);
        dispatch(getAllProductByCategory(id))
    }

    //Image Slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    padding: '5px',
                    bottom: '30px',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
    };


    return (
        <>
            <Navbar />
            <div className="product">
                <div className="image-product">
                    <Slider {...settings} className="slider-product">
                        {getDataProductResult?.image?.map((image) => {
                            return (
                                <div>
                                    <img className="img" src={image?.imagelink} alt="img-product" />
                                </div>
                            )
                        })}
                    </Slider>
                    <div className="box-action">
                        <div className="card">
                            <p className="name">{getDataProductResult.produkname}</p>
                            <p className="category">{getDataProductResult.categoryName}</p>
                            <p className="price">Rp {getDataProductResult.hargaProduk}</p>
                            <div className="button">
                                <button className="btn btn-terbit" onClick={toggleModal}>
                                    Saya tertarik dan ingin nego
                                </button>
                            </div>
                        </div>
                        <div className="store">
                            <img className="profile" src={profile} alt="profile" />
                            <div className="info">
                                <p className="name-store">{getUserResult.name}</p>
                                <p className="city">{getUserResult.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p className="title">Deskripsi</p>
                    <p className="content">
                        {getDataProductResult.deskripsi}
                    </p>
                </div>
            </div>
            <Modal isOpen={isOpen} contentLabel="My dialog" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={500}>
                <ModalInput modal={toggleModal} />
            </Modal>
        </>
    );
};

export default ProdukBuyer;
