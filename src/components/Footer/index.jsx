import Logo from '../../assets/images/logo-footer.png';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="#header">
                <img src={Logo} alt="Logo Kasa" className="footer-logo" />
            </a>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
