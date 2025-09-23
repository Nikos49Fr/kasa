import './Slideshow.scss';
import Properties from '../../assets/data/logements';
import leftarrow from '../../assets/images/leftarrow.png';
import rightarrow from '../../assets/images/rightarrow.png';
import { useState } from 'react';

export default function Slideshow({ id }) {
    const pictures = Properties.find((p) => p.id === id)?.pictures || [];
    const len = pictures.length;
    const [currentIndex, setCurrentindex] = useState(0);

    function previousPicture() {
        setCurrentindex((i) => (i === 0 ? len - 1 : i - 1));
    }
    function nextPicture() {
        setCurrentindex((i) => (i === len - 1 ? 0 : i + 1));
    }

    // fonction pour l'animation : retourne une classe à la slide active + les slides suivantes et précédentes :
    function getSlideStatus(i, current, len) {
        if (len === 0) return '';
        if (i === current) return 'is-active';
        const prev = (current - 1 + len) % len;
        const next = (current + 1) % len;
        if (i === prev) return 'is-prev';
        if (i === next) return 'is-next';
        return ''; // slides “hors voisinage” (restent off-screen)
    }

    function showNextPreviousCounter() {
        return (
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
        );
    }

    return (
        <div className="slideshow">
            {pictures.map((src, i) => {
                const status = getSlideStatus(i, currentIndex, len);
                return (
                    <img
                        key={src}
                        src={src}
                        alt="Photo du logement"
                        className={`slideshow__img ${status}`}
                    />
                );
            })}
            ;{len > 1 && showNextPreviousCounter()}
        </div>
    );
}
