import React from 'react'
import { Link } from 'react-router-dom'

//assets
import logo from '../../assets/img/logo.png'

//style
import './Navbar.css'

const NavbarKosong = () => {
    return (
        <header>
            <nav className="desktop">
                <div className="logo-searchbar">
                    <Link to="/" className="logo-brand">
                        <img src={logo} alt="brand" className="brand" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavbarKosong