import PropTypes from 'prop-types';
import './Banner.scss';

export default function Banner({ img, text }) {
    return (
        <header className="banner">
            <img src={img} alt="Illustration Bannière" />
            <h1>{text}</h1>
        </header>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string,
};
Banner.defaultProps = {
    text: '',
}
