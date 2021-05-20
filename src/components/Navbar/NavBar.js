import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/pages.svg'
import './NavBar.scss'

const NavBar = (props) => {
    return (
        <div className="navbar-wrapper">
            <nav className="navigation">
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo-img"></img>
                </Link>
                <h2>{props.title}</h2>
            </nav>
        </div>
    )
}

export default NavBar;