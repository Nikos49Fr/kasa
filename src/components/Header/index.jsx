import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

export default function Header() {
    return (
        <header className='header' id='header'>
            <Link className='header-logo' to="/">
                <img src={Logo} alt="Logo Kasa"/>
            </Link>
            <nav className='header-nav'>
                <Link to="/">
                    Accueil
                </Link>
                <Link to="/a-propos">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}