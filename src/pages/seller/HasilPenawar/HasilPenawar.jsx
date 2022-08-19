import React from 'react'

//components
import NavbarKosong from '../../../components/Navbar/NavbarKosong'
import BackButton from '../../../components/BackButton/BackButton'

//style
import './HasilPenawar.css'

//assets
import profile from '../../../assets/img/profile.png'
import imgProduct from '../../../assets/img/product-1.png'

const HasilPenawar = () => {
    return (
        <>
            <NavbarKosong />
            <BackButton />
            <div className="title-navbar">
                <p>Info Penawar</p>
            </div>
            <div className="hasil-penawar">
                <div className="buyer">
                    <img className="profile" src={profile} alt="profile" />
                    <div className="info">
                        <p className="name-buyer">Nama Pembeli</p>
                        <p className="city">Kota</p>
                    </div>
                </div>
                <p className="title">Daftar produk yang ditawar</p>
                <div className="info-tawar">
                    <img className="product" src={imgProduct} alt="product" />
                    <div className="content">
                        <div className="flex">
                            <p>Penawar Produk</p>
                            <p>20 April, 14:04</p>
                        </div>
                        <p className="tawar">Jam Tangan Casio</p>
                        <p className="tawar">Rp 250.000</p>
                        <p className="tawar">Ditawar Rp 200.000</p>
                    </div>
                </div>
                <hr className="solid" />
            </div>
        </>
    )
}

export default HasilPenawar