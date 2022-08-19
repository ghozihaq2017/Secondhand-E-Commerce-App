import React from 'react';
import './NotificationsSeller.css';

function NotificationsSeller() {
  return (
    <div className="notif">
      <div className="notif-seller">
        <div className="box-notif">
          <div className="img-notif"></div>
          <div className="nama-notif">
            <h2>Penawaran Produk</h2>
            <h3>Jam Tangan Casio</h3>
            <p>Rp 250.000</p>
            <p>Ditawar Rp 200.000</p>
          </div>
          <h2 className="date-notif">20 Apr, 14:04</h2>
          <div className="circle-icon"></div>
        </div>
        <hr />
        <div className="box-notif">
          <div className="img-notif"></div>
          <div className="nama-notif">
            <h2>Berhasil Diterbitkan</h2>
            <h3>Jam Tangan Casio</h3>
            <p>Rp 250.000</p>
          </div>
          <h2 className="date-notif">19 Apr, 12:00</h2>
          <div className="circle-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsSeller;
