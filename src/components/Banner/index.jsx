import PropTypes from 'prop-types';
import './Banner.scss';

export default function Banner({ img, variant, text }) {
    return (
        <header className={`banner banner--${variant}`}>
            <img src={img} alt="Illustration Bannière" />
            {text && <h1>{text}</h1>}
        </header>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    text: PropTypes.string,
};
Banner.defaultProps = {
    text: '',
};
