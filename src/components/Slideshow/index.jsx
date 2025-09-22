import './Slideshow.scss';
import Properties from '../../assets/data/logements';
import leftarrow from '../../assets/images/leftarrow.png';
import rightarrow from '../../assets/images/rightarrow.png';
import { useState } from 'react';

export default function Slideshow({ id }) {
    const pictures = Properties.find((p) => p.id === id)?.pictures || [];
    const [currentIndex, setCurrentindex] = useState(0);
    const len = pictures.length;

    function previousPicture() {
        setCurrentindex((i) => (i === 0 ? len - 1 : i - 1));
    }
    function nextPicture() {
        setCurrentindex((i) => (i === len - 1 ? 0 : i + 1));
    }

    return (
        <div className="slideshow">
            <img
                src={pictures[currentIndex]}
                alt="Photo du logement"
                className="slideshow__img"
            />
            {pictures.length > 1 && (
                // fragment pour englober mes 3 items
                <>
                    <img
                        src={leftarrow}
                        alt="Navigation vers photo précédente"
                        className="slideshow__arrow slideshow__arrow--left"
                        onClick={previousPicture}
                    />
                    <img
                        src={rightarrow}
                        alt="Navigation vers photo suivante"
                        className="slideshow__arrow slideshow__arrow--right"
                        onClick={nextPicture}
                    />
                    <span className="slideshow__counter">
                        {currentIndex + 1}/{len}
                    </span>
                </>
            )}
        </div>
    );
}
