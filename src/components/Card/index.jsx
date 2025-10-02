import PropTypes from 'prop-types';
import './card.scss';
import { Link } from 'react-router';

export default function Card({ id, title, picture }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={picture} alt={title} />
            <span className="card-tag">{title}</span>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    id: '',
    title: 'Titre de la location',
    picture: '',
};
