import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getDetailProduct } from '../../../actions/product';

// import style
import './ModalInput.css';

// import icon
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

function ModalInput(props) {

    let { id } = useParams();

    const { getDataProductResult } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id])

    return (
        <div className="modal-input">
            <FiX
                className="icon-fix"
                onClick={() => {
                    props.modal();
                }}
            />
            <h1>Masukkan Harga Tawarmu</h1>
            <h2>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</h2>
            <div className="box-item">
                <div className="img-item">
                    <img src={getDataProductResult.image?.[0]?.imagelink} alt="" />
                </div>
                <div className="nama-item">
                    <h3>{getDataProductResult.produkname}</h3>
                    <p>Rp {getDataProductResult.hargaProduk}</p>
                </div>
            </div>
            <form>
                <label for="inputHarga" className="harga-tawar">
                    Harga Tawar
                    <input type="text" id="inputHarga" placeholder="Rp 0,00" />
                </label>
                <button type="submit">Kirim</button>
            </form>
        </div>
    );
}

export default ModalInput;
