import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//style
import './App.css';

//pages
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Home from './pages/home/Home';
import FormInfoProfil from './pages/buyer/FormInfoProfil/FormInfoProfil';
import ProdukBuyer from './pages/buyer/ProdukBuyer/ProdukBuyer';
import DaftarJual from './pages/seller/DaftarJual/DaftarJual';
import FormInfoProduk from './pages/seller/FormInfoProduk/FormInfoProduk';
import ProdukSeller from './pages/seller/ProdukSeller/ProdukSeller';
import InfoPenawar from './pages/seller/InfoPenawar/InfoPenawar';
import StatusPenawar from './pages/seller/StatusPenawar/StatusPenawar';
import HasilPenawar from './pages/seller/HasilPenawar/HasilPenawar';

function App() {
    return (
        <Router className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produk-saya" element={<DaftarJual />} />
                <Route path="/detail-produk/:id" element={<ProdukBuyer />} />
                <Route path="/form-info-profil" element={<FormInfoProfil />} />
                <Route path="/seller/detail-produk" element={<ProdukSeller />} />
                <Route path="/seller/form-info-produk" element={<FormInfoProduk />} />
                <Route path="/seller/info-penawar" element={<InfoPenawar />} />
                <Route path="/seller/status-penawar" element={<StatusPenawar />} />
                <Route path="/seller/hasil-penawar" element={<HasilPenawar />} />
            </Routes>
        </Router>
    );
}

export default App;
