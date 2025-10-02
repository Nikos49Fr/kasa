import activeStar from '../../assets/images/active-star.png';
import inactiveStar from '../../assets/images/inactive-star.png';
import './rating.scss';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {
    // convertion en nombre + clamping
    const value = Math.max(0, Math.min(5, Number(rating) || 0));

    return (
        <div
            className="property__rating"
            role="img"
            aria-label={`${value} sur 5`}
        >
            {Array.from({ length: 5 }, (_, i) => (
                <img
                    key={i}
                    src={i < value ? activeStar : inactiveStar}
                    alt=""
                    aria-hidden="true"
                    className="property__rating-star"
                />
            ))}
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};
Rating.defaultProps = {
    rating: '0',
};
