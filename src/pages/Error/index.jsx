import { Link } from 'react-router-dom';
import './Error.scss';

export default function Error() {
    return (
        <main className="error-main">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link className="error__link-to-home" to="/">
                Retourner sur la page d’accueil
            </Link>
        </main>
    );
}
