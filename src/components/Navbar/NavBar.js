import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/pages.svg'
import './NavBar.scss'

const NavBar = (props) => {
console.log(props)
    return (
        <div className="NavBar">
            <nav className="NavBar__Navigation">
                <Link to="/">
                    <img src={Logo} alt="logo" className="NavBar__Logo-img"></img>
                </Link>
                {props.title ? <h2>{props.title}</h2> : ""}
                
                {props.home ? 
                    <div className="NavActionButtons">
                        <Link className="btn btn-outline-danger" to="/create">Create Resume</Link>
                        {/* <Link className="About" to="/about">About</Link> */}
                    </div> : 
                ""}
            </nav>
        </div>
    )
}

export default NavBar;