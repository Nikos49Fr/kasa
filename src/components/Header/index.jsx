import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

export default function Header() {
    return (
        <header className="header" id="header">
            <Link className="header-logo" to="/">
                <img src={Logo} alt="Logo Kasa" />
            </Link>
            <nav className="header-nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `header-nav__link ${
                            isActive ? 'header-nav__link--active' : ''
                        }`
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/a-propos"
                    end
                    className={({ isActive }) =>
                        `header-nav__link ${
                            isActive ? 'header-nav__link--active' : ''
                        }`
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
