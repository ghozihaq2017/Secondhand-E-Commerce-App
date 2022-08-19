import React from 'react';

//import style
import './ModalDitawar.css';

//import icon
import { FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function ModalDitawar(props) {
  return (
    <div className="modal-ditawar">
      <FiX
        className="icon-fix"
        onClick={() => {
          props.modal();
        }}
      />
      <h1>Yeay kamu berhasil mendapat harga yang sesuai</h1>
      <h2>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</h2>
      <div className="box-item">
        <h1>Product Match</h1>
        <div className="akun-pembeli">
          <div className="img-item"></div>
          <div className="nama-item">
            <h3>Nama Pembeli</h3>
            <p>Kota</p>
          </div>
        </div>
        <div className="item-ditawar">
          <div className="img-item"></div>
          <div className="nama-item">
            <h3>Jam Tangan Casio</h3>
            <p>
              <s>Rp 250.000</s>
            </p>
            <p>Ditawar Rp 200.000</p>
          </div>
        </div>
      </div>
      <button type="submit">
        Hubungi via Whatsapp
        <FaWhatsapp className="icon-wa" />
      </button>
    </div>
  );
}

export default ModalDitawar;
