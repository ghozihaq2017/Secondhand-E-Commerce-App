import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from "../../actions/auth";

import EventBus from "../../common/EventBus";

//assets
import brand from '../../assets/img/brand.png'
import logo from '../../assets/img/logo.png'

//icons
import { FiSearch, FiLogIn, FiMenu, FiX, FiList, FiBell, FiUser, FiChevronDown } from 'react-icons/fi'

//styles
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <header>
            <nav className="desktop">
                <div className="logo-searchbar">
                    <Link to="/" className="logo-brand">
                        <img src={logo} alt="brand" className="brand" />
                    </Link>
                    <form className="search">
                        <input className="search-input" type="text" placeholder='Cari di sini...' />
                        <button className="search-btn" type='submit'>
                            <FiSearch className="search-icon" />
                        </button>
                    </form>
                </div>
                {currentUser ? (
                    <ul className="menu">
                        <li className="list">
                            <Link role="button" className="list-btn" to="/#">
                                <FiList />
                            </Link>
                        </li>
                        <li className="list">
                            <FiBell />
                        </li>
                        <li className="list dropdown">
                            <FiUser />
                            <FiChevronDown />
                            <ul class="isi-dropdown">
                                <li className="link-dropdown">
                                    <Link role="button" className="link profile" to="/form-info-profil">
                                        Profil Saya
                                    </Link>
                                </li>
                                <li className="link-dropdown">
                                    <Link role="button" className="link logout" to="/login" onClick={logOut}>
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                ) : (
                    <ul className="menu">
                        <li className="list">
                            <Link className="login-btn" to="/login">
                                <FiLogIn className="login-icon" />
                                Masuk
                            </Link>
                        </li>
                    </ul>
                )
                }
            </nav>

            <nav className="mobile">
                <div className="navbar">
                    <Link to="/" className="menu-bar">
                        <FiMenu className="hamburger" onClick={showSidebar} />
                    </Link>
                    <form className="search">
                        <input className="search-input" type="text" placeholder='Cari di sini...' />
                        <button className="search-btn" type='submit'>
                            <FiSearch className="search-icon" />
                        </button>
                    </form>
                </div>
                <div className={sidebar ? "menu-background active" : "menu-background"} onClick={showSidebar}></div>
                <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <div className="menu-list">
                        <ul className="menu">
                            <li className="title-list">
                                <Link to="#" className="logo-brand">
                                    <img src={brand} alt="brand" className="brand" />
                                </Link>
                                <Link to="#" className="menu-bar">
                                    <FiX className="menu-close" onClick={showSidebar} />
                                </Link>
                            </li>
                            {currentUser ? (
                                <li className="list">
                                    <Link className="link" to="#">
                                        <button className="teks">Notifikasi</button>
                                    </Link>
                                    <Link className="link" to="#">
                                        <button className="teks">Daftar Jual</button>
                                    </Link>
                                    <ul className="list-dropdown">
                                        <li className="list dropdown">
                                            Akun Saya
                                            <FiChevronDown />
                                            <ul class="isi-dropdown">
                                                <li className="link-dropdown">
                                                    <Link role="button" className="link profile" to="/form-info-profil">
                                                        Profil Saya
                                                    </Link>
                                                </li>
                                                <li className="link-dropdown">
                                                    <Link role="button" className="link logout" to="/login" onClick={logOut}>
                                                        Log Out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="list">
                                    <Link className="login-btn" to="/login">
                                        <FiLogIn className="login-icon" />
                                        Masuk
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar