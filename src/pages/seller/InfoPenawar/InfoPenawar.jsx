import React, { useState } from 'react';
import Modal from 'react-modal';

//components
import ModalDitawar from '../../../components/Modal/ModalDitawar/ModalDitawar';
import NavbarKosong from '../../../components/Navbar/NavbarKosong';

//style
import './InfoPenawar.css';

//assets
import profile from '../../../assets/img/profile.png';
import imgProduct from '../../../assets/img/product-1.png';
import BackButton from '../../../components/BackButton/BackButton';

const InfoPenawar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <NavbarKosong />
      <BackButton />
      <div className="title-navbar">
        <p>Info Penawar</p>
      </div>
      <div className="info-penawar">
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
        <div className="button">
          <button className="tolak">Tolak</button>
          <button className="terima" onClick={toggleModal}>
            Terima
          </button>
        </div>
        <hr className="solid" />
      </div>

      <Modal isOpen={isOpen} contentLabel="My dialog" className="mymodal-tawar" overlayClassName="myoverlay" closeTimeoutMS={500}>
        <ModalDitawar modal={toggleModal} />
      </Modal>
    </>
  );
};

export default InfoPenawar;
