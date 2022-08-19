import React, { useState, useRef } from 'react';

//components
import NavbarKosong from '../../../components/Navbar/NavbarKosong';
import BackButton from '../../../components/BackButton/BackButton'

//assets
import { FiCamera } from 'react-icons/fi';

//style
import './FormInfoProfil.css';

function FormInfoProfil() {
  const [avatar, setAvatar] = useState(null);
  const filePickerRef = useRef();

  const uploadAvatar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setAvatar(readerEvent.target.result);
    };
  };
  return (
    <>
      <NavbarKosong />
      <BackButton />
      <div className="title-navbar-profil">
        <p>Lengkapi Info Profil</p>
      </div>
      <div className="form-profil">
        <div className="form-head">
          <div className="upload-photo">
            {!avatar && (
              <div className="upload-placeholder" onClick={() => filePickerRef.current.click()}>
                <span className="camera">
                  <FiCamera />
                </span>
              </div>
            )}
            {avatar && <img className="upload-content" src={avatar} alt="img" onClick={() => filePickerRef.current.click()} />}
            <input hidden onChange={uploadAvatar} ref={filePickerRef} type="file" />
          </div>
        </div>
        <div className="form-content">
          <form>
            <label htmlFor="inputNama" className="form-label">
              Nama*
              <input type="text" className="form-control" id="inputNama" placeholder="Nama" required />
            </label>
            <label htmlFor="inputKota" className="form-label">
              Kota*
              <input type="text" className="form-control" id="inputKota" placeholder="Pilih Kota" required />
            </label>
            <label htmlFor="inputAlamat" className="form-label">
              Alamat*
              <textarea type="text" className="form-control" placeholder="Contoh: Jalan Ikan Hiu 33" id="inputAlamat" required></textarea>
            </label>
            <label htmlFor="inputNoHp" className="form-label">
              No Handphone*
              <input type="text" className="form-control" id="inputNoHp" placeholder="contoh: +628123456789" required />
            </label>
            <button type="submit" className="btn">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormInfoProfil;
