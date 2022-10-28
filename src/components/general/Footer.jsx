import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
    return ( 
        <footer id="footer">
            <nav aria-label='primary'>
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list__item">
                        <Link to="/create-your-plan">Create your plan</Link>
                    </li>
                </ul>
            </nav>

            <div className='social-links'>
                <a href="#" className='social-links__item'>
                    <Facebook />
                    <span className='sr-only'>Facebook</span>
                </a>
                <a href="#" className='social-links__item'>
                    <Twitter />
                    <span className='sr-only'>Twitter</span>
                </a>
                <a href="#" className='social-links__item'>
                    <Instagram />
                    <span className='sr-only'>Instagram</span>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;