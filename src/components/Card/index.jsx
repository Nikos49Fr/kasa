import PropTypes from 'prop-types';
import './Card.scss';

export default function Card({ title, picture }) {

    return (
        <article className='card'>
            <img src={picture} alt={title} />
            <span className='card-tag'>{title}</span>
        </article>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    title: 'Titre de la location',
    picture: '',
};
