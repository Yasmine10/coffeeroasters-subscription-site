import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';

const Header = () => {
    return ( 
        <header id="header">
            <nav>
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>

                <button id="nav-toggle" className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/create-your-plan">Create your plan</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;