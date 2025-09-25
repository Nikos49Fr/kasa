import './Collapse.scss';
import collapseArrow from '../../assets/images/collapse-arrow.png';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse({ title, content }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const contentRef = useRef(null);

    function renderContent(content) {
        if (Array.isArray(content)) {
            return (
                <ul className="collapse-list">
                    {content.map((item, i) => (
                        <li key={`${item}-${i}`}>{item}</li>
                    ))}
                </ul>
            );
        }
        return content;
    }

    return (
        <article className="collapse-main">
            <div className="collapse-titleBar">
                <h2 className="collapse-title">{title}</h2>
                <img
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={isCollapsed ? 'arrow-expand' : 'arrow-collapse'}
                    src={collapseArrow}
                    alt="Flèche pour ouvrir/fermer la description"
                />
            </div>
            <div
                className="collapse-content"
                style={{
                    maxHeight: isCollapsed
                        ? '0px'
                        : `${contentRef.current?.scrollHeight}px`,
                }}
            >
                <div ref={contentRef} className="collapse-body">
                    {renderContent(content)}
                </div>
            </div>
        </article>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};
