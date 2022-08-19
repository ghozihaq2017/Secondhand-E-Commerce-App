import React from 'react';

//import style
import './ModalStatus.css';

//import icon
import { FiX } from 'react-icons/fi';

function ModalStatus(props) {
  return (
    <div className="modal-status">
      <FiX
        className="icon-fix"
        onClick={() => {
          props.modal();
        }}
      />
      <h1>Perbarui status penjualan produkmu</h1>
      <form>
        <input type="radio" id="accept-transaction" name="modal-status" value={'accept'} />
        <label for="accept-transaction" className="accept-radio">
          Berhasil Terjual
        </label>
        <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>

        <input type="radio" id="cancel-transaction" name="modal-status" value={'cancel'} />
        <label for="cancel-transaction" className="cancel-radio">
          Batalkan Transaksi
        </label>
        <p>Kamu membatalkan transaksi produk ini dengan pembeli</p>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default ModalStatus;
