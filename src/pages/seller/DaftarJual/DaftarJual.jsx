import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../actions/product';

//components
import Navbar from '../../../components/Navbar/Navbar';

// assets
import './DaftarJual.css';
import profile from '../../../assets/img/profile.png';

// icons
import { FiBox } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DaftarJual = () => {
    const { getAllDataProductResult, getAllDataProductLoading, getAllDataProductError } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('1. useEffect DidMount');
        dispatch(getAllProduct());
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <div className="daftarjual-wrapper">
                <h1 className="daftarjual-title">Daftar Jual Saya</h1>
                <div className="store-info">
                    <div className="info">
                        <img className="profile" src={profile} alt="profile" />
                        <div className="seller-info">
                            <p className="name-store">Nama Penjual</p>
                            <p className="city">Kota</p>
                        </div>
                    </div>
                    <a className="btn-edit" href="/#">
                        Edit
                    </a>
                </div>
                <div className="category-filter-wrapper">
                    <div className="filter-category">
                        <h6 className="title-category">Kategori</h6>
                        <Link className="filter-category-btn" to="#">
                            <FiBox className="filter-category-icon" />
                            Semua Produk <FiChevronRight />
                        </Link>
                        <hr />
                        <Link className="filter-category-btn" to="#">
                            <FiHeart className="filter-category-icon" />
                            Diminati <FiChevronRight />
                        </Link>
                        <hr />
                        <Link className="filter-category-btn" to="#">
                            <FiDollarSign className="filter-category-icon" />
                            Terjual <FiChevronRight />
                        </Link>
                    </div>
                    <div className="konten-daftar-jual">
                        {getAllDataProductResult ? (
                            getAllDataProductResult.map((produk) => {
                                return (
                                    <div className="card-product" key={produk.produkId}>
                                        <Link to="#">
                                            <img src={produk.image[0].imagelink} alt="" />
                                        </Link>
                                        <h1 className="product-name">{produk.produkname}</h1>
                                        <p className="category-name">{produk.categoryId}</p>
                                        <p className="product-price">{'Rp ' + produk.hargaProduk}</p>
                                    </div>
                                );
                            })
                        ) : getAllDataProductLoading ? (
                            <p>Loading . . .</p>
                        ) : (
                            <p>{getAllDataProductError ? getAllDataProductError : 'Data Kosong'}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DaftarJual;
