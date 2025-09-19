import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-footer.png';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <Link className='footer-logo' to="/#header">
                <img src={Logo} alt="Logo Kasa"/>
            </Link>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}